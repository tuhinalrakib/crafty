import dbConnect from "@/lib/dbConnect";
import clientPromise, { collection } from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const newProduct = await req.json();
    const result = await dbConnect(collection.PRODUCTS).insertOne(newProduct);

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    const products = await dbConnect(collection.PRODUCTS).find({}).toArray(); // সব product fetch

    return new Response(JSON.stringify({ products }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
