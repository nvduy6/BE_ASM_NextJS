import mongoose, { ObjectId } from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1
    },
}, { timestamps: true })

export default mongoose.model('Product', productSchema);