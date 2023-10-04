// E:\programming\Project\byo_eng\backend\server.js

const express = require('express');
const cors = require('cors');
const adviceController = require('./controllers/adviceController');

const app = express();

// CORSミドルウェアを使用する
app.use(cors({
    origin: 'http://localhost:3001',  // クライアントのオリジンを許可
    methods: ['GET', 'POST'],        // 許可するHTTPメソッド
    // その他のCORS設定
  }));

  app.use(express.json());
app.post('/advice', adviceController.getAdvice);
// その他のミドルウェアやルートの設定
