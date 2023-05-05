import "@/styles/globals.css";
import logo from "../public/logo-idea.png";
import Image from 'next/image'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html>
	<body className="frappe">
		<nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
			<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            	<div className="text-indigo-500 md:order-1">
               		<Image
                  		src={logo}
                  		alt="Dinosaur skull logo"
                  		/>
            	</div>
            	<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
               		<ul className="flex font-semibold justify-between">
						<li className="md:px-4 md:py-2 text-indigo-500">
							<a href="/">Home</a>
						</li>
						<li className="md:px-4 md:py-2 hover:text-indigo-400">
							<a href="/blog">Blog</a>
						</li>
						<li className="md:px-4 md:py-2 hover:text-indigo-400">
							<a href="#">Gallery</a>
						</li>
						<li className="md:px-4 md:py-2 hover:text-indigo-400">
							<a href="#">About</a>
						</li>
						<li className="md:px-4 md:py-2 hover:text-indigo-400">
							<a href="#">Contact</a>
						</li>
               		</ul>
           		</div>
            	<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
               		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                  		<ul className="flex font-semibold justify-between">
                     		<li className="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="/login">Login</a>
							</li>
                     		<li className="md:px-4 md:py-2 hover:text-indigo-400">
								<a href="#">Sign up</a>
							</li>
                  		</ul>
               		</div>
            	</div>
         	</div>
      	</nav>
    	{children}
   	</body>
</html>
  );
}
