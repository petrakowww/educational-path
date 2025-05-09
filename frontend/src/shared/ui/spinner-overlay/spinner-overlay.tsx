import { Loader2 } from 'lucide-react';

export const SpinnerOverlay = () => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm">
			<Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
		</div>
	);
};
