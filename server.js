const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hệ Thống Đánh Giá Chất Lượng');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
