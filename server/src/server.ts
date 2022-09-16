import express  from 'express'

//criar a aplicação
const app = express()

//primeira rota
//parametros: rota a ser acessada e método que será executado
app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, nome: "Materia 1"},
        {id: 2, nome: "Materia 2"},
        {id: 3, nome: "Materia 3"}
    ])
})

app.listen(3333)