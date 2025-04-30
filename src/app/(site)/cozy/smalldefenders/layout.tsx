
import { Footer } from "@/components/global/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  
    
    return (
      <div>
    <Navbar/>
    <div
    className="min-h-screen w-full flex flex-col items-center justify-center  bg-center  p-4"
    style={{ backgroundImage: "url('/images/smalldefenders-bg.png')" }}
  >
          {children}
          </div>
       <Footer/>
    
         
    </div>
  );
}
