import ProfitCard from "../components/ProfitCard";
import SalesCard from "../components/SalesCard";
const Dashboard = () => {
  return (
    <section className="px-[26px]">
      <div className="flex gap-x-3 w-full h-[200px]">
        <SalesCard />
        <ProfitCard />
        <div className="rounded-[16px] bg-white h-full w-5/12"></div>
      </div>
    </section>
  );
};

export default Dashboard;
