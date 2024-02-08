import mongoose, { connection } from "mongoose";
import config from "../config";
import logger from "./logger";

let database;

const  connect = async () =>
{
    const MONGODB_URL = config.DB_CONNECTION_STRING;

    if (database) return ;

    mongoose.connect(MONGODB_URL)
    .then((connection) => {
        database = connection;
        logger.info("database synced");
    })
    .catch((err) => {
        logger.error(err.message);
    })
} 
export { connect};