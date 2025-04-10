"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Router from "next/router";
import {useRouter} from "next/navigation";


const Nabar = ({ className }: { className?: string }) => {
    const router = useRouter();
  const user = localStorage.getItem("user");
  const role = localStorage.getItem("role");

  console.log("user : " , user);
  console.log("role : " , role);


    const [active, setActive] = useState<string | null>(null);
    function handlerUserLogout (){
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      router.push("/");
    }
  
    return (
      <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
          <Menu setActive={setActive}>
              <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="Home">
              </MenuItem>
              
              </Link>
              <Link href="#features">
              <MenuItem setActive={setActive} active={active} item="Features"></MenuItem>
              
              </Link>

              <Link href="/events">
              <MenuItem setActive={setActive} active={active} item="Events"></MenuItem>
              
              </Link>
            
              <Link href={"/contact"}>
              <MenuItem setActive={setActive} active={active} item="Contact Us">      
              </MenuItem>
              </Link>
              
                {user ? (
                <>
                  {role === "mentor" && (
                  <Link href="/add-event"
                  >
                    <MenuItem setActive={setActive} active={active} item="Add Event"></MenuItem>
                  </Link>
                  )}
                    <button 
                    onClick={handlerUserLogout}
                    className="bg-transparent border-none cursor-pointer"
                    >
                    <MenuItem 
                      setActive={setActive} active={active} item="Logout"
                    ></MenuItem>
                    </button>
                </>
                ) : (
                <Link href="/login">
                  <MenuItem setActive={setActive} active={active} item="Login"></MenuItem>
                </Link>
                )}

             


              {/* <Link href={"/sign-up"}>
              <MenuItem setActive={setActive} active={active} item="Sign Up">      
              </MenuItem>
              </Link>      */}


          </Menu>
      </div>
    )
  }
  
  export default Nabar;
  