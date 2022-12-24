
import scrapeIt from 'scrape-it';
import { Router } from 'express';


const router = Router();

router.get('/', async  (req, res) => {
	const url = "https://www.thenetnaija.net/videos/movies";

	await scrapeIt(url, {
	// desc: ".container h2",
	image: {
        selector: ".thumbnail img", 
		attr: "src"
    },
    title: {
        selector: ".thumbnail img", 
		attr: "alt"
    },
	link: {
        selector: ".info a", 
		attr: "href",
    json: true
    }
}).then(({ data, response }) => {
    console.log(`Status Code: ${response.statusCode}`)
	const list = data;
    console.log(list)


    
	return res.render('index', { results: data });

}).catch((err) => console.error(err))

});


export {router}