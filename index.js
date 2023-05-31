const express  = require('express');
const app = express();

const port = 4000;


app.get('/', (req,res) => {
    res.send('<h1> This is the auto scalling node app aws based </h1> </br> <p> application version 1.0.0 </p>');
});

app.listen(port, () => {
    console.log('auto scalling node app aws based is up and running on port', port);
})