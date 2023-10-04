// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const openai = require('openai');
require('dotenv').config();

const openaiInstance = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.getAdvice = async (req, res) => {
    if (!openaiInstance) {
        openaiInstance = new openai.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }

    const userInput = req.body.text;

    // リクエストの中身をログに出力
    console.log("Received userInput:", userInput);

    try {
        // OpenAI APIを使用してアドバイスを取得
        const response = await openaiInstance.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: userInput,
            max_tokens: 150
        });
        

        // OpenAIからのレスポンスをログに出力
        console.log("OpenAI Response:", response);

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
