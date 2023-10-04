// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const axios = require('axios');
require('dotenv').config();

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY;

// ダミーの翻訳関数
function translateToJapanese(englishText) {
    // 例: 英文が「This is a pen.」なら、「これはペンです。」と翻訳する
    const translations = {
        "This is a pen.": "これはペンです。",
        "That's great! How can I assist you with your pen?.": "それは素晴らしい！ あなたのペンにどのように助けてもらえますか？"
    };

    // 対応する日本語の翻訳を返す。対応する翻訳がない場合はデフォルトのメッセージを返す。
    return translations[englishText] || "これは翻訳されていません。";
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
