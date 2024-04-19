"use client";
import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { Loader } from "../ui/Loader";

const LoginButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button variant="default" onClick={() => startTransition(() => signIn())}>
       {isPending ? <Loader /> : 'Log In' } 
    </Button>
  );
};

export default LoginButton;
