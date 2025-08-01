import { IDatabaseConfig } from "./IDatabaseConfig";

export const databaseConfig: IDatabaseConfig = {
    "version": "1.0",
    "description": "Configuration for the Electron app database",
    "database": {
        // "name": "app.db",
        "path": "app.db",
        "options": {
        "verbose": true,
        "foreignKeys": true,
        "journalMode": "WAL"
        }
    }
    // ,
    // "tables": [
    //     {
    //     "name": "users",
    //     "columns": [
    //         { "name": "id", "type": "INTEGER", "primaryKey": true, "autoIncrement": true },
    //         { "name": "username", "type": "TEXT", "notNull": true },
    //         { "name": "email", "type": "TEXT", "notNull": true, "unique": true }
    //     ]
    //     }
    // ]
}