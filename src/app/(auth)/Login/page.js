"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const email = form.email.value;
    const password = form.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      router.push("/Homepage");
    } else {
      alert("Invalid email or password");
    }
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
          <h1 className="text-black text-6xl md:text-4xl font-bold">
            Welcome Back!
          </h1>

          <h2 className="text-gray-600 text-4xl md:text-base">
            Enter your Credentials to access your account
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-black text-2xl">Email</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Password"
              required
            />
            <Link href="/ForgotPass" className="text-blue-500 text-sm text-right">
              Forgot Password?
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">Remember me</span>
          </div>

          <button
            type="submit"
            className="bg-[#3F3F4F] text-white py-2 rounded-md w-full"
          >
            Login
          </button>
          
          <button className="border py-2 rounded-md w-full flex items-center justify-center gap-2">
            <svg aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
          <p className="text-sm text-center">
            Don't have an account?{" "}
            <Link href="/SignUp" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}