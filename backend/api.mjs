import express from "express"
import readFile from "./api_files/fileReader.mjs"

const data = await readFile('./data/farmData.json')

const app = express()

app.get('/all', (req, res) => {
  res.json(data)
})
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that")
})

app.listen(3000)

