"use server";
import { connectMongo } from "@/utils/database";

const collectionName = "usuario";

export async function loginaction(usuario: string , password: string)  : Promise< {
 usuario:  string,
  senha:  string,
  nome:  string,
  ativo: boolean,
  email:  string,

} | null >{
  const { db } = await connectMongo();

  const collection = db.collection(collectionName);

  const list = await collection.findOne({
    usuario: usuario,
    senha: password,
    
  });


  console.log(list)

  if(!list) return null



  return {
    usuario:  list.usuario,
  senha:  list.senha,
  nome:  list.nome,
  ativo: list.ativo,
  email:  list.email,
  };
}
