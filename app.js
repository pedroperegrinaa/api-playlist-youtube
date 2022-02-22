import express from "express";
import routes from "./routes.js";


class App {
    constructor() {
        this.app = express();
        this.routes();
        this.middlewares();
        console.log('constructor');
    }
    middlewares() {
        console.log('mid');
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        console.log('routes');
        this.app.use('/', routes);
    }

}

export default new App().app;