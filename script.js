
const vocabularyData = {
  N5: `
学校|がっこう|ကျောင်း
先生|せんせい|ဆရာ ဆရာမ
友達|ともだち|သူငယ်ချင်း
時間|じかん|အချိန်
毎日|まいにち|နေ့တိုင်း
電車|でんしゃ|လျှပ်စစ်ရထား
天気|てんき|ရာသီဥတု
名前|なまえ|အမည်
食べる|たべる|စားသည်
飲み物|のみもの|သောက်စရာ
日本|にほん|ဂျပန်နိုင်ငံ
会社|かいしゃ|ကုမ္ပဏီ
家族|かぞく|မိသားစု
学生|がくせい|ကျောင်းသား
会社員|かいしゃいん|ကုမ္ပဏီဝန်ထမ်း
病院|びょういん|ဆေးရုံ
銀行|ぎんこう|ဘဏ်
図書館|としょかん|စာကြည့်တိုက်
料理|りょうり|ဟင်းလျာ ချက်ပြုတ်ခြင်း
野菜|やさい|ဟင်းသီးဟင်းရွက်
果物|くだもの|သစ်သီး
牛肉|ぎゅうにく|အမဲသား
魚|さかな|ငါး
自転車|じてんしゃ|စက်ဘီး
旅行|りょこう|ခရီးသွားခြင်း
写真|しゃしん|ဓာတ်ပုံ
映画|えいが|ရုပ်ရှင်
音楽|おんがく|ဂီတ
勉強|べんきょう|စာလေ့လာခြင်း
仕事|しごと|အလုပ်
家|いえ|အိမ်
部屋|へや|အခန်း
時計|とけい|နာရီ
電話|でんわ|တယ်လီဖုန်း
本|ほん|စာအုပ်
新聞|しんぶん|သတင်းစာ
水|みず|ရေ
お金|おかね|ပိုက်ဆံ
買う|かう|ဝယ်သည်
売る|うる|ရောင်းသည်
行く|いく|သွားသည်
来る|くる|လာသည်
帰る|かえる|ပြန်သည်
見る|みる|ကြည့်သည်
聞く|きく|နားထောင်သည် မေးသည်
読む|よむ|ဖတ်သည်
書く|かく|ရေးသည်
話す|はなす|စကားပြောသည်
休み|やすみ|နားရက် အနားယူခြင်း
天気予報|てんきよほう|မိုးလေဝသခန့်မှန်းချက်
`.trim(),

  N4: `
経験|けいけん|အတွေ့အကြုံ
必要|ひつよう|လိုအပ်ခြင်း
説明|せつめい|ရှင်းပြခြင်း
準備|じゅんび|ပြင်ဆင်ခြင်း
連絡|れんらく|ဆက်သွယ်ခြင်း
特別|とくべつ|အထူး
安心|あんしん|စိတ်အေးချမ်းခြင်း
安全|あんぜん|ဘေးကင်းခြင်း
注意|ちゅうい|သတိထားခြင်း
失敗|しっぱい|အမှား ကျရှုံးခြင်း
相談|そうだん|တိုင်ပင်ခြင်း
約束|やくそく|ကတိ ချိန်းဆိုချက်
連休|れんきゅう|ရုံးပိတ်ရက်ဆက်တိုက်
予約|よやく|ကြိုတင်ဘိုကင်
景色|けしき|ရှုခင်း
運転|うんてん|ယာဉ်မောင်းခြင်း
文化|ぶんか|ယဉ်ကျေးမှု
習慣|しゅうかん|အလေ့အကျင့်
特急|とっきゅう|အမြန်ရထား
交通|こうつう|သယ်ယူပို့ဆောင်ရေး
場合|ばあい|အခြေအနေ အခါ
気持ち|きもち|ခံစားချက်
返事|へんじ|အကြောင်းပြန်ခြင်း
説明書|せつめいしょ|အသုံးပြုနည်းလမ်းညွှန်
住所|じゅうしょ|လိပ်စာ
理由|りゆう|အကြောင်းပြချက်
景気|けいき|စီးပွားရေးအခြေအနေ
残念|ざんねん|စိတ်မကောင်းဖြစ်စရာ
複雑|ふくざつ|ရှုပ်ထွေးသော
成功|せいこう|အောင်မြင်ခြင်း
失礼|しつれい|ရိုင်းပျခြင်း ခွင့်ပြုပါ
招待|しょうたい|ဖိတ်ကြားခြင်း
案内|あんない|လမ်းညွှန်ခြင်း
卒業|そつぎょう|ကျောင်းပြီးခြင်း
入院|にゅういん|ဆေးရုံတက်ခြင်း
退院|たいいん|ဆေးရုံဆင်းခြင်း
故障|こしょう|ပျက်စီးခြင်း
修理|しゅうり|ပြုပြင်ခြင်း
特に|とくに|အထူးသဖြင့်
最近|さいきん|မကြာသေးမီက
最初|さいしょ|အစပိုင်း
最後|さいご|နောက်ဆုံး
途中|とちゅう|လမ်းခုလတ်
以外|いがい|မှအပ
以内|いない|အတွင်း
以上|いじょう|အထက် အနည်းဆုံး
以下|いか|အောက် မပိုသော
必ず|かならず|မဖြစ်မနေ
十分|じゅうぶん|လုံလောက်သော
自由|じゆう|လွတ်လပ်ခြင်း
`.trim(),

  N3: `
改善|かいぜん|တိုးတက်ကောင်းမွန်အောင်ပြုပြင်ခြင်း
影響|えいきょう|သက်ရောက်မှု
状況|じょうきょう|အခြေအနေ
確認|かくにん|အတည်ပြုစစ်ဆေးခြင်း
努力|どりょく|ကြိုးစားအားထုတ်မှု
提案|ていあん|အကြံပြုချက်
解決|かいけつ|ဖြေရှင်းခြင်း
責任|せきにん|တာဝန်
比較|ひかく|နှိုင်းယှဉ်ခြင်း
賛成|さんせい|သဘောတူခြင်း
判断|はんだん|ဆုံးဖြတ်ခြင်း
原因|げんいん|အကြောင်းရင်း
結果|けっか|ရလဒ်
解釈|かいしゃく|အဓိပ္ပာယ်ကောက်ယူခြင်း
態度|たいど|သဘောထား အမူအရာ
意見|いけん|အမြင် သဘောထား
関係|かんけい|ဆက်နွယ်မှု
制度|せいど|စနစ်
情報|じょうほう|သတင်းအချက်အလက်
調査|ちょうさ|စုံစမ်းစစ်ဆေးခြင်း
増加|ぞうか|တိုးပွားခြင်း
減少|げんしょう|လျော့နည်းခြင်း
適切|てきせつ|သင့်လျော်သော
可能|かのう|ဖြစ်နိုင်ခြင်း
実際|じっさい|လက်တွေ့ အမှန်တကယ်
比較的|ひかくてき|နှိုင်းယှဉ်လျှင်
変更|へんこう|ပြောင်းလဲခြင်း
発展|はってん|ဖွံ့ဖြိုးတိုးတက်ခြင်း
状態|じょうたい|အခြေအနေ
共通|きょうつう|တူညီသော အများနှင့်ဆိုင်သော
協力|きょうりょく|ပူးပေါင်းကူညီခြင်း
参加|さんか|ပါဝင်ခြင်း
発見|はっけん|ရှာဖွေတွေ့ရှိခြင်း
発表|はっぴょう|တင်ပြကြေညာခြင်း
説明|せつめい|ရှင်းပြခြင်း
計画|けいかく|အစီအစဉ်
目的|もくてき|ရည်ရွယ်ချက်
方法|ほうほう|နည်းလမ်း
必要性|ひつようせい|လိုအပ်မှု
効果|こうか|အကျိုးသက်ရောက်မှု
能力|のうりょく|စွမ်းရည်
技術|ぎじゅつ|နည်းပညာ ကျွမ်းကျင်မှု
知識|ちしき|ဗဟုသုတ
経験者|けいけんしゃ|အတွေ့အကြုံရှိသူ
環境|かんきょう|ပတ်ဝန်းကျင်
社会|しゃかい|လူ့အဖွဲ့အစည်း
経済|けいざい|စီးပွားရေး
将来|しょうらい|အနာဂတ်
現在|げんざい|လက်ရှိ
意識|いしき|အသိစိတ် သတိပြုမှု
`.trim()
};

function parseWords(text) {
  return text.split("\n").map((line) => {
    const [kanji, reading, meaning] = line.split("|");
    return { kanji, reading, meaning };
  });
}

const vocabularySets = {
  N5: parseWords(vocabularyData.N5),
  N4: parseWords(vocabularyData.N4),
  N3: parseWords(vocabularyData.N3)
};

let currentLevel = "";
let currentQuestion = 0;
let score = 0;
let answered = false;
let quizQuestions = [];
let isResultScreen = false;

// 間違えた単語を保存する
let reviewWords = JSON.parse(
  localStorage.getItem("japaneseQuizReview") || "{}"
);

const reviewScreen = document.getElementById("review-screen");
const reviewList = document.getElementById("review-list");
const reviewEmptyMessage = document.getElementById("review-empty-message");
const reviewBackButton = document.getElementById("review-back-button");

function saveReviewWords() {
  localStorage.setItem(
    "japaneseQuizReview",
    JSON.stringify(reviewWords)
  );
}

function addReviewWord(level, word) {
  if (!reviewWords[level]) {
    reviewWords[level] = [];
  }

  const exists = reviewWords[level].some(
    (item) => item.kanji === word.kanji
  );

  if (!exists) {
    reviewWords[level].push(word);
    saveReviewWords();
  }
}


function showReviewWords() {
  levelScreen.hidden = true;
  vocabularyScreen.hidden = true;
  quizScreen.hidden = true;
  reviewScreen.hidden = false;

  reviewList.innerHTML = "";

  const words = Object.entries(reviewWords).flatMap(
    ([level, items]) =>
      items.map((word) => ({ ...word, level }))
  );

  reviewEmptyMessage.hidden = words.length > 0;

  words.forEach((word, index) => {
    const row = document.createElement("tr");

    [
      index + 1,
      word.kanji,
      word.reading,
      word.meaning
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // 音声ボタンを追加
    const voiceCell = document.createElement("td");
    const voiceButton = document.createElement("button");

    voiceButton.textContent = "🔊";
    voiceButton.type = "button";
    voiceButton.addEventListener("click", () => {
      speakJapanese(`${word.kanji}、${word.reading}`);
    });

    voiceCell.appendChild(voiceButton);
    row.appendChild(voiceCell);

    // 覚えたボタン
    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "覚えた";
    deleteButton.addEventListener("click", () => {
      reviewWords[word.level] = reviewWords[word.level].filter(
        (item) => item.kanji !== word.kanji
      );

      if (reviewWords[word.level].length === 0) {
        delete reviewWords[word.level];
      }

      saveReviewWords();
      showReviewWords();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    reviewList.appendChild(row);
  });
}

reviewBackButton.addEventListener("click", () => {
  reviewScreen.hidden = true;
  levelScreen.hidden = false;
});


const levelScreen = document.getElementById("level-screen");
const vocabularyScreen = document.getElementById("vocabulary-screen");
const vocabularyTitle = document.getElementById("vocabulary-title");
const vocabularyList = document.getElementById("vocabulary-list");
const vocabularyBackButton = document.getElementById("vocabulary-back-button");
const startTestButton = document.getElementById("start-test-button");
const quizScreen = document.getElementById("quiz-screen");
const questionNumber = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const choicesBox = document.getElementById("choices");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const scoreText = document.getElementById("score");

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


function showVocabulary(level) {
  currentLevel = level;
  levelScreen.hidden = true;
  quizScreen.hidden = true;
  vocabularyScreen.hidden = false;

  vocabularyTitle.textContent = `${level} 単語一覧（${vocabularySets[level].length}語）`;
  vocabularyList.innerHTML = "";

  vocabularySets[level].forEach((word, index) => {
    const row = document.createElement("tr");

    [index + 1, word.kanji, word.reading, word.meaning].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // 音声ボタンを追加
    const voiceCell = document.createElement("td");
    const voiceButton = document.createElement("button");

    voiceButton.textContent = "🔊";
    voiceButton.type = "button";
    voiceButton.addEventListener("click", () => {
      speakJapanese(`${word.kanji}、${word.reading}`);
    });

    voiceCell.appendChild(voiceButton);
    row.appendChild(voiceCell);

    vocabularyList.appendChild(row);
  });
}

document.querySelectorAll(".level-button").forEach((button) => {
  button.addEventListener("click", () => {
    showVocabulary(button.dataset.level);
  });
});


function speakJapanese(text) {
  if (!("speechSynthesis" in window)) {
    alert("このブラウザは音声読み上げに対応していません。");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.9;

  window.speechSynthesis.speak(utterance);
}


vocabularyBackButton.addEventListener("click", () => {
  vocabularyScreen.hidden = true;
  levelScreen.hidden = false;
});

function createQuestion(word, direction, allWords) {
  const isJapaneseToMyanmar = direction === "ja-mm";

  const correctAnswer = isJapaneseToMyanmar
    ? word.meaning
    : `${word.kanji}（${word.reading}）`;

  const getAnswer = (item) =>
    isJapaneseToMyanmar
      ? item.meaning
      : `${item.kanji}（${item.reading}）`;

  const candidates = shuffle(
    allWords.filter((item) => getAnswer(item) !== correctAnswer)
  );

  const wrongAnswers = [];

  for (const item of candidates) {
    const answer = getAnswer(item);

    if (answer !== correctAnswer && !wrongAnswers.includes(answer)) {
      wrongAnswers.push(answer);
    }

    if (wrongAnswers.length === 3) break;
  }

  const choices = shuffle([correctAnswer, ...wrongAnswers]);

  return {
    word,
    direction,
    choices,
    answer: choices.indexOf(correctAnswer)
  };
}

function startQuiz() {
  const allWords = vocabularySets[currentLevel];

  quizQuestions = shuffle(allWords)
    .slice(0, 10)
    .map((word) => {
      const direction = Math.random() < 0.5 ? "ja-mm" : "mm-ja";
      return createQuestion(word, direction, allWords);
    });

  currentQuestion = 0;
  score = 0;
  isResultScreen = false;
  const oldReviewButton = document.getElementById("result-review-button");

if (oldReviewButton) {
  oldReviewButton.hidden = true;
}

  vocabularyScreen.hidden = true;
  levelScreen.hidden = true;
  quizScreen.hidden = false;

  showQuestion();
}

startTestButton.addEventListener("click", startQuiz);

function showQuestion() {
  answered = false;
  isResultScreen = false;

  const q = quizQuestions[currentQuestion];

  questionNumber.textContent =
    `${currentLevel}・第${currentQuestion + 1}問 / 全${quizQuestions.length}問`;

  if (q.direction === "ja-mm") {
    questionTitle.textContent =
      `「${q.word.kanji}（${q.word.reading}）」の意味は？`;
  } else {
    questionTitle.textContent =
      `「${q.word.meaning}」は日本語で何ですか？`;
  }

  feedback.textContent = "";
  nextButton.hidden = true;
  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
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

  scoreText.textContent = `スコア：${score} / ${quizQuestions.length}点`;
}

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const q = quizQuestions[currentQuestion];
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

    addReviewWord(currentLevel, q.word);
  }

  scoreText.textContent = `スコア：${score} / ${quizQuestions.length}点`;
  nextButton.hidden = false;
}

nextButton.addEventListener("click", () => {
  if (isResultScreen) {
    startQuiz();
    return;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});


function showResult() {
  isResultScreen = true;

  questionNumber.textContent = `${currentLevel}・クイズ結果`;
  questionTitle.textContent = `10問中 ${score}問正解！`;
  choicesBox.innerHTML = "";

  feedback.textContent =
    score >= 8
      ? "すばらしい！よくできました！"
      : "お疲れ様！もう一度復習しよう！";

  nextButton.hidden = false;
  nextButton.textContent = "もう一度挑戦する";

  let reviewButton = document.getElementById("result-review-button");

  if (!reviewButton) {
    reviewButton = document.createElement("button");
    reviewButton.id = "result-review-button";
    reviewButton.textContent = "間違えた単語を復習する";
    nextButton.insertAdjacentElement("afterend", reviewButton);
  }

  reviewButton.onclick = showReviewWords;
  reviewButton.hidden = false;
}


backButton.addEventListener("click", () => {
  quizScreen.hidden = true;
  vocabularyScreen.hidden = false;
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

