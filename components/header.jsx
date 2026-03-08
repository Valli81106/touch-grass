import React from "react";
import Link from "next/link";
import Image from "next/image";

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
            </div>
            
        </nav>


    </header>
};

export default Header;