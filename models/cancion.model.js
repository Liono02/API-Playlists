import mongoose from "mongoose"

const cancionSchema = new mongoose.Schema({
    nombreCancion:
        {
            type: String,
            required: true
        },
        autor: 
        {
            type: String,
            required: true
        },
        album:
        {
            type: String,
            required: true
        },
        anio: 
        {
            type: String,
            required: true
        },
},
    {
        collection: 'canciones',
        timestamps: false,
        versionKey: false
    }
)

const Cancion = mongoose.model('Cancion', cancionSchema)

export default Cancion