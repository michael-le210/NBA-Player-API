const res = require("express/lib/response")

document.querySelector('button').addEventListener('click', apiResquest)

async function apiResquest() {
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`localhost:8000/api/${playerName}`)
        const data = await response.json()
        
        console.log(data)
        document.querySelector('h2').innerText = data.fact
    }catch(error){
        console.log(error)
    }
}
