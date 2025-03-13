'use client';

import React from 'react';
import { TabsList } from '@/shared/ui';
import { useScrollable } from '@/shared/lib';

interface TabListScrollableContainerProps {
	ref: React.RefObject<HTMLDivElement | null>;
	children: React.ReactNode;
	isMustTouchMove: boolean;
}

export const TabListScrollableContainer = (
	props: TabListScrollableContainerProps
) => {
	const { ref, children, isMustTouchMove } = props;

	const {
		handleMouseUp,
		handleMouseDown,
		handleWheelScroll,
		handleTouchMove,
		handleTouchEnd,
		handleTouchStart,
	} = useScrollable(ref);

	return (
		<TabsList
			ref={ref}
			className="relative flex gap-2 whitespace-nowrap justify-start overflow-hidden"
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseUp}
			onMouseUp={handleMouseUp}
			onWheel={handleWheelScroll}
			onTouchStart={handleTouchStart}
			onTouchMove={(e) => {
				if (!isMustTouchMove) {
					handleTouchMove(e);
				}
			}}
			onTouchEnd={handleTouchEnd}
		>
			{children}
		</TabsList>
	);
};
