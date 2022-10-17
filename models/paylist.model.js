import mongoose from "mongoose"

const playlistSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    contraseña: {
        type: Array,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    roles: {
        type: Array,
        required: false
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario