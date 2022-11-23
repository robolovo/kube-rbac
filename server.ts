import express from "express"
import { Application, json, urlencoded }from "express"
import router from "./routes/KubeClientRouter"
import { KubeApiClient } from "./config/KubeApiClient"


const app: Application = express()

app.use(json())
app.use(urlencoded({extended: true}))

KubeApiClient.initKubeApiClients()

app.use('/kubeclient', router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})