import { Router } from 'express'

import
{
    leerPlaylists, leerPlaylist, crearPlaylist, actualizarPlaylist,
    eliminarPlaylist, leerCanciones, crearCancion, actualizarCancion,
    eliminarCancion, leerPlaylists
}from '../controllers/playlists.controllers'

const router = Router()

router.get('/lists', leerPlaylists)

router.get('/lists/:nombre', leerPlaylist)

router.get('/lists/:nombre/canciones', leerCanciones)

router.post('/lists', crearPlaylist)

router.post('/lists/:nombre/canciones', crearCancion)

router.put('/lists/:nombre', actualizarPlaylist)

router.put('/lists/:nombre/canciones/:nombreCancion', actualizarCancion)

router.delete('/lists/:nombre', eliminarPlaylist)

router.delete('/lists/:nombre/canciones/:nombreCancion', eliminarCancion)

export default router