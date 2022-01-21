import config from './config/config';
import app from './express';
import mongoose from 'mongoose';

app.listen(config.port, err => {
    if (err) return console.log(err);
    console.log(`Server started on port ${config.port}`);
});


mongoose.Promise = global.Promise;
mongoose.connect(config.mongo)
    .then(() => console.log('MongoDB connected successfully...'))
    .catch(() => console.log(`Error connecting to MongoDB ${config.mongo}!!!`));