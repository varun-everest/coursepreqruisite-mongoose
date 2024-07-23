import csvParser  from 'csv-parser';
import fs, { read } from 'fs';
import { courseModel } from '../Collections/courseprereq';

courseModel;  //creating the course model

export const readCSV = <T>(filePath: string): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      const results: T[] = [];
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results as T[]))
        .on('error', (error: any) => reject(error));
    });
};

export const insertData = (data: any[]) => {
    
}