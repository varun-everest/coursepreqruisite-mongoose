import { currentInstance } from './connection';
import { readCSV, insertData } from './Insertion/insertion';
import { courseRouter } from './routers/course.router';

import express from 'express';
const app = express();
app.use(express.json());

//const mainRouter = express.Router();

const PORT = 3000;

currentInstance;

const readCSVDataAndInsert = async() => {
    const filePath = './Data/data.csv'
    const readData = await readCSV(filePath);
    console.log(readData);
    insertData(readData);
};
readCSVDataAndInsert();

app.use('/api', courseRouter);

app.use('/api/ping', (req, res)=> {
    res.json({message : "Thank you!!"});
});
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});