// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const openai = require('openai');
require('dotenv').config();

const openaiInstance = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;

    try {
        // OpenAI APIを使用してアドバイスを取得
        response = openai.ChatCompletion.create({
            model: "gpt-4",
            messages: [
                {"role": "user", "content": prompt}
            ]
        });

        // APIからのレスポンスを使用してアドバイスを抽出
        const advice = response.choices[0].text.trim();

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
