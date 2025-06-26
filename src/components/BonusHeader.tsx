import Icon from "@/components/ui/icon";

const BonusHeader = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 text-white p-8 rounded-xl mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">Бонусная программа</h1>
          <p className="text-purple-200 text-lg">
            Получайте бонусы за каждую покупку и активность
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold">15,240</div>
          <div className="text-purple-200">бонусных баллов</div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">Ваш уровень: Золотой</span>
          <div className="flex items-center gap-2">
            <Icon name="Crown" className="text-yellow-400" size={24} />
            <span className="text-sm">До следующего: 760 баллов</span>
          </div>
        </div>

        <div className="w-full bg-white/20 rounded-full h-3 mb-2">
          <div
            className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-purple-200">
          <span>Серебряный</span>
          <span>Золотой</span>
          <span>Платиновый</span>
        </div>
      </div>
    </div>
  );
};

export default BonusHeader;
