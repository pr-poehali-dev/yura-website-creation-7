import Icon from "@/components/ui/icon";

const BonusHistory = () => {
  const history = [
    {
      date: "15 ноября 2024",
      action: "Покупка товаров",
      points: "+240",
      type: "earned",
      icon: "Plus",
    },
    {
      date: "12 ноября 2024",
      action: "Скидка 15%",
      points: "-300",
      type: "spent",
      icon: "Minus",
    },
    {
      date: "8 ноября 2024",
      action: "Регистрация друга",
      points: "+500",
      type: "earned",
      icon: "UserPlus",
    },
    {
      date: "5 ноября 2024",
      action: "Покупка товаров",
      points: "+180",
      type: "earned",
      icon: "Plus",
    },
    {
      date: "1 ноября 2024",
      action: "Бесплатная доставка",
      points: "-200",
      type: "spent",
      icon: "Truck",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">История бонусов</h2>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700">
            <div>Дата</div>
            <div>Действие</div>
            <div>Баллы</div>
            <div></div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {history.map((item, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="text-sm text-gray-600">{item.date}</div>
                <div className="flex items-center gap-2">
                  <Icon
                    name={item.icon as any}
                    className={
                      item.type === "earned"
                        ? "text-green-500"
                        : "text-orange-500"
                    }
                    size={16}
                  />
                  <span>{item.action}</span>
                </div>
                <div
                  className={`font-bold ${item.type === "earned" ? "text-green-600" : "text-orange-600"}`}
                >
                  {item.points}
                </div>
                <div className="text-right">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusHistory;
