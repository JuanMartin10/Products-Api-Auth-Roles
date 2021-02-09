import { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        title: { type: String },
        category: { type: String },
        price: { type: Number },
        imgUrl: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model('Product', productSchema);
