import { Client, Account, Databases, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_ProjectID}`);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export default client;

export { ID };
