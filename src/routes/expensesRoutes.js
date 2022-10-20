import express from 'express';
import ExpenseController from '../controllers/expenseController.js';

const router = express.Router();

router
    .get("/expense", ExpenseController.getAllExpense)
    .get("/expense/:id", ExpenseController.getExpenseById)
    .post("/expense", ExpenseController.registerExpense)
    .put("/expense/:id", ExpenseController.updateExpense)
    .delete("/expense/:id", ExpenseController.deleteExpense)

export default router;