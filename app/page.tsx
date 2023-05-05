import { SignIn, SignOut } from "./blog/Actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Form from "./blog/Form";
import { prisma } from "@/server/db";
import Delete from "./blog/Delete";
import { type Session } from "next-auth";

import "../src/styles/home.css"
import CollorSchemeSwitcher from "../src/components/Home"

import { Featured } from "./Featured"
import { Intro } from "./Intro"

async function getPosts() {
  const data = await prisma.posts.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  let session: Session | null | undefined;
  let posts;

  try {
    const [postsRes, sessionRes] = await Promise.allSettled([
      getPosts(),
      getServerSession(authOptions),
    ]);

    if (postsRes.status === "fulfilled" && postsRes.value[0]) {
      posts = postsRes.value;
    } else {
      console.error(postsRes);
    }

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
    <div className="relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <div className="from-mantle to-crust">
          <CollorSchemeSwitcher />
        </div>
        <Intro />
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green text-white">
        <Featured />
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-mauve text-white">
        <h2 className="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-flamingo text-white">
        <h2 className="text-4xl">The Fourth Title</h2>
      </div>
    </div>
    </>
  );
}
