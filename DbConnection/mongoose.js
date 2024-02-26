const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Knovator-test')
.then(() => {console.log('Connected!');}).catch((err) => {console.log('Disconnected!');});