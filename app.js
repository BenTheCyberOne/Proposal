const express = require('express');
const https = require('https');
const app = express();
var path = require('path');
const port = 3000;
//const public = '/public'

app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => {
	res.sendFile('index.html');
});
app.get('/yes', (req,res) =>{
	res.sendFile(path.join(__dirname, '/public', 'yes.html'));
});

app.get('*',function(req,res){
	res.status(404).send('Sorry mate, there is no page or function for that...');
});

app.listen(port, () => {
	console.log('Server running on port ${port}')
	});
