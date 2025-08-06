import pkg from "pg"
import dotenv from "dotenv"


const {Pool} = pkg;

dotenv.config();

const Pool = New Pool({
    user= process.env.PGUSER,
    host=process.env.PGHOST,
    database=process.env.PGDB,
    password=process.env.PGPASSWORD,
    port=process.env.PGPORT
})

Pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err)  
    procces.exit(-1)
})

export default Pool;
