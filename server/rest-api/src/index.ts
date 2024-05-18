import dotenv from "dotenv";
dotenv.config();

import server from "./server";

server.bootstrap()
.then(() => {
    console.log(`Successfully running the server!`);
})
.catch((error) => {
    console.error(error, `Something went wrong...`);
    process.exit(1);
});