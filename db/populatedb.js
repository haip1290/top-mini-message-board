const { Client } = require("pg");
require("dotenv").config();

const CREATE_TABLE_QUERY = `CREATE TABLE IF NOT EXISTS messages ( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR (255), text VARCHAR (255), added TIMESTAMP );`;
const INSERT_QUERY = `INSERT INTO messages (username, text, added) VALUES ('haip', 'hello', NOW());`;

const main = async () => {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();

    console.log("Creating table");
    await client.query(CREATE_TABLE_QUERY);
    console.log("Table created succesfully");

    console.log("Insert initial data");
    await client.query(INSERT_QUERY);
    console.log("Data inseerted succesfully");
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
    console.log("done");
  }
};

main();
