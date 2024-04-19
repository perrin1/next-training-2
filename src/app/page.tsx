 

import NavBar from "@/components/elements/NavBar";
import { Spacing } from "@/components/elements/Spacing";
import { getCurrentUser } from "@/lib/session";
 

export default async function Home() {
  const users = await getCurrentUser();
  
  console.log(users);

  return (
    <>
      <NavBar />
      <Spacing size="md" />
             <Spacing size="md" />
     
    </>
  );
}
