const MongoClient = require ('mongoose');
const mongoURI = 'mongodb+srv://gofood:123@cluster0.cahbfl3.mongodb.net/?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
   await MongoClient.connect(mongoURI);
        console.log('Connected to MongoDB');
};

module.exports =  connectToMongoDB;
