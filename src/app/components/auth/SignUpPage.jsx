"use client";
import { useRouter } from "next/navigation";

// TODO: Add a button or link to go back to Login page
export default function SignUpComponent() {
  const router = useRouter();

  // REFACTOR: switched from manual onSubmit + e.preventDefault() to
  // React 19 form actions. Less code automatic FormData handling,
  // no need to wire up validation manually. See React 19 docs.
  async function signUp(formData) {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      alert("User already exists, please login");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    // FIX: redirect to /Login after signup so users explicitly authenticate
    // (extra security step instead of auto-logging them in).
    router.push("/Login");
  }

  return (
    <form action={signUp} className="w-[90%] md:w-95 flex flex-col gap-4">
      <h1 className="text-black text-3xl md:text-4xl font-bold">
        Welcome To The Moon
      </h1>

      <h2 className="text-gray-600 text-sm md:text-base">
        Enter your credentials to create an account
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-black text-sm">User Name</label>
        <input
          name="username"
          type="text"
          placeholder="User Name"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-black text-sm">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-black text-sm">Password</label>
        <input
          name="password"
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
        className="bg-black text-white py-2 rounded-md w-full cursor-pointer"
      >
        Sign Up
      </button>

      {/* FIX: was type="submit" which made this trigger the parent <form>
          submission on click Buttons inside a <form> default to "submit"
          unless you explicitly set type="button". */}
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
        Sign Up with Google
      </button>
    </form>
  );
}
