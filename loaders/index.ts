import { ID } from "appwrite";
import { databases } from "../src/lib/appwrite";

const database_id = '67448f23003618f9046f';
const collection_id = '68257eba0039d26363cc'; // Or move this to an env variable

export async function addClientToWaitList(fullName: string, email: string, company?: string) {
    try {
        const response = await databases.createDocument(
            database_id,
            collection_id,
            ID.unique(),
            {
                fullName,
                email,
                company: company || "", // Default to empty string if undefined
            }
        );
        console.log("✅ Successfully added to waitlist:", response);
        return response;
    } catch (error) {
        console.error("❌ Error adding to waitlist:", error);
        throw error;
    }
}

