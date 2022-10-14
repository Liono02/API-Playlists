import express from 'express'

const router = express.Router()

let lists = [
    {
        nombre: "rock",
        descripcion: "Lista de reproduccion sobre canciones de rock",
        canciones: 
        [
            {
                nombreCancion: "wanted_dead_or_alive",
                autor: "bon jovi",
                album: "slippery when wet",
                anio: "1986"
            },
            {
                nombreCancion: "sweet_child_o_mine",
                autor: "guns n' roses",
                album: "appetite for destruction",
                anio: "1987"
            }
        ]
    },
    {
        nombre: "pop",
        descripcion: "Lista de reproduccion sobre canciones de pop",
        canciones: 
        [
            {
                nombreCancion: "Its_Time",
                autor: "imagine dragons",
                album: "evolve",
                anio: "2017"
            },
            {
                nombreCancion: "magic",
                autor: "coldplay",
                album: "ghost stories",
                anio: "2014"
            }
        ]
    },
    {
        nombre: "electronica",
        descripcion: "Lista de reproduccion sobre canciones de electronica",
        canciones: 
        [
            {
                nombreCancion: "faded",
                autor: "alan walker",
                album: "different world",
                anio: "2018"
            },
            {
                nombreCancion: "the_spectre",
                autor: "alan walker",
                album: "the spectre",
                anio: "2017"
            }
        ]
    }
]

//endpoints

router.get('/lists', (req, res) => {
    res.send(lists)
})

router.get('/lists/:nombre', (req, res) => {
    let nombre = req.params.nombre
    let list = lists.find(x => x.nombre == nombre)
    if (list == null) {
        res.status(404).send("404 Not Found")
        return
    }

    res.send(list)
})

router.get('/lists/:nombre/canciones', (req, res) => {
    let nombre = req.params.nombre
    let list = lists.find(x => x.nombre == nombre)
    res.send(list.canciones)
})

router.get('/lists/:nombre/canciones/:nombreCancion', (req, res) => {
    let nombre = req.params.nombre
    let nombreCancion = req.params.nombreCancion
    let list = lists.find(x => x.nombre == nombre)
    let song = list.canciones.find(x => x.nombreCancion == nombreCancion)
    if (song == null || name == null) {
        res.status(404).send("404 Not Found")
    } 
    res.send(song)
})

router.post('/lists', (req, res) => {
    let nombre = req.body.nombre
    let descripcion = req.body.descripcion
    let canciones = req.body.canciones
    if (nombre == null || nombre == '') {
        res.status(400).send("400 Bad Request")
        return
    }

    lists.push({ nombre: nombre, descripcion: descripcion, canciones: canciones })
    res.status(201).send(lists)
})

router.post('/lists/:nombre/canciones', (req, res) => {
    let nombre = req.params.nombre
    let canciones = req.body.canciones
    let nombreCancion = req.body.nombreCancion
    let autor = req.body.autor
    let album = req.body.album
    let anio = req.body.anio
    let list = lists.find(x => x.nombre == nombre)
    if (list == null) {
        res.status(404).send("404 Not Found")
        return
    }

    list.canciones.push({ nombreCancion: nombreCancion, autor: autor, album: album, anio: anio })
    res.status(201).send(canciones)
})

router.put('/lists/:nombre', (req, res) => {
    let nombre = req.params.nombre
    let lNombre = req.body.nombre
    let list = lists.find(x => x.nombre == nombre)
    if (list == null) {
        res.status(404).send("404 Not Found")
        return
    }
    if (lNombre != list.nombre) {
        res.status(409).send("409 Conflict")
        return
    }    
    else
    res.status(204).send(list)     
})

router.put('/lists/:nombre/canciones/:nombreCancion', (req, res) => {
    let nombre = req.params.nombre
    let nombreCancion = req.params.nombreCancion
    let list = lists.find(x => x.nombre == nombre)
    if (list == null) {
        res.status(404).send("404 Not Found")
        return
    }
    let cancion = list.canciones.find(x => x.nombreCancion == nombreCancion)
    if (cancion == null) {
        res.status(404).send("404 Not Found")
    }

    cancion.nombreCancion = req.body.nombreCancion
    cancion.autor = req.body.autor
    cancion.album = req.body.album
    cancion.anio = req.body.anio
    res.send(cancion)
})

router.delete('/lists/:nombre', (req, res) => {
    let nombre = req.params.nombre
    let listToDelete = lists.filter(x => x.nombre == nombre).at(0)
    if (listToDelete == null)
        res.status(404).send("404 Not Found")
        
    let index = lists.indexOf(listToDelete)
    lists.splice(index, 1)
    res.status(204).send("Se elimino la PlayList")
})

router.delete('/lists/:nombre/canciones/:nombreCancion', (req, res) => {
    let nombre = req.params.nombre
    let nombreCancion = req.params.nombreCancion
    let list = lists.find(x => x.nombre == nombre)
    if (list == null) {
        res.status(404).send("404 Not Found")
        return
    }
    let cancion = list.canciones.filter(x => x.nombreCancion == nombreCancion).at(0)
    if (cancion == null) {
        res.status(404).send("404 Not Found")
    }
    let index = list.canciones.indexOf(cancion)
    list.canciones.splice(index, 1)
    res.status(204).send("Se elimino la cancion")
})


export default router