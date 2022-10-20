import express from 'express'
import expenses from './expensesRoutes.js'

const routes = (app)=>{
    app.route("/").get((req, res)=>{
        res.status(200).send({titulo: "api minhas despesas"})
    })
    app.use(
        express.json(),
        expenses,
    )
}

export default routes;