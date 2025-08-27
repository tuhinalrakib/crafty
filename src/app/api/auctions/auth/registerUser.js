"use server"

import dbConnect, { collection } from "@/lib/dbConnect";

const registerUser = async (payload) => {
    try {
        const result = await dbConnect(collection.NEXT_USER).insertOne(payload)
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(), // ✅ convert ObjectId → string
        };
    } catch (error) {
        console.log(error)
        return null
    }
};

export default registerUser;