let projectData = {};

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const cors = require('cors');
app.use(cors());

//defining the path of our static html index

app.use(express.static('index'));

const port = 3030;
const server = app.listen(port , listening);

function listening(){
    console.log('server is running');
    console.log('server is working fing on :' + port);
}

app.get('/all', (req, res) => {
    res.send(projectData);
    console.log(projectData)
    });

let newEntry = {};

app.post('/addData', (req, res) => {

    newEntry ={
    temp : req.body.temp,
    feels : req.body.feels,
    userFeeling : req.body.userFeeling,
    }
    projectData=newEntry;
    // res.send(projectData)
    console.log(projectData)
    });

    
   
        





    




