//Next import
import { redirect } from "next/navigation";

//Next auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

//Components
import { AuthCard } from "@/components/auth/AuthCard";

export default async function AuthPage() {
  const session = await getServerSession(authOptions);

  //If there is a session the user is redirected to /
  if (session) {
    redirect("/");
  }

  return (
    <section className="md:1/4 mx-auto flex flex-col gap-3 h-[100vh] items-center justify-center">
      <AuthCard />
    </section>
  );
}
