'use client';

import { ReactNode, createContext, useContext } from 'react';
import { FindAllTagsQuery, useFindAllTagsLazyQuery } from '@/shared/graphql/generated/output';

interface TagsContextType {
	allTags?: FindAllTagsQuery;
	tagsLoading: boolean;
	loadTags: () => void;
}

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export function TagsProvider({ children }: { children: ReactNode }) {
	const [loadTagsQuery, { data: allTags, loading: tagsLoading }] =
		useFindAllTagsLazyQuery();

	const loadTags = () => {
		loadTagsQuery();
	};

	return (
		<TagsContext.Provider value={{ allTags, tagsLoading, loadTags }}>
			{children}
		</TagsContext.Provider>
	);
}

export function useTagsContext() {
	const context = useContext(TagsContext);
	if (!context) {
		throw new Error('useTagsContext must be used within a TagsProvider');
	}
	return context;
}
