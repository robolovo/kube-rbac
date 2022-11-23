import express from "express"
import {Application}from "express"

const app: Application = express()


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})