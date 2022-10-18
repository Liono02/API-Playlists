import express, { json } from 'express'

import morgan from 'morgan'

import 'dotenv/config'

import PlaylistsRoutes from './routes/Playlists.routes'

import cancionRoutes from './routes/cancion.routes' 

import database from './database'

const app = express()

const port = process.env.PORT || 3000

app.use(json())

app.use(morgan('dev'))

app.use(PlaylistsRoutes)
app.use (cancionRoutes)

app.listen(port, () => {
    console.log(`PORT: ${port}`)
})