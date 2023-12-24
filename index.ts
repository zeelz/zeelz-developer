import express, {Express, Request, Response} from 'express';
import { config } from 'dotenv';
config()

const PORT = process.env.PORT
const app:Express = express()

app.get('/status', (req:Request, res:Response) => {
    res.json({status: 'Trying out conventional commits'})
})

app.listen(PORT, () => console.log('App started on port', PORT))