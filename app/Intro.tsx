import "@catppuccin/palette";
import Image from "next/image";

export const Intro = () => {
  return (
    <>
    <div id="card" className="from-mantle to-crust outline-pink">
      <h1 className="from-pink to-mauve">Catppuccin</h1>
      <p className="text-subtext0">Soothing pastel theme for TailwindCSS</p>
      <div id="palette">
        <div className="bg-rosewater"></div>
        <div className="bg-flamingo"></div>
        <div className="bg-pink"></div>
        <div className="bg-mauve"></div>
        <div className="bg-red"></div>
        <div className="bg-maroon"></div>
        <div className="bg-peach"></div>
        <div className="bg-yellow"></div>
        <div className="bg-green"></div>
        <div className="bg-teal"></div>
        <div className="bg-sky"></div>
        <div className="bg-sapphire"></div>
        <div className="bg-blue"></div>
        <div className="bg-lavender"></div>
      </div>
      <a href="https://github.com/nekowinston/catppuccin-tailwindcss">
        <button className="bg-lavender hover:bg-mauve active:bg-mauve/75">
          Install!
        </button>
      </a>
      <br></br>
      <div className="text-center text-text font-bold">
        Subscribe for
        <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
          <span className="animate-word col-span-full row-span-full">Linux</span>
          <span className="animate-word-delay-1 col-span-full row-span-full">Coding</span>
          <span className="animate-word-delay-2 col-span-full row-span-full">DevOps</span>
          <span className="animate-word-delay-3 col-span-full row-span-full">Gaming</span>
          <span className="animate-word-delay-4 col-span-full row-span-full">More</span>
        </div>
        content
      </div>
    </div>
    <div className="w-90 from-mantle to-crust bg-gradient-to-b p-6 rounded-3xl flex flex-col justify-center items-center outline-pink outline-2 shadow-xl">
      <div className="container px-6 py-10 mx-auto">
          <h1 className="font-black text-5xl lg:text-6xl mb-4 bg-gradient-to-r bg-clip-text text-transparent from-pink to-mauve">From the blog</h1>
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
    </div>
    </>
  );
};