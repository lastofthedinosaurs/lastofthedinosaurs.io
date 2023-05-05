"use client";

import Head from "next/head";
import { variants } from "@catppuccin/palette";


export default function CollorSchemeSwitcher() {
	const changeColorscheme = (e) => {
		document.body.classList = e.target.value.toLowerCase();
	};

	return (
		<>
        <Head>
        <title>Catppuccin + TailwindCSS!</title>
        </Head>
        <div className="container max-w-lg mx-auto transition-colors space-y-2">
        <div className="space-y-2 text-center pt-8">
            <span className="mocha macchiato frappe latte"></span>
            <div className="flex max-w-fit border rounded border-overlay0 items-center mx-auto">
                <span className="rounded-l whitespace-nowrap px-2">
                Current flavour:
                </span>
                <select
                    className="focus:rounded-r focus:ring-pink focus:border-pink bg-overlay0 w-full p-1 text-text"
                    name="colorscheme"
                    onChange={changeColorscheme}
                    >
                    <option>Frappe</option>
                    <option>Latte</option>
                </select>
            </div>
        </div>
        </div>
		</>
	);
}