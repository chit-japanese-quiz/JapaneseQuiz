// ၁။ Raw Data များ (N5, N4, N3)
const rawVocabularyData = {
  N5: [
    { kanji: "食べる", reading: "たべる", meanings: { mm: "စားသည်", en: "to eat", id: "makan", vi: "ăn", ph: "kumain" } },
    { kanji: "飲む", reading: "のむ", meanings: { mm: "သောက်သည်", en: "to drink", id: "minum", vi: "uống", ph: "uminom" } },
    { kanji: "学校", reading: "がっこう", meanings: { mm: "ကျောင်း", en: "school", id: "sekolah", vi: "trường học", ph: "paaralan" } },
    { kanji: "先生", reading: "せんせい", meanings: { mm: "ဆရာ ဆရာမ", en: "teacher", id: "guru", vi: "giáo viên", ph: "guro" } },
    { kanji: "友達", reading: "ともだち", meanings: { mm: "သူငယ်ချင်း", en: "friend", id: "teman", vi: "bạn bè", ph: "kaibigan" } },
    { kanji: "時間", reading: "じかん", meanings: { mm: "အချိန်", en: "time", id: "waktu", vi: "thời gian", ph: "oras" } },
    { kanji: "毎日", reading: "まいにち", meanings: { mm: "နေ့တိုင်း", en: "every day", id: "setiap hari", vi: "mỗi ngày", ph: "araw-araw" } },
    { kanji: "電車", reading: "でんしゃ", meanings: { mm: "လျှပ်စစ်ရထား", en: "train", id: "kereta", vi: "xe lửa", ph: "tren" } },
    { kanji: "天気", reading: "てんき", meanings: { mm: "ရာသီဥတု", en: "weather", id: "cuaca", vi: "thời tiết", ph: "panahon" } },
    { kanji: "名前", reading: "なまえ", meanings: { mm: "အမည်", en: "name", id: "nama", vi: "tên", ph: "pangalan" } },
    { kanji: "日本", reading: "にほん", meanings: { mm: "ဂျပန်နိုင်ငံ", en: "Japan", id: "Jepang", vi: "Nhật Bản", ph: "Hapon" } },
    { kanji: "会社", reading: "かいしゃ", meanings: { mm: "ကုမ္ပဏီ", en: "company", id: "perusahaan", vi: "công ty", ph: "kumpanya" } },
    { kanji: "家族", reading: "かぞく", meanings: { mm: "မိသားစု", en: "family", id: "keluarga", vi: "gia đình", ph: "pamilya" } },
    { kanji: "学生", reading: "がくせい", meanings: { mm: "ကျောင်းသား", en: "student", id: "pelajar", vi: "học sinh", ph: "estudyante" } },
    { kanji: "会社員", reading: "かいしゃいん", meanings: { mm: "ကုမ္ပဏီဝန်ထမ်း", en: "company employee", id: "karyawan perusahaan", vi: "nhân viên công ty", ph: "empleado ng kumpanya" } },
    { kanji: "病院", reading: "びょういん", meanings: { mm: "ဆေးရုံ", en: "hospital", id: "rumah sakit", vi: "bệnh viện", ph: "ospital" } },
    { kanji: "銀行", reading: "ぎんこう", meanings: { mm: "ဘဏ်", en: "bank", id: "bank", vi: "ngân hàng", ph: "bangko" } },
    { kanji: "図書館", reading: "としょかん", meanings: { mm: "စာကြည့်တိုက်", en: "library", id: "perpustakaan", vi: "thư viện", ph: "aklatan" } },
    { kanji: "料理", reading: "りょうり", meanings: { mm: "ဟင်းလျာ ချက်ပြုတ်ခြင်း", en: "cooking / dish", id: "masakan", vi: "món ăn", ph: "pagluluto" } },
    { kanji: "野菜", reading: "やさい", meanings: { mm: "ဟင်းသီးဟင်းရွက်", en: "vegetable", id: "sayur", vi: "rau", ph: "gulay" } },
    { kanji: "果物", reading: "くだもの", meanings: { mm: "သစ်သီး", en: "fruit", id: "buah", vi: "trái cây", ph: "prutas" } },
    { kanji: "牛肉", reading: "ぎゅうにく", meanings: { mm: "အမဲသား", en: "beef", id: "daging sapi", vi: "thịt bò", ph: "karne ng baka" } },
    { kanji: "魚", reading: "さかな", meanings: { mm: "ငါး", en: "fish", id: "ikan", vi: "cá", ph: "isda" } },
    { kanji: "自転車", reading: "じてんしゃ", meanings: { mm: "စက်ဘီး", en: "bicycle", id: "sepeda", vi: "xe đạp", ph: "bisikleta" } },
    { kanji: "旅行", reading: "りょこう", meanings: { mm: "ခရီးသွားခြင်း", en: "travel", id: "wisata", vi: "du lịch", ph: "paglalakbay" } },
    { kanji: "写真", reading: "しゃしん", meanings: { mm: "ဓာတ်ပုံ", en: "photograph", id: "foto", vi: "bức ảnh", ph: "larawan" } },
    { kanji: "映画", reading: "えいが", meanings: { mm: "ရုပ်ရှင်", en: "movie", id: "film", vi: "phim", ph: "pelikula" } },
    { kanji: "音楽", reading: "おんがく", meanings: { mm: "ဂီတ", en: "music", id: "musik", vi: "âm nhạc", ph: "musika" } },
    { kanji: "勉強", reading: "べんきょう", meanings: { mm: "စာလေ့လာခြင်း", en: "study", id: "belajar", vi: "học tập", ph: "pag-aaral" } },
    { kanji: "仕事", reading: "しごと", meanings: { mm: "အလုပ်", en: "work / job", id: "pekerjaan", vi: "công việc", ph: "trabaho" } },
    { kanji: "家", reading: "いえ", meanings: { mm: "အိမ်", en: "house", id: "rumah", vi: "nhà", ph: "bahay" } },
    { kanji: "部屋", reading: "へや", meanings: { mm: "အခန်း", en: "room", id: "kamar", vi: "phòng", ph: "silid" } },
    { kanji: "時計", reading: "とけい", meanings: { mm: "နာရီ", en: "clock / watch", id: "jam", vi: "đồng hồ", ph: "orasan" } },
    { kanji: "電話", reading: "でんわ", meanings: { mm: "တယ်လီဖုန်း", en: "telephone", id: "telepon", vi: "điện thoại", ph: "telepono" } },
    { kanji: "本", reading: "ほん", meanings: { mm: "စာအုပ်", en: "book", id: "buku", vi: "sách", ph: "aklat" } },
    { kanji: "新聞", reading: "しんぶん", meanings: { mm: "သတင်းစာ", en: "newspaper", id: "koran", vi: "báo chí", ph: "pahayagan" } },
    { kanji: "水", reading: "みず", meanings: { mm: "ရေ", en: "water", id: "air", vi: "nước", ph: "tubig" } },
    { kanji: "お金", reading: "おかね", meanings: { mm: "ပိုက်ဆံ", en: "money", id: "uang", vi: "tiền", ph: "pera" } },
    { kanji: "買う", reading: "かう", meanings: { mm: "ဝယ်သည်", en: "to buy", id: "membeli", vi: "mua", ph: "bumili" } },
    { kanji: "売る", reading: "うる", meanings: { mm: "ရောင်းသည်", en: "to sell", id: "menjual", vi: "bán", ph: "magbenta" } },
    { kanji: "行く", reading: "いく", meanings: { mm: "သွားသည်", en: "to go", id: "pergi", vi: "đi", ph: "pumunta" } },
    { kanji: "来る", reading: "くる", meanings: { mm: "လာသည်", en: "to come", id: "datang", vi: "đến", ph: "dumating" } },
    { kanji: "帰る", reading: "かえる", meanings: { mm: "ပြန်သည်", en: "to return", id: "pulang", vi: "về nhà", ph: "umuwi" } },
    { kanji: "見る", reading: "みる", meanings: { mm: "ကြည့်သည်", en: "to see", id: "melihat", vi: "xem", ph: "tingnan" } },
    { kanji: "聞く", reading: "きく", meanings: { mm: "နားထောင်သည် မေးသည်", en: "to listen / ask", id: "mendengar", vi: "nghe", ph: "makinig" } },
    { kanji: "読む", reading: "よむ", meanings: { mm: "ဖတ်သည်", en: "to read", id: "membaca", vi: "đọc", ph: "magbasa" } },
    { kanji: "書く", reading: "かく", meanings: { mm: "ရေးသည်", en: "to write", id: "menulis", vi: "viết", ph: "sulat" } },
    { kanji: "話す", reading: "はなす", meanings: { mm: "စကားပြောသည်", en: "to speak", id: "berbicara", vi: "nói chuyện", ph: "magsalita" } },
    { kanji: "休み", reading: "やすみ", meanings: { mm: "နားရက် အနားယူခြင်း", en: "rest / holiday", id: "libur", vi: "nghỉ ngơi", ph: "pahinga" } },
    { kanji: "天気予報", reading: "てんきよほう", meanings: { mm: "မိုးလေဝသခန့်မှန်းချက်", en: "weather forecast", id: "prakiraan cuaca", vi: "dự báo thời tiết", ph: "pagtataya ng panahon" } }
  ],
  N4: `
経験|けいけん|အတွေ့အကြုံ|experience|pengalaman|kinh nghiệm|karanasan
必要|ひつよう|လိုအပ်ခြင်း|necessity|kebutuhan|sự cần thiết|pangangailangan
説明|せつめい|ရှင်းပြခြင်း|explanation|penjelasan|giải thích|paliwanag
準備|じゅんび|ပြင်ဆင်ခြင်း|preparation|persiapan|chuẩn bị|paghahanda
連絡|れんらく|ဆက်သွယ်ခြင်း|contact|kontak|liên lạc|pakikipag-ugnayan
特別|とくべつ|အထူး|special|khusus|đặc biệt|espesyal
安心|あんしん|စိတ်အေးချမ်းခြင်း|peace of mind|ketenangan|yên tâm|kapanatagan
安全|あんぜん|ဘေးကင်းခြင်း|safety|keamanan|an toàn|kaligtasan
注意|ちゅうい|သတိထားခြင်း|caution|perhatian|chú ý|pag-iingat
失敗|しっぱい|အမှား၊ ကျရှုံးခြင်း|failure|kegagalan|thất bại|kabiguan
相談|そうだん|တိုင်ပင်ခြင်း|consultation|konsultasi|tư vấn|konsultasyon
約束|やくそく|ကတိ၊ ချိန်းဆိုချက်|promise, appointment|janji|lời hứa, cuộc hẹn|pangako, tipanan
連休|れんきゅう|ရုံးပိတ်ရက်ဆက်တိုက်|consecutive holidays|libur berturut-turut|kỳ nghỉ liên tiếp|sunod-sunod na bakasyon
予約|よやく|ကြိုတင်ဘိုကင်|reservation|reservasi|đặt trước|reserbasyon
景色|けしき|ရှုခင်း|scenery|pemandangan|phong cảnh|tanawin
運転|うんてん|ယာဉ်မောင်းခြင်း|driving|mengemudi|lái xe|pagmamaneho
文化|ぶんか|ယဉ်ကျေးမှု|culture|budaya|văn hóa|kultura
習慣|しゅうかん|အလေ့အကျင့်|habit, custom|kebiasaan|thói quen|ugali
特急|とっきゅう|အမြန်ရထား|limited express train|kereta ekspres terbatas|tàu tốc hành|tren ekspres
交通|こうつう|သယ်ယူပို့ဆောင်ရေး|transportation|transportasi|giao thông|transportasyon
場合|ばあい|အခြေအနေ၊ အခါ|case, situation|kasus, situasi|trường hợp, tình huống|kaso, sitwasyon
気持ち|きもち|ခံစားချက်|feeling|perasaan|cảm xúc|damdamin
返事|へんじ|အကြောင်းပြန်ခြင်း|reply, response|balasan|trả lời|sagot
説明書|せつめいしょ|အသုံးပြုနည်းလမ်းညွှန်|instruction manual|petunjuk penggunaan|hướng dẫn sử dụng|manwal ng paggamit
住所|じゅうしょ|လိပ်စာ|address|alamat|địa chỉ|address
理由|りゆう|အကြောင်းပြချက်|reason|alasan|lý do|dahilan
景気|けいき|စီးပွားရေးအခြေအနေ|economic conditions|kondisi ekonomi|tình hình kinh tế|kalagayan ng ekonomiya
残念|ざんねん|စိတ်မကောင်းဖြစ်စရာ|regrettable|disayangkan|đáng tiếc|nakakalungkot
複雑|ふくざつ|ရှုပ်ထွေးသော|complicated|rumit|phức tạp|kumplikado
成功|せいこう|အောင်မြင်ခြင်း|success|keberhasilan|thành công|tagumpay
失礼|しつれい|ရိုင်းပျခြင်း၊ ခွင့်ပြုပါ|rude, excuse me|tidak sopan, permisi|thất lễ, xin phép|bastos, paumanhin
招待|しょうたい|ဖိတ်ကြားခြင်း|invitation|undangan|lời mời|imbita
案内|あんない|လမ်းညွှန်ခြင်း|guidance, information|panduan, informasi|hướng dẫn, thông tin|gabay, impormasyon
卒業|そつぎょう|ကျောင်းပြီးခြင်း|graduation|kelulusan|tốt nghiệp|pagtatapos
入院|にゅういん|ဆေးရုံတက်ခြင်း|hospitalization|rawat inap|nhập viện|pagpapaospital
退院|たいいん|ဆေးရုံဆင်းခြင်း|leaving the hospital|keluar dari rumah sakit|xuất viện|paglabas ng ospital
故障|こしょう|ပျက်စီးခြင်း|breakdown, malfunction|kerusakan|hỏng hóc|pagkasira
修理|しゅうり|ပြုပြင်ခြင်း|repair|perbaikan|sửa chữa|pagkukumpuni
特に|とくに|အထူးသဖြင့်|especially|terutama|đặc biệt là|lalo na
最近|さいきん|မကြာသေးမီက|recently|baru-baru ini|gần đây|kamakailan
最初|さいしょ|အစပိုင်း|first, beginning|awal, pertama|đầu tiên, ban đầu|una, simula
最後|さいご|နောက်ဆုံး|last, final|terakhir|cuối cùng|huli, panghuli
途中|とちゅう|လမ်းခုလတ်|on the way, midway|di tengah perjalanan|giữa chừng|kalagitnaan
以外|いがい|မှအပ|except, other than|selain, kecuali|ngoài, trừ|maliban sa
以内|いない|အတွင်း|within|dalam|trong vòng|sa loob ng
以上|いじょう|အထက်၊ အနည်းဆုံး|more than, at least|lebih dari, setidaknya|trên, ít nhất|higit sa, hindi bababa sa
以下|いか|အောက်၊ မပိုသော|less than, no more than|kurang dari, tidak lebih dari|dưới, không quá|mas mababa sa, hindi hihigit sa
必ず|かならず|မဖြစ်မနေ|certainly, without fail|pasti|nhất định|tiyak
十分|じゅうぶん|လုံလောက်သော|enough, sufficient|cukup|đủ, đầy đủ|sapat
自由|じゆう|လွတ်လပ်ခြင်း|freedom, free|kebebasan|tự do|kalayaan
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

// ၂။ String Data များကို Multi-language Meanings Object အဖြစ် အော်တိုပြောင်းပေးမည့် Parser Function
// String Data များကို Multi-language Meanings Object အဖြစ် အော်တိုပြောင်းပေးမည့် Parser Function
function parseWords(text) {
  if (Array.isArray(text)) return text;

  return text
    .trim()
    .split("\n")
    .map((line) => {
      if (!line.trim()) return null;

      const parts = line.split("|");

      return {
        kanji: parts[0]?.trim() || "",
        reading: parts[1]?.trim() || "",
        meanings: {
          mm: parts[2]?.trim() || "",
          en: parts[3]?.trim() || "",
          id: parts[4]?.trim() || "",
          vi: parts[5]?.trim() || "",
          ph: parts[6]?.trim() || ""
        }
      };
    })
    .filter(Boolean);
}


// ဒီနေရာမှာ ထည့်ပါ
const vocabularySets = {
  N5: parseWords(rawVocabularyData.N5),
  N4: parseWords(rawVocabularyData.N4),
  N3: parseWords(rawVocabularyData.N3)
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
      getMeaning(word)
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
  levelMenuScreen.hidden = false;
});


const levelScreen = document.getElementById("level-screen");
// レベル別メニューの設定
const levelMenuScreen = document.getElementById("level-menu-screen");
const levelMenuTitle = document.getElementById("level-menu-title");

const menuVocabularyButton = document.getElementById("menu-vocabulary-button");
const menuQuizButton = document.getElementById("menu-quiz-button");
const menuReadingButton = document.getElementById("menu-reading-button");
const levelMenuBackButton = document.getElementById("level-menu-back-button");
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

// 言葉ボタン
menuVocabularyButton.addEventListener("click", () => {
  levelMenuScreen.hidden = true;
  showVocabulary(currentLevel);
});

// クイズボタン
menuQuizButton.addEventListener("click", () => {
  levelMenuScreen.hidden = true;
  startQuiz();
});

// 文章ボタン
menuReadingButton.addEventListener("click", () => {
  levelMenuScreen.hidden = true;

  readingQuestions = [...readingQuestionData[currentLevel]];
  readingCurrentQuestion = 0;
  readingTotalScore = 0;

  readingScreen.hidden = false;
  showReadingQuestion();
});

// メニューに戻る
levelMenuBackButton.addEventListener("click", () => {
  levelMenuScreen.hidden = true;
  levelScreen.hidden = false;
});
function showVocabulary(level) {
  currentLevel = level;
  levelScreen.hidden = true;
  quizScreen.hidden = true;
  vocabularyScreen.hidden = false;

  vocabularyTitle.textContent = `${level} 単語一覧（${vocabularySets[level].length}語）`;
  vocabularyList.innerHTML = "";

  vocabularySets[level].forEach((word, index) => {
    const row = document.createElement("tr");

    // word.meaning အစား getMeaning(word) ကို သုံးပေးပါ
    [index + 1, word.kanji, word.reading, getMeaning(word)].forEach((value) => {
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
// ==========================================
// 1. LEVEL SELECTION LOGIC
// ==========================================
document.querySelectorAll("#level-screen .level-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLevel = button.dataset.level; // N5, N4, N3 တန်ဖိုး ယူမည်

    if (levelScreen) levelScreen.hidden = true;
    if (vocabularyScreen) vocabularyScreen.hidden = true;
    if (quizScreen) quizScreen.hidden = true;
    if (readingScreen) readingScreen.hidden = true;
    if (gameScreen) gameScreen.hidden = true;

    if (levelMenuTitle) {
      levelMenuTitle.textContent = `${currentLevel} メニュー`;
    }
    if (levelMenuScreen) {
      levelMenuScreen.hidden = false;
    }
  });
});

// ==========================================
// 2. WORD MATCHING GAME LOGIC
// ==========================================
const gameScreen = document.getElementById("game-screen");
const gameGrid = document.getElementById("game-grid");
const gameTimerEl = document.getElementById("game-timer");
const gameScoreEl = document.getElementById("game-score");
const menuGameButton = document.getElementById("menu-game-button");
const gameBackButton = document.getElementById("game-back-button");
const gameRestartButton = document.getElementById("game-restart-button");

let selectedTile = null;
let gameScore = 0;
let gameTimer = 60;
let gameInterval = null;

// ゲーム (言葉をつなぐ) ခလုတ်နှိပ်လျှင်
if (menuGameButton) {
  menuGameButton.addEventListener("click", () => {
    if (levelMenuScreen) levelMenuScreen.hidden = true;
    startGame();
  });
}

// မီနူးသို့ ပြန်သွားမည်
if (gameBackButton) {
  gameBackButton.addEventListener("click", () => {
    clearInterval(gameInterval);
    if (gameScreen) gameScreen.hidden = true;
    if (levelMenuScreen) levelMenuScreen.hidden = false;
  });
}

// တစ်ကြိမ်ပြန်ဆော့မည်
if (gameRestartButton) {
  gameRestartButton.addEventListener("click", startGame);
}

function startGame() {
  if (gameScreen) gameScreen.hidden = false;

  gameScore = 0;
  gameTimer = 60;
  selectedTile = null;
  
  if (gameScoreEl) gameScoreEl.textContent = gameScore;
  if (gameTimerEl) gameTimerEl.textContent = gameTimer;

  // အချိန်စက်နာရီ
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    gameTimer--;
    if (gameTimerEl) gameTimerEl.textContent = gameTimer;

    if (gameTimer <= 0) {
      clearInterval(gameInterval);
      alert(`အချိန်ပြည့်သွားပါပြီ! ရရှိသောအမှတ်: ${gameScore}`);
    }
  }, 1000);

  renderGameGrid();
}

function renderGameGrid() {
  if (!gameGrid) return;
  gameGrid.innerHTML = "";

  // ရွေးထားသော Level (သို့) Default N5 မှ Vocabulary Data ယူခြင်း
  const activeLevel = (currentLevel && vocabularySets[currentLevel]) ? currentLevel : "N5";
  const wordList = vocabularySets[activeLevel];

  if (!wordList || wordList.length === 0) {
    gameGrid.innerHTML = "<p style='grid-column: 1/-1;'>စကားလုံးများ ရှာမတွေ့ပါ။</p>";
    return;
  }

  // စကားလုံး ၄ လုံး Random ရွေးမည် (ကတ်ပြား ၈ ခုဖြစ်မည်)
  const selectedWords = shuffle(wordList).slice(0, 4);

  let tilesData = [];
  selectedWords.forEach((word) => {
    tilesData.push({
      id: word.kanji,
      text: `${word.kanji}\n(${word.reading})`,
      type: "jp"
    });
    tilesData.push({
      id: word.kanji,
      text: getMeaning(word),
      type: "mm"
    });
  });

  // ကတ်ပြားများကို ရောမွှေမည်
  tilesData = shuffle(tilesData);

  // HTML Grid ထဲ ကတ်ပြားများ ထည့်မည်
  tilesData.forEach((item) => {
    const tileBtn = document.createElement("button");
    tileBtn.type = "button";
    tileBtn.className = "game-tile";
    tileBtn.innerText = item.text;
    tileBtn.dataset.id = item.id;

    tileBtn.addEventListener("click", () => {
      handleTileClick(tileBtn, item);
    });

    gameGrid.appendChild(tileBtn);
  });
}

function handleTileClick(tileBtn, item) {
  if (tileBtn.classList.contains("matched") || tileBtn === selectedTile) return;

  // ဂျပန်စာဖြစ်လျှင် အသံထွက်ပေးမည်
  if (item.type === "jp" && typeof speakJapanese === "function") {
    speakJapanese(item.id);
  }

  if (!selectedTile) {
    selectedTile = tileBtn;
    tileBtn.classList.add("selected");
  } else {
    if (selectedTile.dataset.id === tileBtn.dataset.id) {
      // မှန်သွားပါက
      selectedTile.classList.remove("selected");
      selectedTile.classList.add("matched");
      tileBtn.classList.add("matched");
      selectedTile = null;

      gameScore += 10;
      if (gameScoreEl) gameScoreEl.textContent = gameScore;

      // ကတ်ပြား ကုန်သွားပါက နောက်တစ်ပွဲ ပေါ်မည်
      const remainingTiles = gameGrid.querySelectorAll(".game-tile:not(.matched)");
      if (remainingTiles.length === 0) {
        setTimeout(renderGameGrid, 500);
      }
    } else {
      // မှားသွားပါက
      tileBtn.classList.add("selected");
      setTimeout(() => {
        if (selectedTile) selectedTile.classList.remove("selected");
        tileBtn.classList.remove("selected");
        selectedTile = null;
      }, 400);
    }
  }
}



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
  levelMenuScreen.hidden = false;
});

function createQuestion(word, direction, allWords) {
  const isJapaneseToMyanmar = direction === "ja-mm";

  const correctAnswer = isJapaneseToMyanmar
  ? getMeaning(word)
  : `${word.kanji}（${word.reading}）`;

  const getAnswer = (item) =>
  isJapaneseToMyanmar
    ? getMeaning(item)
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
  `「${getMeaning(q.word)}」は日本語で何ですか？`;
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
  levelMenuScreen.hidden = false;
});
// 文章読解・穴埋め問題


const readingQuestionData = {

  N5: [
    {
      sentence: "私は毎日（　　　）で日本語を勉強します。",
      choices: ["学校", "病院", "銀行", "会社"],
      answer: 0
    },
    {
      sentence: "日本語が分からないとき、（　　　）に聞きます。",
      choices: ["友達", "先生", "家族", "学生"],
      answer: 1
    },
    {
      sentence: "日曜日に（　　　）と映画を見ました。",
      choices: ["先生", "会社員", "友達", "学生"],
      answer: 2
    },
    {
      sentence: "私は毎朝（　　　）で会社へ行きます。",
      choices: ["自転車", "写真", "時計", "電車"],
      answer: 3
    },
    {
      sentence: "明日の（　　　）はいいです。",
      choices: ["天気", "時間", "名前", "仕事"],
      answer: 0
    },
    {
      sentence: "休みの日は（　　　）で本を読みます。",
      choices: ["病院", "図書館", "銀行", "会社"],
      answer: 1
    },
    {
      sentence: "私は毎日（　　　）を食べます。",
      choices: ["水", "魚", "野菜", "新聞"],
      answer: 2
    },
    {
      sentence: "旅行に行って、たくさん（　　　）を撮りました。",
      choices: ["映画", "新聞", "料理", "写真"],
      answer: 3
    },
    {
      sentence: "毎晩、家族と一緒においしい（　　　）を食べます。",
      choices: ["料理", "音楽", "時間", "電話"],
      answer: 0
    },
    {
      sentence: "分からない漢字があるので、（　　　）を読みます。",
      choices: ["写真", "新聞", "天気", "自転車"],
      answer: 1
    }
  ],

  N4: [
    {
      sentence: "日本へ行く前に、旅行の（　　　）をしました。",
      choices: ["準備", "失敗", "故障", "景色"],
      answer: 0
    },
    {
      sentence: "分からないことがあれば、先生に（　　　）してください。",
      choices: ["予約", "相談", "運転", "卒業"],
      answer: 1
    },
    {
      sentence: "明日の会議について、みんなに（　　　）しました。",
      choices: ["修理", "入院", "連絡", "退院"],
      answer: 2
    },
    {
      sentence: "車を運転するときは、安全に（　　　）してください。",
      choices: ["招待", "成功", "安心", "注意"],
      answer: 3
    },
    {
      sentence: "病気がひどくなったので、病院に（　　　）しました。",
      choices: ["入院", "卒業", "修理", "予約"],
      answer: 0
    },
    {
      sentence: "友達との（　　　）を忘れないでください。",
      choices: ["景色", "約束", "文化", "経験"],
      answer: 1
    },
    {
      sentence: "この機械は（　　　）しているので、使えません。",
      choices: ["成功", "説明", "故障", "安心"],
      answer: 2
    },
    {
      sentence: "日本の（　　　）について勉強しています。",
      choices: ["理由", "場合", "住所", "文化"],
      answer: 3
    },
    {
      sentence: "試験に合格して、とても（　　　）しました。",
      choices: ["安心", "失敗", "残念", "複雑"],
      answer: 0
    },
    {
      sentence: "電車の時間を調べるために、駅で（　　　）を見ました。",
      choices: ["説明書", "案内", "習慣", "気持ち"],
      answer: 1
    }
  ],
  N3: [
    {
      sentence: "毎日練習したので、日本語が少しずつ（　　　）きました。",
      choices: ["上手に", "危険に", "自由に", "残念に"],
      answer: 0
    },
    {
      sentence: "電車が遅れた（　　　）、授業に間に合いませんでした。",
      choices: ["ために", "ところ", "ばかり", "かわりに"],
      answer: 0
    },
    {
      sentence: "分からない言葉の意味を辞書で（　　　）しました。",
      choices: ["説明", "確認", "紹介", "相談"],
      answer: 1
    },
    {
      sentence: "健康のために、毎日運動する（　　　）にしています。",
      choices: ["予定", "経験", "習慣", "理由"],
      answer: 2
    },
    {
      sentence: "この問題は難しいですが、最後まで（　　　）みます。",
      choices: ["あきらめて", "比べて", "続いて", "頑張って"],
      answer: 3
    },
    {
      sentence: "雨が降りそうなので、傘を持って行った（　　　）です。",
      choices: ["ほう", "ほうがいい", "こと", "もの"],
      answer: 1
    },
    {
      sentence: "彼は約束の時間に（　　　）来ました。",
      choices: ["必ず", "急に", "特に", "十分"],
      answer: 0
    },
    {
      sentence: "この説明は少し（　　　）ので、もう一度聞きたいです。",
      choices: ["安全", "複雑", "便利", "自由"],
      answer: 1
    },
    {
      sentence: "試験に合格できるように、毎日勉強を（　　　）います。",
      choices: ["考えて", "比べて", "続けて", "決めて"],
      answer: 2
    },
    {
      sentence: "困ったときは、一人で考えないで先生に（　　　）してください。",
      choices: ["連絡", "確認", "説明", "相談"],
      answer: 3
    }
  ]
};

// 文章読解のレベル選択ボタン
const readingScreen = document.getElementById("reading-screen");
const readingQuestionNumber = document.getElementById("reading-question-number");
const readingSentence = document.getElementById("reading-sentence");
const readingChoices = document.getElementById("reading-choices");
const readingFeedback = document.getElementById("reading-feedback");
const readingScore = document.getElementById("reading-score");
const readingNextButton = document.getElementById("reading-next-button");
const readingBackButton = document.getElementById("reading-back-button");

  // 文章読解クイズの設定
let readingQuestions = [];
let readingCurrentQuestion = 0;
let readingTotalScore = 0;
let readingAnswered = false;

// 文章読解の問題を表示する
function showReadingQuestion() {
  const question = readingQuestions[readingCurrentQuestion];

  readingAnswered = false;

  readingQuestionNumber.textContent =
    `問題 ${readingCurrentQuestion + 1} / ${readingQuestions.length}`;

  readingSentence.textContent = question.sentence;

  readingFeedback.textContent = "";

  readingScore.textContent =
    `スコア：${readingTotalScore}点`;

  readingNextButton.hidden = true;

  readingChoices.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");

    button.textContent = choice;

    button.addEventListener("click", () => {
      checkReadingAnswer(index);
    });

    readingChoices.appendChild(button);
  });
}

// 文章読解の答えを確認する
function checkReadingAnswer(selectedIndex) {
  if (readingAnswered) return;

  readingAnswered = true;

  const question = readingQuestions[readingCurrentQuestion];

  const buttons = readingChoices.querySelectorAll("button");

  if (selectedIndex === question.answer) {
    readingFeedback.textContent = "正解です！";
    readingTotalScore += 10;
  } else {
    readingFeedback.textContent =
      `不正解です。正解は「${question.choices[question.answer]}」です。`;
  }

  readingScore.textContent =
    `スコア：${readingTotalScore}点`;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.style.backgroundColor = "#d4edda";
    }
  });

  readingNextButton.hidden = false;
}
// 次の問題へ進む
function nextReadingQuestion() {
  readingCurrentQuestion++;

  if (readingCurrentQuestion < readingQuestions.length) {
    showReadingQuestion();
  } else {
    showReadingResult();
  }
}

// 次の問題ボタン
readingNextButton.addEventListener("click", nextReadingQuestion);

// 文章読解の結果を表示する
function showReadingResult() {
  readingQuestionNumber.textContent = "テスト終了！";

  readingSentence.textContent =
    `あなたの点数は ${readingTotalScore} / ${readingQuestions.length * 10} 点です。`;

  readingChoices.innerHTML = "";

  readingFeedback.textContent = "お疲れ様でした！";

  readingScore.textContent =
    `正解数：${readingTotalScore / 10} / ${readingQuestions.length} 問`;

  readingNextButton.hidden = true;
}
// レベル選択画面に戻る
readingBackButton.addEventListener("click", () => {
  readingScreen.hidden = true;
  levelMenuScreen.hidden = false;
});

// 文章読解・穴埋め問題の画面設定

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

// လက်ရှိ ရွေးထားသော ဘာသာစကား (Default က မြန်မာ)
let currentLang = "mm";

// Language Selector ကို ချိတ်ဆက်ခြင်း
const langSelect = document.getElementById("lang-select");
if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    
    // လက်တလော ဖွင့်ထားသော မျက်နှာပြင်ကို အသစ်ပြန်ဖြစ်စေရန် (သို့မဟုတ် စာသားများ ချက်ချင်းပြောင်းရန်)
    // ဥပမာ - Quiz သို့မဟုတ် Vocabulary List ကို Refresh လုပ်ခြင်း
    if (typeof renderVocabularyList === "function") {
      // renderVocabularyList(); 
    }
  });
}

// အဓိပ္ပာယ်ထုတ်ယူရန် Helper Function
function getMeaning(word) {
  if (word.meanings && word.meanings[currentLang]) {
    return word.meanings[currentLang];
  }
  // တကယ်လို့ ရွေးထားတဲ့ ဘာသာစကား မရှိသေးရင် မြန်မာဘာသာကို Default ပြန်ပြမည်
  return word.meanings["mm"] || "";
}

