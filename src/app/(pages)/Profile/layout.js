import NavBar from "@/app/components/profile/NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full">
      <NavBar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
