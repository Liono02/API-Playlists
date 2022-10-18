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
    canciones: {
        type: Array,
        required: false,
    }
},
    {
        collection: 'playlists', 
        timestamps: true,
        versionKey: false
    }
)

const PlayList = mongoose.model('Playlist', playlistSchema)

export default PlayList