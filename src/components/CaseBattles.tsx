import Icon from "@/components/ui/icon";

const CaseBattles = () => {
  const activeBattles = [
    {
      id: 1,
      players: ["ProGamer", "SkillzMaster", "LuckyShot", "NoobSlayer"],
      maxPlayers: 4,
      casePrice: 5.25,
      caseName: "Elite Collection",
      totalValue: 21.0,
      timeLeft: "2:34",
      status: "active",
    },
    {
      id: 2,
      players: ["SniperKing", "HeadshotHero"],
      maxPlayers: 2,
      casePrice: 12.5,
      caseName: "Legendary Box",
      totalValue: 25.0,
      timeLeft: "0:47",
      status: "ending",
    },
    {
      id: 3,
      players: ["CaseMaster"],
      maxPlayers: 4,
      casePrice: 2.75,
      caseName: "Mystery Case",
      totalValue: 11.0,
      timeLeft: "5:12",
      status: "waiting",
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-500",
      ending: "bg-red-500",
      waiting: "bg-yellow-500",
    };
    return colors[status as keyof typeof colors] || colors.waiting;
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Активные битвы</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Активные</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Ожидание</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Завершаются</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {activeBattles.map((battle) => (
          <div
            key={battle.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${getStatusColor(battle.status)}`}
                ></div>
                <h3 className="font-bold text-lg">{battle.caseName}</h3>
                <span className="text-sm text-gray-500">
                  {battle.players.length}/{battle.maxPlayers} игроков
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-bold text-lg">${battle.totalValue}</div>
                  <div className="text-sm text-gray-500">общий банк</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-red-500">
                    {battle.timeLeft}
                  </div>
                  <div className="text-sm text-gray-500">осталось</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {battle.players.map((player, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                    >
                      {player.charAt(0)}
                    </div>
                  ))}
                  {battle.players.length < battle.maxPlayers && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 border-2 border-white">
                      <Icon name="Plus" size={12} />
                    </div>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  <div className="font-medium">${battle.casePrice} за кейс</div>
                  <div className="text-xs">{battle.players.join(", ")}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {battle.status === "waiting" && (
                  <button className="bg-gold hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-colors">
                    Присоединиться
                  </button>
                )}
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-colors">
                  <Icon name="Eye" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Показать все битвы
        </button>
      </div>
    </div>
  );
};

export default CaseBattles;
