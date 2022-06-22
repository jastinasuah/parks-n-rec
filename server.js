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

app.listen(PORT || process.env.PORT,()=>{
    console.log(`Process is running on port ${PORT}`)
})