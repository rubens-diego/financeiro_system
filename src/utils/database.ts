// app/api/hello/route.ts

import { MongoClient } from "mongodb";

const database_url = process.env.MONGO_DATABASE!;
const dbName = "financeiro";
const client = new MongoClient(database_url);

export async function connectMongo() {
  
  await client.connect();

  const db =  client.db(dbName);
  
  
return {db , client }
  
}



 