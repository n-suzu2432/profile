const hobbies = [
  { icon: "♨️", label: "温泉・サウナ" },
  { icon: "⛩️", label: "神社巡り" },
  { icon: "☕", label: "アイスコーヒー" },
  { icon: "✈️", label: "海外旅行（目標）" },
];

const values = [
  { label: "座右の銘", text: "「ケ・セラ・セラ」なるようになる" },
  { label: "信念", text: "情は人の為ならず — 巡り巡って自分のためになる" },
  { label: "大切にすること", text: "和を大事にする。家族との時間。" },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">自己紹介</h2>
        <p className="text-center text-gray-500 mb-16">About Me</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-teal-500 pl-4">
              プロフィール
            </h3>
            <dl className="space-y-4 text-sm">
              {[
                ["年齢", "37歳"],
                ["出身", "岐阜県下呂市"],
                ["居住地", "岐阜県"],
                ["職業", "薬剤師（調剤薬局）"],
                ["経験年数", "薬剤師歴 12年"],
                ["家族", "妻 + 子ども4人"],
                ["性格", "真面目なマイペース"],
              ].map(([key, val]) => (
                <div key={key} className="flex">
                  <dt className="w-28 text-gray-400 shrink-0">{key}</dt>
                  <dd className="text-gray-700 font-medium">{val}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-amber-500 pl-4">
                趣味
              </h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((h) => (
                  <span
                    key={h.label}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700"
                  >
                    <span>{h.icon}</span>
                    {h.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-blue-500 pl-4">
                価値観・目標
              </h3>
              <ul className="space-y-4">
                {values.map((v) => (
                  <li key={v.label} className="text-sm">
                    <span className="text-gray-400 block mb-1">{v.label}</span>
                    <span className="text-gray-700">{v.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-teal-700 text-white rounded-2xl p-8 text-center">
          <p className="text-teal-200 text-sm mb-3">人生のメッセージ</p>
          <p className="text-xl font-bold leading-relaxed">
            人生は自分次第で変わっていく。
            <br />
            思っていることや考えていることが、必ず実現していく。
          </p>
        </div>
      </div>
    </section>
  );
}
