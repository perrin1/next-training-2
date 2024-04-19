"use client";

import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { Loader } from "../ui/Loader";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const { trigger,isMutating } = useSWRMutation('auth', signOut);
  const { isValidating } = useSWR('auth'); 
  
  const route = useRouter()
  // route.push('/login');
  const handleLogout = () => {
    trigger(null, {
      onSuccess: () => {
        window.location.href = `${window.location.origin}/`;
      },
    });
  };

  return (
    <Button onClick={handleLogout} variant="destructive" disabled={isValidating}>
      {isMutating ? (
        <Loader/>
      ) : (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </>
      )}
    </Button>
  );
};

export default LogOutButton;


