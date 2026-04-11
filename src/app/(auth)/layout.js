// Shared layout for all auth pages (Login, SignUp, ForgotPass)
// Left panel renders here so each page only needs to render its form
export default function LoginLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 h-1/3 md:h-full bg-[#3F3F4F] flex items-center justify-center">
        <img src="/logoLight.svg" className="w-full max-w-100 object-contain" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        {children}
      </div>
    </div>
  );
}
