// app/api/hello/route.ts

import { connectMongo } from "@/utils/database";


const collectionName = "usuario";

export async function GET() {

  const {db} =  await connectMongo();

  const collection =  db.collection(collectionName);

  const list = await collection.find().toArray();

  return new Response(JSON.stringify(list));
}
