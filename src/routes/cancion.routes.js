import { Router } from 'express'
import {
    leerCanciones, leerCancion, crearCancion,
    actualizarCancion, eliminarCancion
} from '../controllers/cancion.controllers'

const router = Router()

router.get('/canciones', leerCanciones)

router.get('/canciones/:nombreCancion', leerCancion)

router.post('/canciones', crearCancion)

router.put('/canciones/:nombreCancion', actualizarCancion)

router.delete('/cancion/:nombreCancion', eliminarCancion)

export default router