const http = require('http');
const students = require('./data/students.json');
const { searchStudents } = require('./controller/studentController')

const server = http.createServer((req, res) => {
    if(req.url === '/api/students' && req.method === 'GET') {
        res.writeHeader(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify(students));
    } else if (req.url.match(/\/api\/students\/([A-Za-z]+)/) && req.method === 'GET') {
        const branch = req.url.split('/')[3]
        searchStudents(req,res,branch);
    } else {
        res.writeHeader(404, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify({ message: 'Route Not Found' }));
    }    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('server listening'))