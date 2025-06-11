const express = require('express');  
const app = express();               
const port = 3000;                  

// route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
