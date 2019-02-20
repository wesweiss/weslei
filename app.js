const   express = require('express'),
        app = express(),
        dotenv = require('dotenv'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        expressSanitizer = require('express-sanitizer'),
        methodOverride = require('method-override'),
        Portugues = require('./public/assets/js/pt-br'),
        English = require('./public/assets/js/en-us');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');

dotenv.config();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

// ROUTE
app.get('/', (req, res) => res.render('home', {language:Portugues}));
app.get('/en-us', (req, res) => res.render('home', {language:English}));

app.listen(process.env.PORT_APP, process.env.IP, () => console.log('Server Ok'));