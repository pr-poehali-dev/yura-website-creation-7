import Icon from "@/components/ui/icon";

const CasesHeader = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 rounded-xl mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
            Case Battle
          </h1>
          <p className="text-slate-300 text-lg">
            Открывайте кейсы и сражайтесь за лучшие предметы
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-gold">$2,847.50</div>
          <div className="text-slate-300">баланс</div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Поиск кейсов..."
                className="w-full bg-white/20 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          <select className="bg-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold">
            <option value="all">Все кейсы</option>
            <option value="cheap">Дешевые</option>
            <option value="expensive">Дорогие</option>
            <option value="new">Новые</option>
          </select>

          <select className="bg-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold">
            <option value="price-asc">По цене ↑</option>
            <option value="price-desc">По цене ↓</option>
            <option value="popularity">По популярности</option>
          </select>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Всего кейсов: 247</span>
            <span className="text-slate-300">Онлайн: 1,337</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Users" className="text-gold" size={16} />
            <span className="text-gold font-semibold">Активных битв: 23</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesHeader;
