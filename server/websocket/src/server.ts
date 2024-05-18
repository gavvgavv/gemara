import { Server as WebSocketServer } from "socket.io";

class Server {

    constructor(
        private readonly server: WebSocketServer,
        private readonly PORT: string | undefined
    ) {}

    public async bootstrap() {

        this.server.listen(Number(this.PORT), {});
    }
}

export default new Server(
    new WebSocketServer(),
    process.env.SERVER_PORT
);