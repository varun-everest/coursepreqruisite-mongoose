import mongoose from 'mongoose'; //importing mongoose

const currentInstance =  mongoose.createConnection(
    "mongodb://localhost/testdb",
);
console.log("Successfully connected!!!!!!");
    


export {currentInstance}