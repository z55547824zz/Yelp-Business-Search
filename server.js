const express = require('express')
const bodyParser = require('body-parser');
const axios = require("axios");
const app = express()
const localhost = '127.0.0.1'
const port = 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    var found = true;

    if (found){
        res.render('pages/index', {
            mascots: mascots,
            tagline: tagline
        });
    } else{
        res.render('pages/index', {
            mascots: mascots
        });
    }
});

app.all('/yelpListAuto', async function (req, res, next) {
    var cat = req.query.category;
    if (cat=="Default"){
        cat = "all";
    }
    if (cat=="Arts & Entertainment"){
        cat = "arts";
    }
    if (cat=="Health & Medical"){
        cat = "health";
    }
    if (cat=="Hotels & Travel"){
        cat = "hotelstravel";
    }
    if (cat=="Food"){
        cat = "food";
    }
    if (cat=="Professional Services"){
        cat = "professional";
    }

    var businesses = []
    var recData;
    var result = false;

    if (req.query.auto == "true"){
        async function getyelpA(lat, lng) {
            const axios = require('axios');

            await axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
                },
                params: {
                    term: req.query.keyword,
                    latitude: req.query.ipLat,
                    longitude: req.query.ipLng,
                    categories: cat,
                    radius: req.query.distance * 1600,
                    // Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
                }
            })
                .then(function (responsejson) {
                    recData = responsejson.data;
                    var businessList = recData.businesses;
                    for(let i = 0; i < businessList.length; i++){
                        var cur = businessList[i];
                        businesses.push({id: cur.id, image: cur.image_url, name: cur.name, rating: cur.rating, distance: Math.round((cur.distance/1600)*100)/100});
                    }
                    if (businessList.length != 0) {
                        result = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                    res.render('pages/list', {
                        businesses: businesses,
                        result : result
                    });
                });
        }
        await getyelpA();
    } else {
        async function getyelp(lat, lng) {
            const axios = require('axios');

            await axios.get('https://api.yelp.com/v3/businesses/search', {
                headers: {
                    Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
                },
                params: {
                    term: req.query.keyword,
                    location: req.query.location,
                    categories: cat,
                    radius: req.query.distance * 1600,
                    // Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
                }
            })
                .then(function (responsejson) {
                    recData = responsejson.data;
                    var businessList = recData.businesses;
                    for(let i = 0; i < businessList.length; i++){
                        var cur = businessList[i];
                        businesses.push({id: cur.id, image: cur.image_url, name: cur.name, rating: cur.rating, distance: Math.round((cur.distance/1600)*100)/100});
                    }
                    if (businessList.length != 0) {
                        result = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                    res.render('pages/list', {
                        businesses: businesses,
                        result : result
                    });
                });
        }
        await getyelp();
    }
});


app.all('/yelpDetail', async function (req, res, next) {
    // next();

    var business = {name : 'TestName1', status : 'status1', category : 'category1', address : 'address1', phone : 'phone1', transaction : 'transaction1', price : 'price1', more : 'more1', img1 : 'https://s3-media1.fl.yelpcdn.com/bphoto/HCv9Ufyr2MO89a7QcG6qxw/o.jpg', img2 : 'https://s3-media3.fl.yelpcdn.com/bphoto/HDVa7h51MZ3C2VyPlUl6-w/o.jpg', img3 : 'https://s3-media3.fl.yelpcdn.com/bphoto/uh5frqyB_8YT7_m3K_UDCA/o.jpg'}
    async function getyelpD(id) {
        const axios = require('axios');
        await axios.get('https://api.yelp.com/v3/businesses/' + id, {
            headers: {
                Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
            }
        })
            .then(function (responsejson) {
                // console.log(responsejson);
                recData = responsejson.data;
                business.name = recData.name;
                if (recData.hours[0].is_open_now){
                    business.status = "Open";
                } else {
                    business.status = "Closed";
                }
                var catList = recData.categories;
                var cat = "";
                for(let i = 0; i < catList.length; i++) {
                    var cur = catList[i].title;
                    if(cat == ""){
                        cat = cat + cur;
                    } else {
                        cat = cat + " / " + cur;
                    }
                }
                business.category = cat;
                var addList = recData.location.display_address;
                var add = "";
                for(let i = 0; i < addList.length; i++) {
                    var cur = addList[i];
                    add = add + " " + cur;
                }
                business.address = add;
                business.phone = recData.phone;
                var tranList = recData.transactions;
                var tran = "";
                for(let i = 0; i < tranList.length; i++) {
                    var cur = tranList[i];
                    tran = tran + " / " + cur;
                }
                business.transaction = tran;
                business.price = recData.price;
                business.more = recData.url;
                var imgList = recData.photos;
                for (let i = 0; i < Math.min(3, imgList.length); i++){
                    if (i == 0){
                        business.img1 = imgList[i];
                    }
                    if (i == 1){
                        business.img2 = imgList[i];
                    }
                    if (i == 2){
                        business.img3 = imgList[i];
                    }
                }

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                res.render('pages/about', {
                    business : business
                });
                // always executed
            });
    }
    await getyelpD(req.query.id);
});


app.all('/yelpReview', async function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.header("X-Powered-By", ' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    // // next();

    async function getyelpR(id) {
        const axios = require('axios');
        await axios.get('https://api.yelp.com/v3/businesses/' + id + "/reviews", {
            headers: {
                Authorization: "Bearer ZbjkBbxafTGHh_2rswZKyFcHR0cXdRuZE_WG72or9mkhPN228xUqqVSjR4c_L2YBRFrV6l2aNKszjV0ZZeMpIKVGeHzNUfvGGCNjzI9UkqNPUSeGleLjnYo5dkJAY3Yx"
            }
        })
            .then(function (responsejson) {
                console.log(responsejson);
                // res.send(responsejson.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    await getyelpR(req.query.id);
});


app.listen(port, () => {
    console.log(`Example app listening at http://${localhost}:${port}/`)
})