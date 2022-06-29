import mongoose from 'mongoose';

const ModelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        actions: [
            {
                type: String
            }
        ]
    },
    { timestamps: true }
);

export const Model = mongoose.model('Model', ModelSchema);
