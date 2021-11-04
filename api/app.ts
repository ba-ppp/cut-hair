import dotenv from "dotenv";
import { connect, connection } from "./src/database/mysql";
import { routes } from "./src/routes/routes";

dotenv.config(); // add environment

connect(); // connect database

routes(); // route
