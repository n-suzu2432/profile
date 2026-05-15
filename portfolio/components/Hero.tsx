export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-700 to-teal-500 text-white px-6">
      <div className="max-w-2xl text-center">
        <p className="text-teal-200 text-sm font-semibold tracking-widest uppercase mb-4">
          Pharmacist × Designer × Marketer
        </p>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          薬剤師として12年。
          <br />
          今、新しい挑戦へ。
        </h1>
        <p className="text-teal-100 text-lg leading-relaxed mb-8">
          岐阜を拠点に活動する薬剤師です。
          <br />
          病院薬剤師としての経験を活かしながら、
          <br />
          デザイン・マーケティング・AIを学び、
          <br />
          自分のスキルで誰かの役に立てることを目指しています。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["薬剤師", "デザイン", "マーケティング", "AI学習中", "FP3級", "アロマ"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-white/20 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
        <p className="mt-12 text-teal-200 text-sm italic">
          「ケ・セラ・セラ」— なるようになる
        </p>
      </div>
    </section>
  );
}
