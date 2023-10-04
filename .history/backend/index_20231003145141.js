const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// ここにルートを追加する

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
