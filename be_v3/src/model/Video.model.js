import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        modelName: {
            type: String,
        },
        actions: [
            {
                type: String,
            }
        ]
    },
    {timestamps: true}
);

export const VideoModel = mongoose.model('VideoModel', VideoSchema);
