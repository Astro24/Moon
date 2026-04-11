// TODO: Add a button or link to go back to Login page
export default function ForgotPass() {
  return (
    <div className="w-[90%] md:w-95 flex flex-col gap-4 text-center">
      {/* FIX: heading was "Welcome Back!"  changed to "Forgot Password?" */}
      <h1 className="text-black text-3xl md:text-4xl font-bold">
        Forgot Password?
      </h1>

      <h2 className="text-gray-600 text-sm md:text-base">
        Enter your email to receive a reset link
      </h2>

      <div className="flex flex-col gap-1 text-start">
        <label className="text-black text-sm mx-2">Email</label>
        <input
          type="email"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Email"
          required
        />
      </div>

      <button className="bg-black text-white py-2 rounded-md w-full cursor-pointer">
        Send Message
      </button>
    </div>
  );
}
