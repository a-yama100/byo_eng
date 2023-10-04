// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js

const axios = require('axios');
require('dotenv').config();

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY;

// ダミーの翻訳関数
function translateToJapanese(englishText) {
    return "これはダミーの翻訳です: " + englishText;
}

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;

    // リクエストの中身をログに出力
    console.log("Received userInput:", userInput);

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {role: "system", content: "You are a helpful assistant."},
            {role: "user", content: userInput}
        ]
    };

    try {
        // OpenAI APIを使用してアドバイスを取得
        const response = await axios.post(OPENAI_API_URL, requestBody, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // OpenAIからのレスポンスをログに出力
        console.log("OpenAI Response:", response.data);

        // APIからのレスポンスを使用してアドバイスを抽出
        const advice = response.data.choices[0].message.content.trim();
        const translatedAdvice = translateToJapanese(advice);

        res.json({
            advice: advice,
            translatedAdvice: translatedAdvice // 翻訳されたアドバイスを追加
        });

    } catch (error) {
        console.error("Error while fetching advice from OpenAI:", error);
        res.status(500).json({
            error: "Error while fetching advice from OpenAI."
        });
    }
};
