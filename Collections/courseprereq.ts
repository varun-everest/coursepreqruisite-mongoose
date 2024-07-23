import  {Schema} from 'mongoose';
import { CourseLevel, allCourses } from '../MyTypes/type';
import { currentInstance } from '../connection';

const courseSchema = new Schema ({
    courseLevel : {
        type: String,
        enum: Object.values(CourseLevel),
        required: true
    },
    name : {
        type : String,
        unique : true
    },
    prerequisite : [{
        type : Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const courseModel =  currentInstance.model('Course', courseSchema);
console.log("succesfully created model");

export { courseModel};
