import mongoose from "mongoose";

export default async function connectDB(url) {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(url)
        console.log('Mongodb connected')
    } catch (err) {
        console.log(err)
    }
}