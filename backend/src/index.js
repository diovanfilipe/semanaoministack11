const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 * 
 */

 /**
  * Métodos Http
  * 
  * GET: Buscar/listar informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: alterar alguma informação no back-end
  * DELETE: Deletar alguma informação no back-end
  */


/**
 * Tipos de parâmetros: 
 * 
 * Query:Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params : Parêmetros utilizados para identificar recursos
 * Request Body : Corpo da requisição
 */



app.listen(3333);

