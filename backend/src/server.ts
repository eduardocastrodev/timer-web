// REQUISIÇÃO -> ME RETORNA ENDEREÇO USUÁRIO
// GET https://api.meusite.com/rota-de-endereco/123

// RESPOSTA -> RETORNA UM OBJETO NO FORMATO JSON
/*
{
  "id": 321,
  "street": "Rua A",
  "city": "Sobral"
}

ROTAS HTTP
- POST
- GET
- PUT
- DELETE

CRUD
C - CREATE
R - READ
U - UPDADE
D - DELETE

*/

import 'express-async-errors';
import express from 'express';

import { errorInterceptor } from './errors/errorInterceptor';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use(errorInterceptor);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
