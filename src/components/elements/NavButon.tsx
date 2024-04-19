"use client";
import { FC } from "react";
import { Button } from "../ui/button";

interface NavButtonProps {
    name: string
}
 
const NavButton: FC<NavButtonProps> = ({name}) => {
    return (
        <Button variant="link" > {name} </Button>
      );
}
 
export default NavButton;