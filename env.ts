import 'dotenv/config'


const PGHOST= process.env.PGHOST as string;

const PGDATABASE= process.env.PGDATABASE as string;

const PGUSER= process.env.PGUSER as string;

const PGPASSWORD= process.env.PGPASSWORD as string;

const ENDPOINT_ID= process.env.ENDPOINT_ID as string;

const PORT= process.env.  PORT as number | undefined;

export const  Process = {
    PGHOST,
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
    ENDPOINT_ID,
    PORT
}
