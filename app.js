import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const port = 3012
const router = new Router()
const app = new Application()


app.use(router.routes())

router.get('/', ({response})=>{
    response.body = 'hello'
})


console.log("Server started on port " + port);
await app.listen({ port })
