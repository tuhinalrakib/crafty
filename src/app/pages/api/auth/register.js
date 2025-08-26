import bcrypt from "bcryptjs";

// ডেমো ইউজার স্টোর (NextAuth ফাইলের সাথে শেয়ার করার জন্য global রাখতে হবে)
let users = global.users || [];
global.users = users;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password, image } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, email, image: image || null, password: hashedPassword };
    users.push(newUser);

    return res.status(201).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
