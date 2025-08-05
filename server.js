const express = require('express');
const app = express();

// Config
const PORT = 8000;

let data = {
  name: 'John',
}


// Routes/path --> link.com/path
app.get('/', (req, res) => {
  console.log('Hello, world!');
  res.sendStatus(200);
});

app.get('/dashboard', (req, res) => {
  res.send('Logs, perfomance stats, traffick etc');
});

// API endpoint (where u get users response?)

app.get('/api/data', (req, res) => {
  res.send(data);
});



// Must be the highest line number
app.listen(PORT, () => {
  console.log(`Server has started on localhost: ${PORT}`);
});
