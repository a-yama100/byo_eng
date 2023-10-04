// E:\programming\Project\byo_eng\backend\index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// ここにルートを追加する

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
