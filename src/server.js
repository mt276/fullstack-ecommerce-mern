require(`dotenv`).config();
import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

let app = express();
let port = process.env.PORT || 6969;

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log("Backend NodeJS is running on the port: ", port);
});
