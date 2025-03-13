import React from 'react';

interface AccountWrapperProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

export const AccountWrapper = (props: AccountWrapperProps) => {
	const { title, description, children } = props;

	return (
		<div className="mr-auto px-2">
			<div className="mb-4">
				<h1 className="text-3xl font-bold mb-1">{title}</h1>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
			{children}
		</div>
	);
};
