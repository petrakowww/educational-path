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

// TODO: Необходимо сделать раздел существующих карт, сейчас он пуст
// TODO: Валидация на уровне клиента (в двух местах - переименовывание и создание)

export const TabDialogMenu = (props: TabDialogMenuProps) => {
	const { onAddNewCardCallback, onSelectExistingMap } = props;
	const [open, setOpen] = useState(false);
	const [cardName, setCardName] = useState('untitled'); // Храним имя карты

	const handleAddNewCard = () => {
		if (!cardName.trim()) return; // Проверяем, что имя не пустое
		onAddNewCardCallback?.(cardName);
		setOpen(false);
		setCardName('untitled'); // Сбрасываем значение после закрытия
	};
	// aspect-square h-full bg-secondary min-w-9 flex items-center justify-center rounded-md mr-2 hover:bg-primary
	// hover:text-primary-foreground transition-colors
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
					<DialogTitle className="text-2xl">Your maps</DialogTitle>
					<DialogDescription>
						Here you can add a new card or open an existing one from
						your list.
					</DialogDescription>
				</DialogHeader>
				<Tabs defaultValue="new-map">
					<TabsList className="grid w-full grid-cols-2 mb-3">
						<TabsTrigger value="new-map">New map</TabsTrigger>
						<TabsTrigger value="existing-map">
							Existing map
						</TabsTrigger>
					</TabsList>
					<TabsContent value="new-map">
						<Card className="selection:border-none">
							<CardHeader className="border-b mb-3">
								<CardTitle className="text-lg">
									Create New Map
								</CardTitle>
								<CardDescription>
									Enter the name of the new card below, then
									add it.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="title">Card name</Label>
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
									Add map
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	);
};
