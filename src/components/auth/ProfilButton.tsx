import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ButtonIcon } from "@radix-ui/react-icons";
import { getCurrentUser } from "@/lib/session";
import { Button } from "../ui/button";
import LogOutButton from "./LogOutButton";
import Link from "next/link";
import { User2 } from "lucide-react";

const ProfilButton = async () => {
  const session = await getCurrentUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            {session?.name ?? ""}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/">
              <User2 className="mr-2 h-4 w-4" /> Profil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfilButton;
