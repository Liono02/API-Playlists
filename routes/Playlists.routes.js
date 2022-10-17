import express from 'express'

const router = express.Router()

import PlayList from '../models/paylist.model'

/*let lists = [
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
]*/

//endpoints

router.get('/lists', async (req, res) => {
    try 
    {
        const list = await PlayList.find()
        res.send(list)
    } catch (err)
    {
        res.status(500).send(err)
    }
})

router.get('/lists/:nombre', async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        const list = await PlayList.findOne({ nombre: nombre })
        res.send(list)
    } catch (err) 
    {
        res.status(500).send(err)
    }
})

router.get('/lists/:nombre/canciones', async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        const list = await PlayList.findOne({ nombre: nombre })
        res.send(list.canciones)
    } catch(err) 
    {
        res.status(500).send(err)
    }
})

router.get('/lists/:nombre/canciones/:nombreCancion', async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        let nombreCancion = req.params.nombreCancion
        const list = await PlayList.findOne({ nombre: nombre })
        let song = await PlayList.canciones.findOne({nombre: nombre, nombreCancion: nombreCancion })
        res.send(song)
    } catch (err)
    {
        res.status(500).send(err)
    }
})

router.post('/lists', async (req, res) => {
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
})

router.post('/lists/:nombre/canciones', async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        const song = req.body
        await PlayList.canciones.create(({nombre: nombre}), song)
        res.status(201).send(canciones)
    } catch(err) 
    {
        res.status(500).send(err)
    }
})

router.put('/lists/:nombre', async (req, res) => {
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
})

router.put('/lists/:nombre/canciones/:nombreCancion', async (req, res) => {
    try 
    {
        let nombre = req.params.nombre
        let nombreCancion = req.params.nombreCancion
        let song = req.body.cancion
        await PlayList.canciones.findOneAndUpdate({nombre: nombre, nombreCancion: nombreCancion }, song)
        const songResponse = await PlayList.canciones.findOne({ nombreCancion: nombreCancion })
        res.send(songResponse)
    } catch (err) 
    {
        res.status(500).send(err)
    }
})

router.delete('/lists/:nombre', async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        await PlayList.findOneAndRemove({ nombre: nombre })
        res.status(204).send()
    } catch (err) 
    {
        res.status(500).send(err)
    }
})

router.delete('/lists/:nombre/canciones/:nombreCancion', async (req, res) => {
    try
    {
        let nombre = req.params.nombre
        let nombreCancion = req.params.nombreCancion
        await PlayList.canciones.findOneAndRemove({nombre: nombre, nombreCancion: nombreCancion})
        res.status(204).send()
    } catch (err) 
    {
        res.status(500).send(err)
    }
})


export default router