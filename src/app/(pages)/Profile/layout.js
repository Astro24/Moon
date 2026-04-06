import NavBar from "@/app/components/profile/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex w-full">
        <NavBar />
        {children}
      </main>
    </>
  );
}
