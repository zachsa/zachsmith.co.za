import { createServer } from "http"
import server from './pons.js'
import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  host: '172.18.0.1',
  port: 54320,
  user: 'postgres',
  database: 'test',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

server.use(async (request, response) => {
  try {
    console.log('request received')
    const r = await pool.query('insert into public.ints values (2), (6);')
    console.log('db insert result', r)
    const result = await pool.query('select * from public.ints;')
    console.log('db select result', result)
    response.write(JSON.stringify(result.rows)) 
  } catch (error) {
    console.log('oops', error)
  }
})

server.listen(5000)