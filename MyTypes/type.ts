import { Schema } from 'mongoose';

enum CourseLevel {
    SSC = "ssc",
    Inter = 'inter',
    Degree = 'degree',
    Engineering = 'engineering',
    PG = 'pg'
}
const allCourses = {
    [CourseLevel.SSC]: [ 'ssc' ],
    [CourseLevel.Inter] : ['MPC','BiPC','CEC','MEC'],
    [CourseLevel.Degree] : ['BCom','BSc','BE'],
    [CourseLevel.Engineering] : ['CSE','EEE','ECE', 'CE'],
    [CourseLevel.PG] : ['Arts']
}

export {CourseLevel, allCourses};