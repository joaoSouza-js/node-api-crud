import { sql } from "./controller/db";



sql`
    CREATE TABLE videos (
        id TEXT PRIMARY KEY,
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('table created');
    process.exit(0);
}).catch((error) => {
    console.log(error);
    process.exit(1);
});