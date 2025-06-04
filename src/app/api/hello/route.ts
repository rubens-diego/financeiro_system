// app/api/hello/route.ts

import { connectMongo } from "@/utils/database";


const collectionName = "gastos";

export async function GET() {

  const {db} =  await connectMongo();

  const collection =  db.collection(collectionName);

  const list = await collection.find({categoria: "Alimentación",}).toArray();

  return new Response(JSON.stringify(list));
}
