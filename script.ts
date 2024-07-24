import { currentInstance } from './connection';
import { readCSV, insertData } from './Insertion/insertion';

currentInstance;

const readCSVDataAndInsert = async() => {
    const filePath = './Data/data.csv'
    const readData = await readCSV(filePath);
    console.log(readData);
    insertData(readData);
};
readCSVDataAndInsert();
