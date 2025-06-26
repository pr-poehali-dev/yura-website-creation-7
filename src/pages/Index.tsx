import BonusHeader from "@/components/BonusHeader";
import BonusLevels from "@/components/BonusLevels";
import AvailableBonuses from "@/components/AvailableBonuses";
import BonusHistory from "@/components/BonusHistory";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BonusHeader />
        <BonusLevels />
        <AvailableBonuses />
        <BonusHistory />
      </div>
    </div>
  );
};

export default Index;
