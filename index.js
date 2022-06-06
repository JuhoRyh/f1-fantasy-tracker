const express = require('express');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
