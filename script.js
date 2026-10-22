
const questionSets = {
  N5: [
    { kanji: "学校", choices: ["がっこう", "がくせい", "せんこう", "こうがく"], answer: 0 },
    { kanji: "先生", choices: ["せんもん", "せんせい", "せいせん", "せんねん"], answer: 1 },
    { kanji: "友達", choices: ["ともだち", "ゆうじん", "ともたつ", "ゆうたつ"], answer: 0 },
    { kanji: "時間", choices: ["じかん", "じげん", "しかん", "じっかん"], answer: 0 },
    { kanji: "毎日", choices: ["まいにち", "まいじつ", "まいび", "まにち"], answer: 0 },
    { kanji: "電車", choices: ["でんき", "でんしゃ", "てんしゃ", "でんじゃ"], answer: 1 },
    { kanji: "天気", choices: ["てんき", "てんぎ", "でんき", "てき"], answer: 0 },
    { kanji: "名前", choices: ["なまえ", "めいぜん", "なめい", "みょうぜん"], answer: 0 },
    { kanji: "食べる", choices: ["のべる", "たべる", "しょべる", "くべる"], answer: 1 },
    { kanji: "飲み物", choices: ["たべもの", "のみもの", "のみもつ", "いんみもの"], answer: 1 },
    
    { kanji: "日本", choices: ["にほん", "にちほん", "にっぽんご", "ひほん"], answer: 0 },
    { kanji: "会社", choices: ["かいしゃ", "かいじゃ", "がいしゃ", "かしゃ"], answer: 0 },
    { kanji: "家族", choices: ["かぞく", "いえぞく", "かそく", "けぞく"], answer: 0 },
    { kanji: "学生", choices: ["がくせい", "がっこう", "がくしょう", "せいがく"], answer: 0 },
    { kanji: "先生", choices: ["せんせい", "せんしょう", "せいせん", "せんじん"], answer: 0 },
    { kanji: "会社員", choices: ["かいしゃいん", "かいしゃじん", "がいしゃいん", "かしゃいん"], answer: 0 },
    { kanji: "病院", choices: ["びょういん", "びよういん", "びょいん", "びょうえん"], answer: 0 },
    { kanji: "銀行", choices: ["ぎんこう", "きんこう", "ぎんごう", "ぎんきょう"], answer: 0 },
    { kanji: "図書館", choices: ["としょかん", "ずしょかん", "としょうかん", "としょがん"], answer: 0 },
    { kanji: "料理", choices: ["りょうり", "りょり", "りょうじ", "りゅうり"], answer: 0 },
    { kanji: "野菜", choices: ["やさい", "のさい", "やざい", "やせい"], answer: 0 },
    { kanji: "果物", choices: ["くだもの", "かぶつ", "かもの", "くだもつ"], answer: 0 },
    { kanji: "牛肉", choices: ["ぎゅうにく", "うしにく", "ぎゅうじく", "ぎゅにく"], answer: 0 },
    { kanji: "魚", choices: ["さかな", "とり", "うま", "さがな"], answer: 0 },
    { kanji: "自転車", choices: ["じてんしゃ", "じでんしゃ", "してんしゃ", "じてんじゃ"], answer: 0 },
    { kanji: "旅行", choices: ["りょこう", "りょうこう", "りょこ", "りゅこう"], answer: 0 },
    { kanji: "写真", choices: ["しゃしん", "しゃじん", "さしん", "しゃせん"], answer: 0 },
    { kanji: "映画", choices: ["えいが", "えいか", "えが", "えいげ"], answer: 0 },
    { kanji: "音楽", choices: ["おんがく", "おんらく", "おとがく", "おんかく"], answer: 0 },
    { kanji: "勉強", choices: ["べんきょう", "べんきょ", "べんじょう", "べんごう"], answer: 0 }

  ],

  N4: [
    { kanji: "経験", choices: ["けいけん", "けんけい", "けいげん", "きょうけん"], answer: 0 },
    { kanji: "必要", choices: ["ひつよう", "ひっよう", "ひちよう", "ひつよ"], answer: 0 },
    { kanji: "説明", choices: ["せつみょう", "せつめい", "ぜつめい", "せっめい"], answer: 1 },
    { kanji: "準備", choices: ["じゅんび", "しゅんび", "じゅびん", "じゅんぴ"], answer: 0 },
    { kanji: "連絡", choices: ["れんらく", "れんろく", "ねんらく", "れらく"], answer: 0 },
    { kanji: "特別", choices: ["とくべつ", "どくべつ", "とくべち", "とっべつ"], answer: 0 },
    { kanji: "安心", choices: ["あんじん", "あんしん", "あんせん", "あしん"], answer: 1 },
    { kanji: "安全", choices: ["あんぜん", "あんせん", "あぜん", "あんねん"], answer: 0 },
    { kanji: "注意", choices: ["ちゅうい", "ちゅい", "じゅうい", "ちゅうえ"], answer: 0 },
    { kanji: "失敗", choices: ["しっぱい", "しつはい", "しっばい", "しつぱい"], answer: 0 },
    
    { kanji: "相談", choices: ["そうだん", "そうたん", "しょうだん", "そだん"], answer: 0 },
    { kanji: "約束", choices: ["やくそく", "やっそく", "やくぞく", "やくしょく"], answer: 0 },
    { kanji: "連休", choices: ["れんきゅう", "れんくう", "ねんきゅう", "れんぎゅう"], answer: 0 },
    { kanji: "予約", choices: ["よやく", "よやっく", "ようやく", "よらく"], answer: 0 },
    { kanji: "景色", choices: ["けしき", "けいしょく", "けいしき", "けしょく"], answer: 0 },
    { kanji: "運転", choices: ["うんてん", "うんでん", "うんぜん", "うてん"], answer: 0 },
    { kanji: "文化", choices: ["ぶんか", "ぶんが", "ふんか", "ぶんけ"], answer: 0 },
    { kanji: "習慣", choices: ["しゅうかん", "しゅかん", "しゅうがん", "しゅうけん"], answer: 0 },
    { kanji: "特急", choices: ["とっきゅう", "とくきゅう", "とっきゅ", "とくきゅ"], answer: 0 },
    { kanji: "交通", choices: ["こうつう", "こうづう", "こつう", "こうとう"], answer: 0 },
    { kanji: "場合", choices: ["ばあい", "ばごう", "じょうあい", "ばいあ"], answer: 0 },
    { kanji: "気持ち", choices: ["きもち", "きもつ", "きじ", "きまち"], answer: 0 },
    { kanji: "返事", choices: ["へんじ", "へんし", "はんじ", "へじ"], answer: 0 },
    { kanji: "説明書", choices: ["せつめいしょ", "せつみょうしょ", "せつめいがき", "せっめいしょ"], answer: 0 },
    { kanji: "住所", choices: ["じゅうしょ", "じゅしょ", "じゅうじょ", "じゅしゅ"], answer: 0 },
    { kanji: "理由", choices: ["りゆう", "りゅう", "りよう", "りゆ"], answer: 0 },
    { kanji: "景気", choices: ["けいき", "けいぎ", "きょうき", "けき"], answer: 0 },
    { kanji: "残念", choices: ["ざんねん", "さんねん", "ざんね", "ざんでん"], answer: 0 },
    { kanji: "複雑", choices: ["ふくざつ", "ふくさつ", "ふっくざつ", "ふくじゃつ"], answer: 0 },
    { kanji: "成功", choices: ["せいこう", "せいごう", "しょうこう", "せこう"], answer: 0 }

  ],

  N3: [
    { kanji: "改善", choices: ["かいぜん", "かいせん", "がいぜん", "かいねん"], answer: 0 },
    { kanji: "影響", choices: ["えいきょう", "えいぎょう", "かげきょう", "えきょう"], answer: 0 },
    { kanji: "状況", choices: ["じょうきょう", "じょうぎょう", "しょうきょう", "じょきょう"], answer: 0 },
    { kanji: "確認", choices: ["かくにん", "かっにん", "かくじん", "がくにん"], answer: 0 },
    { kanji: "努力", choices: ["どりょく", "とうりょく", "どりょう", "どうりょく"], answer: 0 },
    { kanji: "提案", choices: ["ていあん", "ていなん", "だいあん", "てあん"], answer: 0 },
    { kanji: "解決", choices: ["かいけつ", "かいげつ", "がいけつ", "かけつ"], answer: 0 },
    { kanji: "責任", choices: ["せきにん", "せきじん", "せっにん", "せきねん"], answer: 0 },
    { kanji: "比較", choices: ["ひかく", "ひがく", "びかく", "ひこう"], answer: 0 },
    { kanji: "賛成", choices: ["さんせい", "ざんせい", "さんぜい", "せんせい"], answer: 0 },
    { kanji: "判断", choices: ["はんだん", "はんたん", "ばんだん", "はんなん"], answer: 0 },
    { kanji: "原因", choices: ["げんいん", "げんにん", "げいいん", "げんえん"], answer: 0 },
    { kanji: "結果", choices: ["けっか", "けつか", "けっが", "けか"], answer: 0 },
    { kanji: "解釈", choices: ["かいしゃく", "かいせき", "かいしょく", "かいじゃく"], answer: 0 },
    { kanji: "態度", choices: ["たいど", "たいと", "だいど", "たいとう"], answer: 0 },
    { kanji: "意見", choices: ["いけん", "いげん", "いけい", "いこん"], answer: 0 },
    { kanji: "関係", choices: ["かんけい", "かんげい", "せきけい", "かんけ"], answer: 0 },
    { kanji: "制度", choices: ["せいど", "せいと", "せど", "しょうど"], answer: 0 },
    { kanji: "情報", choices: ["じょうほう", "じょうぼう", "じょほう", "じょうぽう"], answer: 0 },
    { kanji: "調査", choices: ["ちょうさ", "ちょうしゃ", "しらさ", "ちょさ"], answer: 0 },
    { kanji: "増加", choices: ["ぞうか", "そうか", "ぞうが", "ぞか"], answer: 0 },
    { kanji: "減少", choices: ["げんしょう", "げんじょう", "けんしょう", "げしょう"], answer: 0 },
    { kanji: "適切", choices: ["てきせつ", "てきぜつ", "てっせつ", "てきせち"], answer: 0 },
    { kanji: "可能", choices: ["かのう", "かんのう", "かの", "がのう"], answer: 0 },
    { kanji: "実際", choices: ["じっさい", "じつさい", "じっざい", "じさい"], answer: 0 },
    { kanji: "比較的", choices: ["ひかくてき", "ひがくてき", "ひかくでき", "びかくてき"], answer: 0 },
    { kanji: "変更", choices: ["へんこう", "へんごう", "へんきょう", "へんこ"], answer: 0 },
    { kanji: "発展", choices: ["はってん", "はつでん", "はってい", "はっでん"], answer: 0 },
    { kanji: "状態", choices: ["じょうたい", "じょうだい", "しょうたい", "じょたい"], answer: 0 },
    { kanji: "共通", choices: ["きょうつう", "きょうづう", "きょつう", "きょうとう"], answer: 0 }

  ]
};

let currentLevel = "";
let currentQuestion = 0;
let score = 0;
let answered = false;

const levelScreen = document.getElementById("level-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const choicesBox = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const scoreText = document.getElementById("score");

document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.level);
  });
});

function startQuiz(level) {
  currentLevel = level;
  currentQuestion = 0;
  score = 0;

  levelScreen.hidden = true;
  quizScreen.hidden = false;

  showQuestion();
}

function showQuestion() {
  answered = false;

  const q = questionSets[currentLevel][currentQuestion];

  questionNumber.textContent =
    `${currentLevel}・第${currentQuestion + 1}問 / 全${questionSets[currentLevel].length}問`;

  questionTitle.textContent = `「${q.kanji}」の読み方は？`;
  feedback.textContent = "";
  nextButton.hidden = true;
  nextButton.textContent =
    currentQuestion === questionSets[currentLevel].length - 1
  ? "結果を見る"
  : "次の問題";

  choicesBox.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.textContent = choice;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    choicesBox.appendChild(button);
  });

  scoreText.textContent = `スコア：${score} / ${questionSets[currentLevel].length}点`;
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const q = questionSets[currentLevel][currentQuestion];
  const buttons = choicesBox.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  if (selectedIndex === q.answer) {
    score++;
    feedback.textContent = "正解です！ 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `不正解です。正解：${q.choices[q.answer]}`;
    feedback.style.color = "crimson";
  }

  scoreText.textContent = `スコア：${score} / ${questionSets[currentLevel].length}点`;
  nextButton.hidden = false;
}


nextButton.addEventListener("click", () => {
  if (currentQuestion < questionSets[currentLevel].length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});


function showResult() {
  questionNumber.textContent = `${currentLevel}・クイズ結果`;
  questionTitle.textContent = `10問中 ${score}問正解！`;
  choicesBox.innerHTML = "";
  feedback.textContent =
    score >= 8 ? "すばらしい！よくできました！" : "お疲れ様！もう一度復習しよう！";

  nextButton.hidden = false;
  nextButton.textContent = "もう一度挑戦する";

  nextButton.onclick = () => {
    nextButton.onclick = null;
    startQuiz(currentLevel);
  };
}

backButton.addEventListener("click", () => {
  quizScreen.hidden = true;
  levelScreen.hidden = false;

  currentLevel = "";
  currentQuestion = 0;
  score = 0;
  answered = false;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("PWA ready!");
      })
      .catch((error) => {
        console.error("PWA registration failed:", error);
      });
  });
}
