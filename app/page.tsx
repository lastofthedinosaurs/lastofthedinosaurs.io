import { SignIn, SignOut } from "./blog/Actions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import Image from "next/image";
import Form from "./blog/Form";
import { prisma } from "@/server/db";
import Delete from "./blog/Delete";
import { type Session } from "next-auth";

import "../src/styles/home.css"

import { Featured } from "./Featured"

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
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
          <div className="container mx-auto bg-gray-400 h-96 rounded-md flex items-center absolute inset-x-0 top-0">
            <div className="sm:ml-20 text-gray-50 text-center sm:text-left">
                <h1 className="text-5xl font-bold mb-4">
                  LastoftheDinosaurs <br />
                  Personal website
                </h1>
                <p className="text-lg inline-block sm:block">Coming soon.</p>
                <button className="mt-8 px-4 py-2 bg-gray-600 rounded">Read more</button>
            </div>
          </div>
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                  <Image 
                      className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" 
                      src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt=""
                      width={150}
                      height={150}
                      />
                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <p className="text-sm text-blue-500 uppercase">category</p>
                      <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                      All the features you want to know
                      </a>
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                      </p>
                      <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>
                      <div className="flex items-center mt-6">
                        <Image 
                            className="object-cover object-center w-10 h-10 rounded-full" 
                            src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
                            alt=""
                            width={64}
                            height={64}
                            />
                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Jane Doe</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <div className=" text-center space-y-12">
            <div className="text-center text-text font-bold">
                Subscribe for  
                <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                  <span className="animate-word col-span-full row-span-full">Linux</span>
                  <span className="animate-word-delay-1 col-span-full row-span-full">Coding</span>
                  <span className="animate-word-delay-2 col-span-full row-span-full">DevOps</span>
                  <span className="animate-word-delay-3 col-span-full row-span-full">Cannabis</span>
                  <span className="animate-word-delay-4 col-span-full row-span-full">Gaming</span>
                </div>
              content
            </div>
          </div>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
          <Featured />
          <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
          <h2 className="text-4xl">The Third Title</h2>
          <p>Scroll Down</p>
      </div>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
          <h2 className="text-4xl">The Fourth Title</h2>
      </div>
    </div>
    </>
  );
}
