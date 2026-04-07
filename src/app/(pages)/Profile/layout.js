import MobileNavBar from "@/app/components/profile/MobileNavBar";
import NavBar from "@/app/components/profile/NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full">
      <NavBar />
      
      <div className="flex-1 bg-[#F5F6FA] "><MobileNavBar />
        {children}
      </div>
    </div>
  );
}
