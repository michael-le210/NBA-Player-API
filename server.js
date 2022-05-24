const { response } = require('express')
const { request } = require('express')
const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const player = {
    'russell westbrook': {
        'team':'Lakers',
        'fact': 'The greatest player of all time (aka GOAT)'
    },
    'leborn james': {
        'team':'Lakers',
        'fact': 'This clown is trash. Worst player ever'
    },
    'unknown': {
        'team':'unknown',
        'fact': 'Brah just input Russell Westbrook ^.~'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:playerName', (request, response) => {
    const playerName = request.params.playerName.toLowerCase()
    if  (player[playerName]){
        response.json(player[playerName])
    } else {
        response.json(player['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running ${PORT}`)
})