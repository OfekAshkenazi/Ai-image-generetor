import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)


async function runServer() {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(3030, () => console.log('server is runing on 3030'))
    } catch (err) {
        console.log(err)
    }
}
runServer()


app.get('/', async (req, res) => {
    res.send('hello ofek your server is working')
})
