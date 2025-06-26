import Icon from "@/components/ui/icon";

const BonusLevels = () => {
  const levels = [
    {
      name: "Серебряный",
      points: "0-5,000",
      cashback: "3%",
      benefits: ["Базовый кешбэк", "Скидки на день рождения"],
      icon: "Medal",
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
    {
      name: "Золотой",
      points: "5,001-20,000",
      cashback: "5%",
      benefits: [
        "Увеличенный кешбэк",
        "Приоритетная поддержка",
        "Эксклюзивные акции",
      ],
      icon: "Crown",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      current: true,
    },
    {
      name: "Платиновый",
      points: "20,001+",
      cashback: "7%",
      benefits: [
        "Максимальный кешбэк",
        "Персональный менеджер",
        "VIP-акции",
        "Бесплатная доставка",
      ],
      icon: "Gem",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Уровни программы</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {levels.map((level, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
              level.current
                ? "border-purple-500 bg-purple-50 shadow-md"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-full ${level.bgColor}`}>
                <Icon
                  name={level.icon as any}
                  className={level.color}
                  size={24}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{level.name}</h3>
                <p className="text-sm text-gray-600">{level.points} баллов</p>
              </div>
              {level.current && (
                <div className="ml-auto bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Текущий
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {level.cashback}
              </div>
              <div className="text-sm text-gray-600">кешбэк с покупок</div>
            </div>

            <ul className="space-y-2">
              {level.benefits.map((benefit, benefitIndex) => (
                <li
                  key={benefitIndex}
                  className="flex items-center gap-2 text-sm"
                >
                  <Icon name="Check" className="text-green-500" size={16} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusLevels;
