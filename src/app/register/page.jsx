"use client";
import registerUser from "../api/auctions/auth/registerUser";

export default function RegisterPage() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.name.value
        const email = form.email.value
        const password = form.password.value
        const payload = { username, email, password }
        const user = await registerUser(payload)
        if(user.acknowledged){
            alert("Success")
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-8 rounded-xl w-96 space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                    name="name"
                />
                {/* <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /> */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    name="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded"
                    name="password"
                />
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                    Register
                </button>
            </form>
        </div>
    );
}
