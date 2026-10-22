
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
    { kanji: "飲み物", choices: ["たべもの", "のみもの", "のみもつ", "いんみもの"], answer: 1 }
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
    { kanji: "失敗", choices: ["しっぱい", "しつはい", "しっばい", "しつぱい"], answer: 0 }
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
    { kanji: "賛成", choices: ["さんせい", "ざんせい", "さんぜい", "せんせい"], answer: 0 }
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
    `${currentLevel}・第${currentQuestion + 1}問 / 全10問`;

  questionTitle.textContent = `「${q.kanji}」の読み方は？`;
  feedback.textContent = "";
  nextButton.hidden = true;
  nextButton.textContent =
    currentQuestion === 9 ? "結果を見る" : "次の問題";

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

  scoreText.textContent = `スコア：${score} / 10点`;
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

  scoreText.textContent = `スコア：${score} / 10点`;
  nextButton.hidden = false;
}

nextButton.addEventListener("click", () => {
  if (currentQuestion < 9) {
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
