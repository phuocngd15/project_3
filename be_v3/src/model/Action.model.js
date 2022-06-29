import mongoose from 'mongoose';

const ActionModelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    {timestamps: true}
);

export const ActionModel = mongoose.model('ActionModel', ActionModelSchema);
