// E:\programming\Project\byo_eng\backend\server.js

const express = require('express');
const cors = require('cors');

const app = express();

// CORSミドルウェアを使用する
app.use(cors());

// その他のミドルウェアやルートの設定
