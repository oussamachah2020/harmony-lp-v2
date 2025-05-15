import { Client, Databases } from "appwrite";


const client = new Client()
.setEndpoint(import.meta.env.PUBLIC_APPWRITE_ENDPOINT)
.setProject(import.meta.env.PUBLIC_APPWRITE_PROJECT_ID)

export const databases = new Databases(client);
