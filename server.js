require('dotenv').config();


const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const logger = require('morgan')
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const port = 9000;
const Prismic = require('@prismicio/client');
const PrismicDOM = require('prismic-dom');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));



// SETTING PRISMIC
const initApi = (req) => Prismic.getApi(process.env.PRISMIC_ENDPOINT, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  req,
});
// const handleLinkResolver = (doc) => {
//   return '/';
// }
app.use((req, res, next) => {
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    handleLinkResolver: () => '/',
  };
  res.locals.PrismicDOM = PrismicDOM;
  next();
});
// ENDING SETTING PRISMIC




//SETTING VIEWS OF HANDLEBARS
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');


//PAGES ROUTE
app.get('/', async (req, res) => {
  res.render('pages/home', {
    templateData: "home",
  });
});

app.get('/aboutme', async (req, res) => {
  res.render('pages/about-me', {
    templateData: "aboutme",
  });
});

app.listen(port, () => {
  console.log(`Prithviraj's Website is listening at http://localhost:${port}`);
});
