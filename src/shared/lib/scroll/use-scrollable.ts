'use client';

import React, { RefObject, useRef, useEffect } from 'react';

export const useScrollable = (
	containerRef: RefObject<HTMLDivElement | null>,
	easeFactor = 0.2
) => {
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeftRef = useRef(0);

	const currentScroll = useRef(0);
	const targetScroll = useRef(0);
	const isAnimating = useRef(false);
	const animationFrame = useRef<number | null>(null);

	const animateScroll = () => {
		if (!containerRef.current) return;

		currentScroll.current +=
			(targetScroll.current - currentScroll.current) * easeFactor;
		containerRef.current.scrollLeft = currentScroll.current;

		if (Math.abs(targetScroll.current - currentScroll.current) > 0.5) {
			animationFrame.current = requestAnimationFrame(animateScroll);
		} else {
			containerRef.current.scrollLeft = targetScroll.current;
			isAnimating.current = false;
		}
	};

	const updateAnimation = () => {
		if (!isAnimating.current) {
			isAnimating.current = true;
			animateScroll();
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		isDragging.current = true;
		startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
		scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
		currentScroll.current = containerRef.current?.scrollLeft || 0;
		targetScroll.current = currentScroll.current;
		if (animationFrame.current) {
			cancelAnimationFrame(animationFrame.current);
			animationFrame.current = null;
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging.current || !containerRef.current) return;
		e.preventDefault();
		const x = e.pageX - (containerRef.current.offsetLeft || 0);
		const walk = (x - startX.current) * 1.5;
		targetScroll.current = scrollLeftRef.current - walk;
		updateAnimation();
	};

	const handleMouseUp = () => {
		isDragging.current = false;
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		isDragging.current = true;
		startX.current =
			e.touches[0].clientX - (containerRef.current?.offsetLeft || 0);
		scrollLeftRef.current = containerRef.current?.scrollLeft || 0;
		currentScroll.current = containerRef.current?.scrollLeft || 0;
		targetScroll.current = currentScroll.current;
		if (animationFrame.current) {
			cancelAnimationFrame(animationFrame.current);
			animationFrame.current = null;
		}
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging.current || !containerRef.current) return;
		const x = e.touches[0].clientX - (containerRef.current.offsetLeft || 0);
		const walk = (x - startX.current) * 1.5;
		targetScroll.current = scrollLeftRef.current - walk;
		updateAnimation();
	};

	const handleTouchEnd = () => {
		isDragging.current = false;
	};

	const handleWheelScroll = (e: React.WheelEvent) => {
		if (containerRef.current) {
			targetScroll.current = containerRef.current.scrollLeft + e.deltaY;
			updateAnimation();
		}
	};

	const scrollToElement = (element: HTMLElement) => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const elementLeft = element.offsetLeft;
		const elementWidth = element.offsetWidth;
		const containerWidth = container.clientWidth;
		const maxScroll = container.scrollWidth - containerWidth;

		let newScrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;

		newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScroll));

		if (
			elementLeft < container.scrollLeft ||
			elementLeft + elementWidth > container.scrollLeft + containerWidth
		) {
			targetScroll.current = newScrollLeft;
			updateAnimation();
		}
	};

	const scrollToEnd = () => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const maxScroll = container.scrollWidth - container.clientWidth;

		if (maxScroll <= 0) return;

		targetScroll.current = maxScroll;
		updateAnimation();
	};

	useEffect(() => {
		return () => {
			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current);
			}
		};
	}, []);

	return {
		containerRef,
		handleMouseDown,
		handleMouseMove,
		handleMouseUp,
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,
		handleWheelScroll,
		scrollToElement,
		scrollToEnd,
	};
};
