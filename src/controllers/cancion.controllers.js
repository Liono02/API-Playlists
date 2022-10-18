import Cancion from '../models/cancion.model'
import PlayList from '../models/playlist.model'

export const leerCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find()
        res.send(canciones)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const leerCancion = async (req, res) => {
    try {
        let nombreCancion = req.params.nombreCancion
        const cancion = await PlayList.findOne({ nombre: nombreCancion })
        res.send(cancion)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const crearCancion = async (req, res) => {
    try {
        const cancion = req.body
        await PlayList.create(cancion)
        res.status(201).send(cancion)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const actualizarCancion = async (req, res) => {
    try {
        let nombreCancion = req.params.nombreCancion
        let cancion = req.body
        await PlayList.findOneAndUpdate({ nombre: nombreCancion }, cancion)
        const cancionResponse = await PlayList.findOne({ nombre: nombreCancion })
        res.send(cancionResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarCancion = async (req, res) => {
    try {
        let nombreCancion = req.params.nombreCancion
        await PlayList.findOneAndRemove({ nombre: nombreCancion })
        res.status(204).send()
    } catch (err) {
        res.status(500).send(err)
    }
}