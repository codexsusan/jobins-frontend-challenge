import DashboardData from "../components/DashboardData";
import OrderSection from "../components/OrderSection";
import UserInfoCard from "../components/UserInfoCard";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-[#f5f5f5] pt-[75px] px-[26px] border-b border-blue-500 flex flex-col pb-8">
      <DashboardData />
      <UserInfoCard />
      <OrderSection />
    </section>
  );
};

export default Dashboard;
