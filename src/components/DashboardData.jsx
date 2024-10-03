import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import ProfitCard from "../components/ProfitCard";
import SalesCard from "../components/SalesCard";

const DashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/dashboard");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex gap-x-3 w-full h-[200px] mb-[17px]">
      <SalesCard totalSalesAndCosts={data.totalSalesAndCosts} />
      <ProfitCard totalProfit={data.totalProfit} />
      <CountryCard salesByCountry={data.salesByCountry} />
    </div>
  );
};

export default DashboardData;
