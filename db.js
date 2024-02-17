const {connect} = require('mongoose')

// conexion base de datos en la nube mongodb atlas user: enriquediazberdonce password: cffpkMam5Xnkp3eD
//const uri = "mongodb+srv://enriquediazberdonce:<password>@cluster0.ssqltov.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
       //await connect('mongodb://localhost/tasksdb')
       await connect('mongodb+srv://enriquediazberdonce:cffpkMam5Xnkp3eD@cluster0.ssqltov.mongodb.net/?retryWrites=true&w=majority')
       console.log('Mongodb connected');
    } catch (error){
        console.error(error);
    }

};

module.exports = { connectDB }
