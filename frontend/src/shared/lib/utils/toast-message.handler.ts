import { toast } from 'sonner';

export const toastMessageHandler = (object: {message?: string}) => {
	if (!object.message) return;

	const {message} = object;
	const firstDotIndex = message.indexOf('.');

	if (firstDotIndex !== -1) {
		const title = message.slice(0, firstDotIndex).trim();
		const description = message.slice(firstDotIndex + 1).trim().replace(/^,/, '');

		toast.error(title, {
			description: description || undefined, 
		});
	} else {
		toast.error(message);
	}
};
