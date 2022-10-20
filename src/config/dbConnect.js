import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://romulo:12345@alura.3u7w7jg.mongodb.net/alura-node")

let db = mongoose.connection

export default db