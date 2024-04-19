import Link from "next/link";
import React from "react";
import { Boxes, LogIn } from "lucide-react";
import { getCurrentUser } from "@/lib/session";
import LogOutButton from "../auth/LogOutButton";
import { ThemeToggle } from "../themes/ThemeToggle";
import LoginButton from "../auth/LoginButton";
import NavButton from "./NavButon";
import { Section } from "./Section";
import ProfilButton from "../auth/ProfilButton";

const NavBar = async () => {
  const users = await getCurrentUser();

  return (
    <header className=" sticky bg-accent/25 border border-b-4  top-0 py-6">
      <Section className="flex items-baseline justify-between ">
        <Link href="/">
          <Boxes />{" "}
        </Link>

        <ul className="flex items-center gap-2 ">
          <Link href="/blog/add">
            <NavButton name="Add content" />
          </Link>
{/* <LogOutButton /> */}
          {users?.email ? <ProfilButton /> : <LoginButton />}
          <ThemeToggle />
        </ul>
      </Section>
    </header>
  );
};

export default NavBar;
