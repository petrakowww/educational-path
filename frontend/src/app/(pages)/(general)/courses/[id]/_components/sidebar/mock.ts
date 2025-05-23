export const MOCK_COURSE = {
	id: 'course-1',
	title: 'Основы интернета',
	price: 990,
	isPublished: true,
	chapters: [
		{
			id: 'chapter-1',
			title: 'Как работает интернет?',
			isFree: true,
			userProgress: [{ isCompleted: true }],
		},
		{
			id: 'chapter-2',
			title: 'Что такое DNS?',
			isFree: false,
			userProgress: [{ isCompleted: false }],
		},
		{
			id: 'chapter-3',
			title: 'HTTP и HTTPS',
			isFree: false,
			userProgress: [],
		},
	],
};
