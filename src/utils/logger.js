import pino from "pino";

const logger = pino({
    transport:{
        target: "pino-pretty",
        options:
        {
           colorize:true,
           translateTime:'SYS: yyyy-mm-dd HH:MM:ss,1',
           ignore:"pid,hostname",
        }
    }
});

logger.info("this is testing");

export default logger;