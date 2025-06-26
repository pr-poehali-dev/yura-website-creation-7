import CasesHeader from "@/components/CasesHeader";
import CaseGrid from "@/components/CaseGrid";
import CaseBattles from "@/components/CaseBattles";
import RecentDrops from "@/components/RecentDrops";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <CasesHeader />
        <CaseGrid />
        <CaseBattles />
        <RecentDrops />
      </div>
    </div>
  );
};

export default Index;
