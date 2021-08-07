const express = require('express');
const https = require('https');
const app = express();

const port = 3000;
//const public = '/public'

app.use(express.static('public'));
app.get('/', (req,res) => {
	res.sendFile('index.html')
});


app.listen(port, () => {
	console.log('Server running on port ${port}')
	});

//var httpsServer = https.createServer(app);

//httpsServer.listen(port);
