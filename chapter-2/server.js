const express = require('express');
const app = express();

// Config
const PORT = 8000;

let data = {
  name: ['John'],
}

//Middleware
app.use(express.json());

// Routes/path --> link.com/path
app.get('/', (req, res) => {
  res.send(`
    <body>
      <p>${JSON.stringify(data)}
      </p>
    </body>
    `);
});

app.get('/dashboard', (req, res) => {
  res.send('Logs, perfomance stats, traffick etc');
});

// API endpoint (where u get users response?)
// CRUD -> Create (POST), Read(GET), Update(PUT), Delete(DELETE)

app.post('/api/data' , (req, res) => {
  // Say someone wants to create an account, when they put credentials, the browser sends network request
  const reqData = req.body;
  console.log(reqData);
  data.name.push(reqData.name);

  console.log(data);

  res.sendStatus(201);
})

app.get('/api/data', (req, res) => {
  res.send(data);
});

app.delete('/api/endpoint', (req, res) => {
  data.name.pop();
  console.log(data);

  res.sendStatus(203);
});



// Must be the highest line number
app.listen(PORT, () => {
  console.log(`Server has started on localhost: ${PORT}`);
});
