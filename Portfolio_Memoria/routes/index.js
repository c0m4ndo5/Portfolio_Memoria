var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Yuri Portfolio' });
});
router.get('/facebook', function (req, res) {
    res.redirect('https://www.facebook.com/yuri.wergrzn');
});
router.get('/email', function (req, res) {
    res.redirect('mailto:yuri.wergrzn@gmail.com');
});
router.get('/linkedin', function (req, res) {
    res.redirect('https://www.linkedin.com/in/yuri-wergrzn-4269b497');
});
router.get('/photography', function (req, res) {
    res.redirect('https://picasaweb.google.com/111343158697690270575/6276800098434766305?feat=directlink');
});
router.get('/getresume', function (req, res) {
    res.redirect('https://drive.google.com/file/d/0B0hpo0GgXHKuc2xZX1h2aF9ZMEk/view?usp=sharing');
});
router.get('/steam', function (req, res) {
    res.redirect('http://steamcommunity.com/profiles/76561197980201440/');
});
router.get('/skype', function (req, res) {
    res.redirect('skype:gorranian?chat');
});

module.exports = router;