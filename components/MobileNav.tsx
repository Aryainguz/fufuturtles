"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsTelephonePlus } from "react-icons/bs";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="w-full bg-about hidden justify-between items-center h-[13vh] padding-x sm:flex xm:flex md:flex">
				<Link href={"/"}>
					<Image
						src={logo}
						alt="ochi logo"
						width={70}
						height={70}
						className="my-6"
					/>
				</Link>
				<Link href={"/"}>
				<BsTelephonePlus
					className="text-3xl cursor-pointer text-black"
				/>
				</Link>
			</div>
			
		</>
	);
}
