import http from 'http'

const PORT = 3300;

const rotas={
    '/': 'PRIMEIRA ROTA',
    '/ROTA2': 'ROTA SEGUNDARIA',
    '/ROTA3': 'ROTA DE TESTE'
}

const teste = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

teste.listen(PORT, ()=>{
    console.log('FUNCIONOU PORRA')
})