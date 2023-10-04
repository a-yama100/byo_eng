// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

exports.getAdvice = (req, res) => {
    const userInput = req.body.text;
  
    // ここでChatGPTや他のロジックを使用してアドバイスを生成します。
    // 今回は簡単な例として、入力されたテキストに対して固定のアドバイスを返すものとします。
    const advice = `アドバイス: ${userInput} は素晴らしい英文です！`;
  
    res.json({
      advice: advice
    });
  };
  