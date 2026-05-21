import { useState } from "react";
import { loginStudent } from "../services/api";

function Login() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const data = await loginStudent(
        username,
        password
      );

      if (data.success) {

        localStorage.setItem(
          "student",
          JSON.stringify(data)
        );

        window.location.reload();

      } else {

        alert("Invalid credentials");

      }

    } catch (error) {

      console.error(error);

      alert("Server error");

    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">

      <div className="bg-slate-800 p-10 rounded-2xl w-96">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Student Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 rounded-lg mb-4 text-black"
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-6 text-black"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-3 rounded-lg"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;