const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'leslie knope':{
        'portrayed by':'Amy Poehler',
        'full name': 'Leslie Barbara Knope'
    },
    'ann perkins':{
        'portrayed by':'Rashida Jones',
        'full name': 'Ann Meredith Perkins'
    },
    'ron swanson':{
        'portrayed by':'Nick Offerman',
        'full name': 'Ronald Ulysses "Ron" Swanson'
    },
    'ben wyatt':{
        'portrayed by':'Adam Scott',
        'full name': 'Sir Benjamin "Ben" Wyatt'
    },
    'tom haverford':{
        'portrayed by':'Aziz Ansari',
        'full name': 'Thomas Montgomery "Tom" Haverford (born Darwish Sabir Ismail Gani)'
    },
    'april ludgate':{
        'portrayed by':'Aubrey Plaza',
        'full name': 'April Roberta Ludgate-Dwyer'
    }
    ,
    'jerry gergich':{
        'portrayed by':'Jim O\'\Heir',
        'full name': 'Gerald "Garry" Gergich'
    }
    ,
    'donna meagle':{
        'portrayed by':'Retta',
        'full name': 'Donna Marie Meagle'
    }
    ,
    'jean':{
        'portrayed by':'Ben Schwatz',
        'full name': 'Jean-Ralphio Saperstein'
    }
}

app.get('/',(request,response)=>{
    response.sendFile(__dirname+ '/index.html')
})

app.get('/api/:characterName', (request,response)=>{
    const characterName = request.params.characterName.toLowerCase()
    if (characters[characterName]){
        response.json(characters[characterName])
    }
    else {response.json (characters['jean'])}
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