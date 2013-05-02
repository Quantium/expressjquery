var _               = require('underscore')
    ,mongoose        = require('mongoose')
    ,db_lnk          = 'mongodb://sample:123456@dharma.mongohq.com:10062/letras'
    ,db              = mongoose.createConnection(db_lnk);

// Creación de variables para cargar el modelo
var producto_schema = require('../models/heroe')
  , Heroe = db.model('Heroe', producto_schema);

exports.index = function (req, res) {

    Heroe.find({},'name',gotHeroes);
    
    function gotHeroes (err, heroes) {
        if (err) {
            console.log('Error de gotHeroes:',err);
            //return next();
        }
        console.log(heroes);
        var names = heroes.map(function(p) { return p.name; });
        return res.render('index', { heroes: names, title: '3M Facts' });
    }
};

exports.hero = function(req, res) {
    Heroe.findOne({ 'name':req.params.name},'facts',gotHero);
    
    function gotHero(err, hero)
    {
        if(err){
            console.log('Error de gotHeros:',err);
        }
        //console.log('Obtener Heroe->',hero.facts);
        res.json(hero.facts);
    }  
};

exports.addFact = function(req, res) {
    
    Heroe.findOne({'name':req.body.name},gotHero);
    
    function gotHero(err,hero)
    {
        hero.facts.push(req.body.fact);
        hero.save();
        res.json({status:'ok'});
    }
}