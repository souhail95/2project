const express = require('express');
var cron = require('node-cron');


const app = express();
console.log(__dirname);
app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/img',express.static(__dirname + 'public/img'));
const homePage =  require('./routes/Home Page');
const ourServices =  require('./routes/Our Services');
const contactUs =  require('./routes/Contact Us');


app.use('/',homePage);

app.use('/OurServices',ourServices);
app.use('/ContactUs', contactUs);
const port = process.env.PORT || 4000;
app.listen(port, function(){
  
  console.log('The server is running,'+'Please open your browser at http://localhost:%s',port)
  
})


cron.schedule('0 */1 * * *',function(){

app.listen(port, function(){
  
  console.log('The server is running,'+'Please open your browser at http://localhost:%s',port)
  
})});





