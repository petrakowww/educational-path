import { useRef } from 'react';
import { Tabs } from '@/shared/ui';
import { useTabAction } from '../hook/use-tab-action';
import { cn, useScrollable } from '@/shared/lib';
import { Tab } from './tab';
import { TabContextMenu } from './context-menu';
import { TabDialogMenu } from './dialog-menu';
import { TabListScrollableContainer } from './scrollable-container';
import { useFindRouteQuery } from '@/shared/graphql/generated/output';
import { useApolloClient } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const TabBar = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const client = useApolloClient();
  const { data, loading, error } = useFindRouteQuery({ variables: { id } });

  const {
    isDragging,
    activeTabId,
    tabs,
    isActiveTab,
    handleTabOpen,
    handleTabClose,
    handleTabCloseOther,
    handleTabCloseAll,
    handleTabAdd,
    handleTabPin,
    useTabDraggableEffect,
    tabListRef,
  } = useTabAction({ id, title: data?.findRoute?.title || 'Без названия', isPinned: false });

  const { scrollToElement, scrollToEnd } = useScrollable(tabListRef);
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useTabDraggableEffect();

  const handleTabOpenWithScrollEffect = (id: string, slug: string) => {
    handleTabOpen(id);
    client.clearStore().then(() => {
		router.push(`/editor/${id}/${slug}`);
    });
    requestAnimationFrame(() => {
      const tabRef = tabRefs.current[id];
      if (tabRef && !isDragging) {
        scrollToElement(tabRef);
      }
    });
  };

  const handleTabAddWithScrollEffect = (title: string) => {
    handleTabAdd(title);
    requestAnimationFrame(() => {
      if (!isDragging) {
        scrollToEnd();
      }
    });
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <Tabs value={activeTabId} className="flex gap-1">
      <TabListScrollableContainer ref={tabListRef} isMustTouchMove={isDragging}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              'relative flex items-center',
              tab.isPinned ? 'tab-bar__item-pinned-tab' : 'tab-bar__item-draggable'
            )}
            ref={(el) => {
              tabRefs.current[tab.id] = el;
            }}
          >
            <TabContextMenu
              tab={tab}
              onPin={handleTabPin}
              onFocus={handleTabOpen}
              onClose={handleTabClose}
              onCloseOther={handleTabCloseOther}
              onCloseAll={handleTabCloseAll}
            >
              <Tab
                tab={tab}
                isActive={isActiveTab(tab.id)}
                isDragging={isDragging}
                onSelect={() => handleTabOpenWithScrollEffect(tab.id, tab.slug)}
                onClose={handleTabClose}
              />
            </TabContextMenu>
          </div>
        ))}
      </TabListScrollableContainer>
      <div className="mx-2">
        <TabDialogMenu onAddNewCardCallback={handleTabAddWithScrollEffect} />
      </div>
    </Tabs>
  );
};
