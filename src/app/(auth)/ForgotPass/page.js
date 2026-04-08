export default function ForgotPass() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 h-1/3 md:h-full bg-[#3F3F4F] flex items-center justify-center">
        <img
          src="/logoLight.svg"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white mt-5">
        <div className="w-[90%] md:w-[380px] flex flex-col gap-4">
          <h1 className="text-black text-3xl md:text-4xl font-bold">
            Welcome Back!
          </h1>

          <h2 className="text-gray-600 text-sm md:text-base">
            Enter Email To Receive Auth Message
          </h2>

          <div className="flex flex-col gap-1">
            <label className="text-black text-sm">Email</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Email"
            />
          </div>

          <button className="bg-black text-white py-2 rounded-md w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}