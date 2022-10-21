import expenses from '../models/Expense.js'

class ExpenseController {

    static getAllExpense = (req, res) =>{
        expenses.find((err, expenses)=>{
            res.status(200).json(expenses)
        })
    }
    static getExpenseById = (req, res) =>{
        const id = req.params.id;

        expenses.findById(id , (err , expenses)=>{
            if(err){
                res.status(400).send({message: err.message})
            }else{
                res.status(200).json(expenses)
            }
        })
    }
    static registerExpense = (req, res) =>{
        let expense = new expenses(req.body);

        expense.save((err)=>{
            if(err){
                res.status(500).send({message: "falha ao cadastra a despesa"});
            }else{
                res.status(200).send({message: "sucesso ao cadastra a despesa"});
            }
        })
    }
    static updateExpense = (req, res) =>{
        const id = req.params.id;

        expenses.findByIdAndUpdate(id, {$set: req.body},(err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "dados das despesas atualizado com sucesso"})
            }
        })
    }
    static deleteExpense = (req, res)=>{
        const id = req.params.id

        expenses.findByIdAndDelete(id, (err)=>{
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send({message: "A despasa foi deletada com sucesso"})
            }
        })
    }
}

export default ExpenseController;