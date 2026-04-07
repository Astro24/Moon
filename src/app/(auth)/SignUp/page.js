export default function SignUp() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 h-1/3 md:h-full bg-[#3F3F4F] flex items-center justify-center">
        <img
          src="/logoLight.svg"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mt-5 bg-white">
        <div className="w-[90%] md:w-[380px] flex flex-col gap-4">
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
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="User Name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Email</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">Remember me</span>
          </div>

          <button className="bg-black text-white py-2 rounded-md w-full">
            Sign Up
          </button>

          <button className="border py-2 rounded-md w-full flex items-center justify-center gap-2">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}