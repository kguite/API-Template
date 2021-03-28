const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Sheyaa',
        'birthLocation': 'London'
    },

    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancellor',
        'birthLocation': 'Chicago'

    },

    'Dylan': {
    'age': 28,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
    }
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/rappers/:rapperName', (request, response) =>{
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
        response.json(rappers[rapName])
    }else{
        response.json(rappers['Dylan'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)

})