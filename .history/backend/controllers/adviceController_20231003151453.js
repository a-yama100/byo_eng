// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const openai = require('openai');

openai.api_key = 'YOUR_OPENAI_API_KEY'; // こちらにあなたのOpenAI APIキーを入力してください

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;

    try {
        // OpenAI APIを使用してアドバイスを取得
        const response = await openai.ChatCompletion.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "Please evaluate the following English sentence and provide advice on its grammar, word usage, and any other relevant feedback."
                },
                {"role": "user", "content": userInput}
            ]
        });

        // APIからのレスポンスを使用してアドバイスを抽出
        const advice = response.choices[0].message['content'].trim();

        res.json({
            advice: advice
        });

    } catch (error) {
        res.status(500).json({
            error: "Error while fetching advice from OpenAI."
        });
    }
};
