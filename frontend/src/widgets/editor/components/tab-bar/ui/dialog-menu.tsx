'use client';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Label,
	Tabs,
	TabsList,
	TabsTrigger,
} from '@/shared/ui';
import { TabsContent } from '@radix-ui/react-tabs';
import { Plus } from 'lucide-react';

import { useState } from 'react';
import { TabDataProps } from '../entities/tab-interface';

interface TabDialogMenuProps {
	onAddNewCardCallback?: (name: string) => void;
	onSelectExistingMap?: () => TabDataProps;
}

export const TabDialogMenu = (props: TabDialogMenuProps) => {
	const { onAddNewCardCallback } = props;
	const [open, setOpen] = useState(false);
	const [cardName, setCardName] = useState('без названия');

	const handleAddNewCard = () => {
		if (!cardName.trim()) return;
		onAddNewCardCallback?.(cardName);
		setOpen(false);
		setCardName('без названия');
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger
				className="min-h-full min-w-10 flex items-center justify-center rounded-md
            bg-secondary hover:bg-primary/90 hover:text-primary-foreground text-muted-foreground
             transition-colors focus:border-1 focus:rounded-md focus:bg-primary focus:text-primary-foreground
             focus-visible:outline-none focus-visible:bg-primary"
			>
				<Plus width={20} height={20} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">Ваши карты</DialogTitle>
					<DialogDescription>
						Здесь можно создать новую карту или открыть уже существующую из списка.
					</DialogDescription>
				</DialogHeader>
				<Tabs defaultValue="new-map">
					<TabsList className="grid w-full grid-cols-2 mb-3">
						<TabsTrigger value="new-map">Новая карта</TabsTrigger>
						<TabsTrigger value="existing-map">Существующая</TabsTrigger>
					</TabsList>
					<TabsContent value="new-map">
						<Card className="selection:border-none">
							<CardHeader className="border-b mb-3">
								<CardTitle className="text-lg">Создать новую карту</CardTitle>
								<CardDescription>
									Введите название новой карты, затем нажмите кнопку создания.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="title">Название карты</Label>
									<Input
										id="name"
										value={cardName}
										onChange={(e) =>
											setCardName(e.target.value)
										}
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button onClick={handleAddNewCard}>
									Добавить карту
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
};
