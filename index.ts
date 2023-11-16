import express, {Express, Request, Response} from 'express';
import { config } from 'dotenv';
config()

const PORT = process.env.PORT
const app:Express = express()

app.get('/status', (req:Request, res:Response) => {
    res.json({status: 'Watchtower is watching this container and making automatic updates!'})
})

app.listen(PORT, () => console.log('App started on port', PORT))