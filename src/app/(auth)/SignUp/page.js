"use client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    
    router.push("/Homepage");
  }

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 h-1/3 md:h-full bg-[#3F3F4F] flex items-center justify-center">
        <img
          src="/logoLight.svg"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mt-5 bg-white">
        
      
        <form
          onSubmit={handleSubmit}
          className="w-[90%] md:w-[380px] flex flex-col gap-4"
        >
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Welcome To The Moon
          </h1>

          <h2 className="text-gray-600 text-sm md:text-base">
            Enter your Credentials to access your account
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" required />
            <span className="text-sm">Agree to terms</span>
          </div>

         
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md w-full"
          >
            Sign Up
          </button>

          <button className="border py-2 rounded-md w-full flex items-center justify-center gap-2">
            Login with Google
          </button>
        </form>

      </div>
    </div>
  );
}