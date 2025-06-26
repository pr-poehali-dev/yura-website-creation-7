import Icon from "@/components/ui/icon";

const AvailableBonuses = () => {
  const bonuses = [
    {
      title: "Скидка 20% на технику",
      description: "Действует до конца месяца",
      cost: 500,
      type: "discount",
      icon: "Zap",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Бесплатная доставка",
      description: "На любой заказ",
      cost: 200,
      type: "shipping",
      icon: "Truck",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Кешбэк x2",
      description: "Удвоенные бонусы на неделю",
      cost: 1000,
      type: "cashback",
      icon: "RefreshCw",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      title: "VIP поддержка",
      description: "Приоритетная линия на месяц",
      cost: 800,
      type: "support",
      icon: "Headphones",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Доступные бонусы</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {bonuses.map((bonus, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${bonus.bgColor}`}>
                  <Icon
                    name={bonus.icon as any}
                    className={bonus.color}
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{bonus.title}</h3>
                  <p className="text-gray-600 text-sm">{bonus.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="Star" className="text-yellow-500" size={16} />
                <span className="font-bold text-purple-600">
                  {bonus.cost} баллов
                </span>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                Получить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableBonuses;
