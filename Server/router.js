const express = require("express")
const router = express.Router()
const db = require("./db")

router.post("/home", async (req, res, next) => {
    try {
        const postReq = await db.query("INSERT INTO todo (content) VALUES ($1)", [req.body.content])        
        res.json("Successful")
    } catch (error) {
        next(error)
    }
})

router.get("/home", async (req, res, next) => {
    try {
        const postReq = await db.query("SELECT * FROM todo")        
        res.json(postReq.rows)
    } catch (error) {
        next(error)
    }
})

router.delete("/home/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        console.log("iddd", id)
        const deleteRequest = await db.query("DELETE FROM todo WHERE id = $1", [id])        
        res.json(deleteRequest)
        
    } catch (error) {
        next(error)
    }
})

router.put("/home/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const { content } = req.body
        const editTodo = await db.query("UPDATE todo SET content = $1 WHERE id = $2", [content, id])
        res.json("Todo was updated")
    } catch (error) {
        next(error)
    }
})
module.exports = router
