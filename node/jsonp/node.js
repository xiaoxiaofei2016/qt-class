const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/api/books') {
    let list = [{book: 'book2'}]
    res.end(`getBook(${JSON.stringify(list)})`);
  }
})
.listen(3000, () => {
  console.log('Server is running http://localhost:3000');
})