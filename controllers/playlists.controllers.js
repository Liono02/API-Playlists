import PlayList from '../models/playlist.model'

export const leerPlaylists = async (req, res) => {
    try 
    {
        const list = await PlayList.find()
        res.send(list)
    } catch (err)
    {
        res.status(500).send(err)
    }
}

export const leerPlaylist = async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        const list = await PlayList.findOne({ nombre: nombre })
        res.send(list)
    } catch (err) 
    {
        res.status(500).send(err)
    }
}


export const leerCanciones = async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        const list = await PlayList.findOne({ nombre: nombre })
        res.send(list.canciones)
    } catch(err) 
    {
        res.status(500).send(err)
    }
}

export const crearPlaylist = async (req, res) => {
    try
    {
        const list = req.body
        if (nombre == '') 
        {
            res.status(400).send("400 Bad Request")
            return
        }
        await PlayList.create(list)
        res.status(201).send(list)
    } catch (err) 
    {
        res.status(500).send(err)
    }
}

export const crearCancion = async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        const list = await PlayList.findOne({ nombre: nombre })
        let cancion = req.body
        list.canciones.push(cancion)
        await list.findOneAndUpdate({ nombre: nombre }, list)
        const listResponse = await list.findOne({ nombre: nombre })
        res.send(listResponse)
    } catch(err) 
    {
        res.status(500).send(err)
    }
}

export const actualizarPlaylist = async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        let list = req.body
        await PlayList.findOneAndUpdate({ nombre: nombre }, list)
        if (nombre != list.nombre) 
        {
            res.status(409).send("409 Conflict")
            return
        }    
        const listResponse = await PlayList.findOne({ nombre: nombre })
        res.send(listResponse)       
    } catch (err)
    {
        res.status(500).send(err)
    }     
}

export const actualizarCancion = async (req, res) => {
    try {
        let nombre = req.params.nombre
        let nombreCancion = req.params.nombreCancion
        let cambiosCancion = req.body
        const list = await PlayList.findOne({ nombre: nombre })
        let cancion = list.canciones.find(x => x.nombreCancion == nombreCancion)
        cancion.autor = cambiosCancion.autor
        cancion.album = cambiosCancion.album
        cancion.anio = cambiosCancion.anio
        await list.findOneAndUpdate({ nombre: nombre }, list)
        const listResponse = await list.findOne({ nombre: nombre })
        res.send(listResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const eliminarPlaylist = async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        await PlayList.findOneAndRemove({ nombre: nombre })
        res.status(204).send()
    } catch (err) 
    {
        res.status(500).send(err)
    }
}

export const eliminarCancion = async (req, res) => {
    try {
        let nombre = req.params.nombre
        let nombreCancion = req.params.nombreCancion
        const list = await PlayList.findOne({ nombre: nombre })
        lists.canciones = list.canciones.filter(x => x.nombreCancion != nombreCancion)
        await list.findOneAndUpdate({ nombre: nombre }, list)
        const listResponse = await Usuario.findOne({ email: emailUsuario })
        res.status(204).send(listResponse)
    } catch (err) {
        res.status(500).send(err)
    }
}



