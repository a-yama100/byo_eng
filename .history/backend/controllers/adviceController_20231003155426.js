// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const openai = require('openai');
require('dotenv').config(); // この行を追加して、dotenvを読み込みます。
openai.apiKey = process.env.OPENAI_API_KEY; // この行を変更して、環境変数からAPIキーを読み込みます。

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;

    try {
        // OpenAI APIを使用してアドバイスを取得
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo",
            prompt: `Please evaluate the following English sentence and provide advice on its grammar, word usage, and any other relevant feedback:\n${userInput}`,
            max_tokens: 200
        });

        // APIからのレスポンスを使用してアドバイスを抽出
        const advice = response.choices[0].message['content'].trim();

        res.json({
            advice: advice
        });

    } catch (error) {
        console.error("Error while fetching advice from OpenAI:", error);
        res.status(500).json({
            error: "Error while fetching advice from OpenAI."
        });
    }
};
