import express, { Application, Router } from "express";

class Server {
    
    constructor(
        private readonly server: Application,
        private readonly PORT: string | undefined,
    ) {}

    public async bootstrap() {
        this.server.listen(Number(this.PORT), () => console.log(`Server is listening on port ${Number(this.PORT)}`));
    }
}

export default new Server(
    express(),
    process.env.SERVER_PORT
)