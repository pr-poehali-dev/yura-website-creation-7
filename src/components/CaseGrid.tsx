import Icon from "@/components/ui/icon";

const CaseGrid = () => {
  const cases = [
    {
      id: 1,
      name: "AK-47 Case",
      price: 2.5,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rarity: "legendary",
      items: ["AK-47 Redline", "AK-47 Vulcan", "M4A4 Asiimov"],
      discount: 15,
    },
    {
      id: 2,
      name: "Knife Collection",
      price: 25.0,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      rarity: "mythical",
      items: ["Karambit Tiger Tooth", "Butterfly Knife", "Bayonet Doppler"],
      hot: true,
    },
    {
      id: 3,
      name: "Pistol Paradise",
      price: 1.25,
      image:
        "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400&h=300&fit=crop",
      rarity: "rare",
      items: ["Glock Fade", "Desert Eagle Blaze", "USP-S Kill Confirmed"],
    },
    {
      id: 4,
      name: "Sniper Elite",
      price: 8.75,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rarity: "epic",
      items: ["AWP Dragon Lore", "AWP Medusa", "SSG 08 Blood in Water"],
    },
    {
      id: 5,
      name: "Glove Box",
      price: 12.5,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      rarity: "legendary",
      items: ["Gloves Pandora's Box", "Gloves Crimson Kimono", "Gloves Fade"],
    },
    {
      id: 6,
      name: "Starter Pack",
      price: 0.5,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rarity: "common",
      items: ["M4A1-S Guardian", "AK-47 Redline", "Glock Water Elemental"],
    },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      common: "border-case-common bg-case-common/10 text-slate-600",
      rare: "border-case-rare bg-case-rare/10 text-case-rare",
      epic: "border-case-epic bg-case-epic/10 text-case-epic",
      legendary:
        "border-case-legendary bg-case-legendary/10 text-case-legendary",
      mythical: "border-case-mythical bg-case-mythical/10 text-case-mythical",
    };
    return colors[rarity as keyof typeof colors] || colors.common;
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Кейсы</h2>
        <div className="flex items-center gap-2">
          <button className="bg-gold text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Создать битву
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className={`bg-white rounded-xl border-2 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${getRarityColor(caseItem.rarity)}`}
          >
            <div className="relative">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-full h-48 object-cover"
              />
              {caseItem.hot && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Icon name="Flame" size={12} />
                  HOT
                </div>
              )}
              {caseItem.discount && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -{caseItem.discount}%
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{caseItem.name}</h3>

              <div className="text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1 mb-1">
                  <Icon name="Package" size={14} />
                  <span>Содержит {caseItem.items.length} предметов</span>
                </div>
                <div className="text-xs space-y-1">
                  {caseItem.items.slice(0, 2).map((item, index) => (
                    <div key={index} className="truncate">
                      • {item}
                    </div>
                  ))}
                  {caseItem.items.length > 2 && (
                    <div className="text-gray-500">
                      +{caseItem.items.length - 2} еще...
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  ${caseItem.price}
                </div>
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-2">
                  <Icon name="Play" size={16} />
                  Открыть
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseGrid;
