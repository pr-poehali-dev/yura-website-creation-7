import Icon from "@/components/ui/icon";

const RecentDrops = () => {
  const recentDrops = [
    {
      id: 1,
      player: "ProGamer2024",
      item: "AK-47 Fire Serpent",
      value: 2847.3,
      rarity: "mythical",
      caseName: "Elite Collection",
      timeAgo: "2 мин назад",
      avatar: "PG",
    },
    {
      id: 2,
      player: "LuckyWinner",
      item: "Karambit Doppler Phase 2",
      value: 1250.0,
      rarity: "legendary",
      caseName: "Knife Paradise",
      timeAgo: "5 мин назад",
      avatar: "LW",
    },
    {
      id: 3,
      player: "SkillMaster",
      item: "AWP Dragon Lore",
      value: 4200.5,
      rarity: "mythical",
      caseName: "Sniper Elite",
      timeAgo: "8 мин назад",
      avatar: "SM",
    },
    {
      id: 4,
      player: "CaseOpener",
      item: "Gloves Pandora's Box",
      value: 890.75,
      rarity: "epic",
      caseName: "Glove Collection",
      timeAgo: "12 мин назад",
      avatar: "CO",
    },
    {
      id: 5,
      player: "NoobSlayer",
      item: "M4A4 Howl",
      value: 3100.25,
      rarity: "legendary",
      caseName: "Contraband Case",
      timeAgo: "15 мин назад",
      avatar: "NS",
    },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: "text-case-common",
      rare: "text-case-rare",
      epic: "text-case-epic",
      legendary: "text-case-legendary",
      mythical: "text-case-mythical",
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  const getRarityBg = (rarity: string) => {
    const colors = {
      common: "bg-case-common/20",
      rare: "bg-case-rare/20",
      epic: "bg-case-epic/20",
      legendary: "bg-case-legendary/20",
      mythical: "bg-case-mythical/20",
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Последние дропы</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icon name="TrendingUp" size={16} />
          <span>Всего выиграно сегодня: $47,392</span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-4 border-b">
          <div className="grid grid-cols-5 gap-4 font-semibold text-gray-700 text-sm">
            <div>Игрок</div>
            <div>Предмет</div>
            <div>Стоимость</div>
            <div>Кейс</div>
            <div>Время</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {recentDrops.map((drop) => (
            <div
              key={drop.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-5 gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {drop.avatar}
                  </div>
                  <span className="font-medium truncate">{drop.player}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${getRarityBg(drop.rarity)}`}
                  ></div>
                  <span
                    className={`font-medium truncate ${getRarityColor(drop.rarity)}`}
                  >
                    {drop.item}
                  </span>
                </div>

                <div className="font-bold text-green-600">
                  ${drop.value.toLocaleString()}
                </div>

                <div className="text-sm text-gray-600 truncate">
                  {drop.caseName}
                </div>

                <div className="text-sm text-gray-500">{drop.timeAgo}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-4 text-center">
          <button className="text-slate-600 hover:text-slate-800 text-sm font-medium flex items-center gap-2 mx-auto">
            <Icon name="RefreshCw" size={16} />
            Обновить дропы
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentDrops;
