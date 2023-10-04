// E:\programming\Project\byo_eng\backend\index.js

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const adviceController = require('./controllers/adviceController');

app.use(express.json());

// ここにルートを追加する
app.post('/advice', adviceController.getAdvice);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
