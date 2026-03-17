import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton , ClerkProvider, Show ,SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { FolderOpen, PenBox } from "lucide-react";
import UserMenu from "./user-menu";


const Header = () => {
    return<header className="conatiner mx-auto">
        <nav className="py-6 px-4 flex justify-between items-center">
            <Link href={"/"}>
            <Image src={"/logofinal.png"} alt="Touch grass logo" width={200} height={60}
            className="h-10 w-auto object-contain"
            ></Image>
            </Link>

            <div className="flex items-center gap-4">
                {/*login and other ctas*/}
                 
            <Show when="signed-in">
              <Link href='/dashboard#collections'>
                <Button variant="outline" className="flex items-center gap-2">
                    <FolderOpen size={18}/>
                    <span className="hidden md:inline">Collections</span>
                </Button>
            </Link>
            </Show>

            <Link href='/journal/write'>
                <Button variant="journal" className="flex items-center gap-2">
                    <PenBox size={18}/>
                    <span className="hidden md:inline">Write New</span>
                </Button>
            </Link>

            <Show when="signed-out">
                    <SignInButton forceRedirectUrl = "/dashboard"/>
                    <SignUpButton>
                    <button variant="outline">
                    Login
                    </button>
                </SignUpButton>
             </Show>

            <Show when="signed-in">
                <UserMenu/>
                
            </Show>
            </div>
            
        </nav>


    </header>
};

export default Header;