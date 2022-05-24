//const res = require("express/lib/response")

document.querySelector('button').addEventListener('click', apiResquest)

async function apiResquest() {
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://nba-player-api-mle.herokuapp.com/api/${playerName}`)
        const data = await response.json()
        
        console.log(data)
        document.querySelector('h2').innerText = data.fact
    }catch(error){
        console.log(error)
    }
}
