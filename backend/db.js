import mysql from "mysql";

// invalid credentials, need to use a .env
export const db = mysql.createConnection({
	host: "localhost",
	user: "hidden",
	password: "hidden",
	database: "blog",
});
