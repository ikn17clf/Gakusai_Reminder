// # 調布祭体温測定 にお知らせ
function postDiscordbot(text) {
  // discord側で作成したボットのウェブフックURL
  const discordWebHookURL = "https://discord.com/api/webhooks/xxxxxxxxxx";

  // 投稿するチャット内容と設定
  const message = {
    "content": text, // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}

// 毎日9時に体温を記入するようにメッセージを送信する関数
// ユニークな本文をランダムで送る
function body_temperature_notification(){
  num = Math.random();
  var date = new Date();
  date = parseInt(Utilities.formatDate(date, "Asia/Tokyo", "dd"));
  console.log(date);
  if (date > 17){
    return;
  }else if (date==17){
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガガガガ、おはようございます。"),
      Utilities.formatString("\n"),
      Utilities.formatString("ついにこの日がやってまいりました。今日はいよいよ、**3年ぶりの対面調布祭**の前日です！そして、**調布祭実行委員会に体温記入フォームを提出する日**です！"),
      Utilities.formatString("\n"),
      Utilities.formatString("以下のリンクから体温を記入して、**フォームを送信してください。**"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("フォームを送信したら、このメッセージにリアクションをつけてください。"),
      Utilities.formatString("\n"),
      Utilities.formatString("体温測定ロボの役目はこれで終わりです。明日から3日間、**対面調布祭に全力で取り組みましょう！！！**"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガガガガガガガガ"),
    ];
  }else if (num < 0.2){
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガガガガ、おはようございます。"),
      Utilities.formatString("\n"),
      Utilities.formatString("以下のリンクから、体温を記入してください。"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("体温を記入したら、このメッセージにリアクションをつけてください。"),
    ];
  }else if (num < 0.4){
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガシャーン、ガシャーン、おはようございます。ガシャーン、ガシャーン"),
      Utilities.formatString("\n"),
      Utilities.formatString("以下のリンクから、体温を記入してください。"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("ガシャーン、ガシャーン、体温を記入したら、このメッセージにリアクションをつけてください。ガシャーン、ガシャーン"),
    ];
  }else if (num < 0.6){
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("Good, morning!"),
      Utilities.formatString("\n"),
      Utilities.formatString("Please click on the link below to access the form and fill in your temperature!(以下のリンクから、体温を記入してください)"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("After filling in your temperature, please react to this message!(体温を記入したら、このメッセージにリアクションをつけてください)"),
    ];
  }else if (num < 0.8){
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガガガガガガガガ"),
      Utilities.formatString("\n"),
      Utilities.formatString("以下のリンクから、体温を記入してください。"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("体温を記入したら、このメッセージにリアクションをつけてください。"),
    ];
  }else{
    var txts = [
      Utilities.formatString("<@&797024467905282059>"),
      Utilities.formatString("\n"),
      Utilities.formatString("ガシャーン、ガシャーン"),
      Utilities.formatString("\n"),
      Utilities.formatString("以下のリンクから、体温を記入してください。"),
      Utilities.formatString("\n"),
      Utilities.formatString("https://forms.gle/xxxxx"), // 調布祭実行委員会が作成した，体温を記入するフォームのリンク
      Utilities.formatString("\n"),
      Utilities.formatString("体温を記入したら、このメッセージにリアクションをつけてください。"),
    ];
  }
  var txt = txts.join("");
  postDiscordbot(txt)
}

/*
Utilities.formatDate(event.getStartTime(), "JST", "HH:mm"),
Utilities.formatString("\n"),
Utilities.formatString("%s\n", eventURL)
*/

/*
  var txts = [
    Utilities.formatString("ガガガガ、こんにちは。私は体温記入ロボです。"),
    Utilities.formatString("\n"),
    Utilities.formatString("これから毎日体温を記入してもらいます。"),
    Utilities.formatString("\n"),
    Utilities.formatString("みなさん、よろしくお願いします。"),
  ];
  */
