#! /usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 20 ),
    text VARCHAR ( 200 ),
    added VARCHAR ( 200 )
  );

  INSERT INTO messages (username, text, added)
  VALUES
    ('Hriday2406', 'Hi everyone! Welcome to my app <3', 'June 24, 2024 12:30:00'),
    ('Jubin NaughtyLaal', 'Agar Lara Dutta ki shaadi Brian Lara se ho jaye, to shaadi ke baad uska naam kya hoga? XD', 'June 07, 2024 12:30:00'),
    ('Kansaa', 'Meow Meow Meow Meow T_T', 'January 13, 2024 12:30:00'),
    ('Chiaa', 'Chalo guys tum enjoy karo, mai jaa raha hun sone. Good night :)', 'July 01, 2024 12:30:00'),
    ('Model', 'Nikhil Kya bollee hoo!! XD', 'February 12, 2024 12:30:00'),
    ('Body Builder', 'Yaar tu mere se pyaar karti hai ya nahi karti T_T', 'April 26, 2024 12:30:00'),
    ('Cycloid', 'Aaj mai shoulder maar ke aya hun :)', 'December 17, 2024 12:30:00');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  const result = await client.query("SELECT * FROM messages;");
  console.log(result.rows);
  await client.end();
  console.log("done");
}

main();
