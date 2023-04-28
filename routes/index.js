var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;


// const express = require('express');
// var cors = require('cors')
// const app = express();
// const port = 3000;

// app.use(cors())
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
// app.get('/sound/:name', (req, res) => {
// 	const {name} = req.params
// 	console.log(name)
// 	if(name=='dog'){
// 		res.json({'sound':'멍멍'})
// 	}else if(name == 'cat'){
// 		res.json({'sound':'야옹'})
// 	}else{
// 		res.send('알수없슴')
// 	}
// 	})

// app.listen(port, () => {})
