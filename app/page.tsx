//Next auth
import { getServerSession } from "next-auth";

//Next navigation
import { redirect } from "next/navigation";

//Options
import { authOptions } from "@/lib/utils/auth";

//Components
import { LogoutButton } from "@/components/auth/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  //If there is no session, the user is redirected to authentication
  if (!session) {
    redirect("/auth");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogoutButton />
    </main>
  );
}
