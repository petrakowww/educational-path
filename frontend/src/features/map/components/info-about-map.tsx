'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	Badge,
} from '@/shared/ui';

import { MicroscopeIcon, EllipsisVerticalIcon } from 'lucide-react';
import { MapDialogForm } from './dialog-form-map';
import { PrivateType } from '@/shared/graphql/generated/output';
import { RouteModel } from '@/shared/graphql/generated/output';

interface IRouteInformationCard extends RouteModel {
	onAccessChange?: (value: PrivateType) => void;
	onDelete?: () => void;
}

export const InformationAboutMap = (props: IRouteInformationCard) => {
	const {
		title,
		description,
		tags: routeTags,
		topicNodes,
		privateType,
		onAccessChange,
		onDelete,
	} = props;
    

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex flex-row gap-2 justify-between flex-wrap">
					<div className="break-all">{title}</div>
					<div className="flex gap-2 flex-wrap">
						{routeTags?.map((routeTag) => (
							<Badge key={routeTag.id} variant="outline">
								{routeTag.tag.name}
							</Badge>
						))}
					</div>
				</CardTitle>
				<CardDescription className="flex flex-row gap-2">
					<p className="flex-1">{description}</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row gap-4 justify-between">
					<div>
						<Select
							defaultValue={privateType}
							onValueChange={(val: PrivateType) =>
								onAccessChange?.(val)
							}
						>
							<SelectTrigger className="gap-4">
								<SelectValue />
							</SelectTrigger>
							<SelectContent position="popper">
								<SelectItem value="General">
									Общий доступ
								</SelectItem>
								<SelectItem value="Private">
									Ограниченный доступ
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="flex flex-row gap-4">
						<div className="flex flex-row gap-2 items-center flex-shrink-0">
							<span>{topicNodes?.length} тем</span>
							<MicroscopeIcon size={20} />
						</div>
						<MapDialogForm
							triggerLabel="Изменить"
							initialData={{
								title,
								description: description ?? '',
								routeTags: routeTags ?? [],
							}}
							variant={'outline'}
							onSubmit={() => console.log('hello world')}
						/>
						<Menubar className="p-0 space-x-0 aspect-square justify-center">
							<MenubarMenu>
								<MenubarTrigger className="p-0 m-0 w-full h-full justify-center">
									<EllipsisVerticalIcon />
								</MenubarTrigger>
								<MenubarContent>
									<MenubarItem
										onClick={() => alert('Просмотр')}
									>
										Просмотреть
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem
										onClick={() => alert('Редактировать')}
									>
										Редактировать
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem onClick={onDelete}>
										Удалить
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
