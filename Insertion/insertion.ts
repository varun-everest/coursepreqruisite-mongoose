import csvParser  from 'csv-parser';
import fs, { read } from 'fs';
import { courseModel } from '../Collections/courseprereq';
import { Course } from '../MyTypes/type';

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

export const insertData = async(data: any[]) => { 
    await courseModel.deleteMany();
   for(let ele of data){
        const courseExists = await courseModel.findOne({name : ele.name});
        if(!courseExists) {
            const newCourse = await courseModel.create({ courseLevel: ele.courseLevel, name : ele.name });
            if(ele.prerequisite) {
                const pre =await courseModel.findOne({ name:ele.prerequisite });
                if(pre){
                    newCourse.prerequisite.push(pre._id);
                    pre.prerequisite.forEach(val => {
                        newCourse.prerequisite.push(val);
                    });
                }
            await newCourse.save();
         }
        }
    }
   console.log("Inserted");
   const dat: any[] = await courseModel.find();
   console.log(dat);
}