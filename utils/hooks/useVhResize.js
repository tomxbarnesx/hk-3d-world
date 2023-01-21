import { useEffect } from 'react';
import throttle from "lodash.throttle";

export default function useVhResize() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = throttle(() => {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			}, 700)

			window.addEventListener("resize", handleResize);
			
			handleResize();

			return () => {
				document.documentElement.style.removeProperty('--vh');
				window.removeEventListener("resize", handleResize);
			}
		}
	}, [])
}
