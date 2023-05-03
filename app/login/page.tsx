import { SignIn, SignOut } from "./Actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Image from "next/image";
import { type Session } from "next-auth";


export default async function Home() {
  let session: Session | null | undefined;
  let posts;

  try {
    const [sessionRes] = await Promise.allSettled([
      getServerSession(authOptions),
    ]);

    if (sessionRes.status === "fulfilled") {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">


          
          <div className="flex flex-col items-center justify-center gap-1">
            {session?.user ? (
              <>
                <Image
                  className="w-14 rounded-full"
                  width={64}
                  height={64}
                  src={session.user.image as string}
                  alt={session.user.name as string}
                />
                <SignOut />
              </>
            ) : (
              <SignIn />
            )}
        </div>

      </main>
    </>
  );
}
