var express = require('express');
var router = express.Router();

const date = new Date();
const d = date.toString();
console.log(d);
let x = d.split(' ');
const day = x[0];
const hour = date.getHours();
const day1 = date.getDay();
console.log(day);
console.log(day1);
console.log(hour);
/* GET users listing. */
router.get('/', function(req, res) {
 
if((hour < 9) || (hour > 16) || (day1 == 0) || (day1 == 6))
{res.render('Closed');}
else
{res.render('OurServices');}

});

module.exports = router;