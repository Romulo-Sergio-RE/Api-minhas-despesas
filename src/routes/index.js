import express from 'express'
import expense from './expensesRoutes.js'

const routes = (app)=>{
    app.route("/").get((req, res)=>{
        res.status(200).send({titulo: "api minhas despesas"})
    })
    app.use(
        express.json(),
        expense,
    )
}

export default routes;