const licenses = [
  { name: "薬剤師免許", icon: "💊", description: "国家資格。12年以上の実務経験を持つ" },
  { name: "FP技能士 3級", icon: "📊", description: "お金と生活設計の知識を保有" },
  { name: "アロマテラピーアドバイザー", icon: "🌿", description: "香りと健康に関する専門知識" },
];

const skills = [
  {
    category: "医療・薬学",
    items: ["調剤・服薬指導", "病院薬剤師（急性期）", "患者コミュニケーション", "医薬品管理"],
    color: "border-teal-400",
    bg: "bg-teal-50",
  },
  {
    category: "デザイン・マーケティング",
    items: ["グラフィックデザイン基礎", "Webマーケティング", "SNS運用", "コンテンツ制作"],
    color: "border-amber-400",
    bg: "bg-amber-50",
  },
  {
    category: "現在学習中",
    items: ["AI活用・プロンプト設計", "Next.js / Tailwind CSS", "暗号資産・投資リテラシー", "SNS発信・収益化"],
    color: "border-blue-400",
    bg: "bg-blue-50",
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">スキル・資格</h2>
        <p className="text-center text-gray-500 mb-16">Skills & Certifications</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {licenses.map((l) => (
            <div
              key={l.name}
              className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100"
            >
              <div className="text-4xl mb-3">{l.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{l.name}</h3>
              <p className="text-gray-500 text-sm">{l.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.category}
              className={`rounded-2xl p-6 border-t-4 ${s.color} ${s.bg}`}
            >
              <h3 className="font-bold text-gray-700 mb-4">{s.category}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
