import { error } from "console";
import { app } from "./app";
import { env } from "./env";

app.listen({
    host: '0.0.0.0',
    port: env.PORT
}).then(() => {
    console.log(`*** SERVER RUNNING AT ${env.PORT} ***`)
}).catch((error) => {
    console.log(error)
})