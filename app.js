import express, { json } from 'express'

import morgan from 'morgan'

import 'dotenv/config'

import PlaylistsRoutes from './routes/Playlists.routes'

//crea la aplicacion 
const app = express()

const port = process.env.PORT || 3000

//lee el body en formato json
app.use(json())

app.use(morgan('dev'))

app.use(PlaylistsRoutes)

app.listen(port, () => {
    console.log(`PORT: ${port}`)
})