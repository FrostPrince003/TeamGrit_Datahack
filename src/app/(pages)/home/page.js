// pages/index.js
import NavBar from "./navbar";
import Hero from "./hero";
import FeatureOptions from "./options";
import Sidebar from "./sidebar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <main className="container  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-3 ">
      <NavBar />
          <Hero />
          <FeatureOptions />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
