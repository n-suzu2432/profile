const careers = [
  {
    period: "2013年3月",
    title: "近畿大学 薬学部 卒業",
    description: "6年間、一人暮らしをしながら薬学を学ぶ。努力の末、薬剤師国家試験に合格。",
    type: "education",
  },
  {
    period: "2013年4月 〜 2021年3月",
    title: "国立病院機構 三重中央医療センター",
    description: "病院薬剤師としてキャリアをスタート。8年間、急性期医療の現場で幅広い経験を積む。",
    type: "work",
  },
  {
    period: "2021年4月 〜 2024年3月",
    title: "国立病院機構 長良医療センター",
    description: "同機構内での異動。3年間、さらなる専門性を深める。",
    type: "work",
  },
  {
    period: "2024年4月 〜 2024年10月",
    title: "職業訓練校",
    description: "デザイン・マーケティングを学ぶ。薬剤師の経験に新たなスキルを掛け合わせる転換期。",
    type: "study",
  },
  {
    period: "2024年11月 〜 現在",
    title: "ふかせ調剤薬局",
    description: "個人薬局で患者さんに寄り添う調剤業務を担当。並行してAI・SNS発信にも挑戦中。",
    type: "work",
  },
];

const typeStyle: Record<string, string> = {
  education: "bg-blue-500",
  work: "bg-teal-500",
  study: "bg-amber-500",
};

export default function Career() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">経歴</h2>
        <p className="text-center text-gray-500 mb-16">Career History</p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2" />

          <div className="space-y-12">
            {careers.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-6`}
              >
                <div
                  className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-1.5 ${typeStyle[item.type]}`}
                />

                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-16 text-sm text-gray-500">
          {[
            { label: "学歴", color: "bg-blue-500" },
            { label: "職歴", color: "bg-teal-500" },
            { label: "学習", color: "bg-amber-500" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${l.color}`} />
              {l.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
