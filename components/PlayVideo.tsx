"use client";
import Image from "next/image";
import { eyes } from "@/public";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function PlayVideo({ videosrc }: { videosrc: string }) {
	const [rotate, setRotate] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		});
	}, []);
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);
	return (
		<div
			className="w-full relative overflow-hidden cursor-pointer"
			ref={container}
			onClick={togglePlay}>
			<div
				className="w-full h-full"
				data-scroll
				data-scroll-speed="-.8"
				data-scroll-section>
				<video
					className="w-full h-full"
					loop
					ref={videoRef}
					src={videosrc}
					autoPlay={true}
					muted
				/>
				<motion.div
					className={`w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center ${
						isPlaying && "hidden"
					}`}
					style={{ y: mq }}>
				
				</motion.div>
			</div>
		</div>
	);
}
