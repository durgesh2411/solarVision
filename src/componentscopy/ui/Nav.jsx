"use client";

import Link from "next/link";
import{ usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path:"/",
    },
    {
        name: "analysis",
        path:"/analysis",
    },
    {
        name: "contact us",
        path:"/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    return(
        <nav className="relative flex gap-x-[2rem] pr-[3rem] black-background -top-[1.25rem]">          { /* this is give equal spacing*/}
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all black-background text-[1.8rem] -top-[1.5rem]`}>
                        {link.name}
                    </Link>
                );
            })}
         </nav>
    );
};


export default Nav
