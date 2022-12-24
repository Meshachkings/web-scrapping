import express from 'express';
import { router } from './routes/scrapping.js'

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/', router);

app.listen(PORT, () => {
    console.log(`running on http://localhost:4000`);
})