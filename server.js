const express = require('express');
const app = express();

// Config
const PORT = 8000;

console.log('test');

app.listen(PORT, () => {
  console.log(`Server has started on localhost: ${PORT}`);
});
