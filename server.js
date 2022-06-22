const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const pokemon = {
    'pikachu':{
        'type':'electric',
        'next Evolution': 'Raichu'
    },
    'charmander':{
        'type':'fire',
        'next Evolution': 'Charmeleon'
    },
    'ditto':{
        'type':'normal',
        'next Evolution': 'Does not Evolve'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
})

app.get('/api:pokemonName',(request,response)=>{
    const pokemonName = request.params.pokemonName.toLowerCase()
    if (pokemon[pokemonName]){
        response.json(pokemon[pokemonName])
    }
    else {response.json (pokemon['ditto'])}
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

// const express = require('express')
// const app = express()
// const cors = require('cors')
// const PORT = 8000

// app.use(cors())

// const rappers = {
//     '21 savage':{
//         'age': 29,
//         'birthName':'Shéyaa Bin Abraham-Joseph',
//         'birthLocation': 'London, England' 
//     },
//     'chance the rapper':{
//         'age': 29,
//         'birthName':'Chancelor Bennett',
//         'birthLocation': 'Chicago, Illinois' 
//     },
//     'dylan':{
//         'age': 29,
//         'birthName':'Dylan',
//         'birthLocation': 'Dylan' 
//     }
// }

// app.get('/', (request, response)=>{
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/:rapperName', (request,response)=>{
//     const rappersName = request.params.rapperName.toLowerCase()
//     if(rappers[rappersName]){
//         response.json(rappers[rappersName])
//     }else{
//         response.json(rappers['dylan'])
//     }
// })

// app.listen(process.env.PORT || PORT, ()=>{
//     console.log(`The server is running on port ${PORT}! You better go catch it!`)
// })