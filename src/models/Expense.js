import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        value: {type: Number, required: true},
    }
)

let expenses = mongoose.model("expenses", ExpenseSchema);

export default expenses;