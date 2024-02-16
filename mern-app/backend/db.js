const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:123@cluster0.cahbfl3.mongodb.net/gofoodmern-m?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
    await mongoose.connect(mongoURI).then(() => {
        console.log('Connected to MongoDB');
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
        })
    }).catch((e) => {
        console.log(e.message);
    });
};

module.exports = connectToMongoDB;
