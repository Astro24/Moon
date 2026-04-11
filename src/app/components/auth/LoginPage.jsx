"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPageComponent() {
  const router = useRouter();

  // REFACTOR: switched from manual onSubmit + e.preventDefault() to
  // React 19 form actions. Less code, automatic FormData handling,
  // no need to wire up validation manually. See React 19 docs.
  async function login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      // FIX: route was "/HomePage" but the actual home page is at "/".
      router.push("/");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <form action={login} className="w-[90%] md:w-95 flex flex-col gap-4">
      <h1 className="text-black text-3xl md:text-4xl font-bold">
        Welcome Back!
      </h1>

      <h2 className="text-gray-600 text-sm md:text-base">
        Enter your credentials to access your account
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-black text-sm">Email</label>
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
        className="bg-[#3F3F4F] text-white py-2 rounded-md w-full cursor-pointer"
      >
        Login
      </button>

      <button
        type="button"
        className="border py-2 rounded-md w-full flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg
          aria-label="Google logo"
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>

      <p className="text-sm text-center">
        Don&apos;t have an account?{" "}
        <Link href="/SignUp" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
