
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';
import { connect } from "./utils/database.connetction";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb"}));

app.get("/",(req,res, next) =>{
    res.send("<h2> Library Management System API</H2>");
    next();
})

app.listen(PORT, () => {
    logger.info("this is testing");
    logger.error("this is error");
    logger.warn("this is warring");
   logger.info(` Server is up and running on PORT ${PORT}`);
   connect();
});
