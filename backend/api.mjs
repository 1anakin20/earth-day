import express from "express"
import readFile from "./api_files/fileReader.mjs"
import cors from "cors"

const farmData = await readFile('./data/farmData.json')
const postsData = await readFile('./data/postsData.json')

const app = express()
app.use(cors())

app.get('/all', (req, res) => {
    res.json(farmData)
})

// field is key name and type is either asc or desc
app.get('/sort/:field/:type', (req, res) => {
    const sortField = req.params.field
    const sortType = req.params.type
    // To pass deep copy of array of objects
    const returnData = JSON.parse(JSON.stringify(farmData))
    if (validateParams(sortField, sortType)) {
        returnData.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : ((b[sortField] > a[sortField]) ? -1 : 0))
        if (sortType === 'desc') {
            returnData.reverse()
        }
        res.json(returnData)
    } else {
        res.status(404).send("Invalid field or sort type. Sort field must be: farmName, cropType, description, date, address, servingFoodBank, servingFoodBankAddress, capacity, or remainignSpots.Sort type must be either asc or desc.\nSample url: /date/desc")
    }
})

app.get('/post/all', (req, res) => {
    res.json(postsData)
})

app.get('/post/:id', (req, res) => {
    const id = req.params.id
    const returnData = postsData.filter(post => post.id .toString() === id)
    res.json(returnData)
})

app.use((req, res) => {
    res.status(404).send("Sorry can't find that")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})


function validateParams(sortField, sortType) {
    const validField = ["farmName", "cropType", "description", "date", "address", "servingFoodBank", "servingFoodBankAddress", "capacity", "remainingSpots"]
    const validType = ["asc", "desc"]

    return validField.includes(sortField) && validType.includes(sortType);

}



