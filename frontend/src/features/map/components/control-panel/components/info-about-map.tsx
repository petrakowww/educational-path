'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	Badge,
} from '@/shared/ui';

import { MicroscopeIcon } from 'lucide-react';

import { RouteModel } from '@/shared/graphql/generated/output';
import { UpdateMapWrapper } from '../widgets/update-form-map';
import { RouteAccessSelect } from './select-private-type';
import { RouteActionsMenu } from './route-actions-menu';
import { formatDate } from '@/shared/lib/utils/format-date';

type RouteTags = {
	tags?:
		| {
				__typename?: 'RouteTagModel';
				id: string;
				tag: {
					__typename?: 'TagModel';
					id: string;
					name: string;
				};
		  }[]
		| null
		| undefined;
};

interface IRouteInformationCard extends Omit<RouteModel, 'tags' | 'user'> {
	routeTags?: RouteTags['tags'];
}

export const InformationAboutMap = (props: IRouteInformationCard) => {
	const {
		id,
		title,
		description,
		routeTags,
		topicNodes,
		privateType,
		createdAt,
		updatedAt,
	} = props;

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex flex-row gap-2 justify-between flex-wrap">
					<div className="flex flex-col">
						<span className="break-all mb-2">{title}</span>
						<div className="mb-2 text-sm text-secondary-foreground flex flex-row gap-2 items-center flex-shrink-0">
							<span>{topicNodes?.length ?? 0} тем</span>
							<MicroscopeIcon size={20} />
						</div>
						<span className="text-sm text-secondary-foreground font-normal">
							Дата создания: {formatDate(createdAt)}
						</span>
						<span className="text-sm text-secondary-foreground font-normal">
							Дата обновления: {formatDate(updatedAt)}
						</span>
					</div>
					<div className="flex gap-2 flex-wrap self-start">
						{routeTags?.map((routeTag) => (
							<Badge key={routeTag.tag.id} variant="outline">
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
				<div className="flex flex-row gap-4 justify-between flex-wrap">
					<div className='flex-1'>
						<RouteAccessSelect
							routeId={id}
							initialAccess={privateType}
						/>
					</div>

					<div className="flex flex-row gap-2 flex-[2] sm:justify-end justify-between">
						<UpdateMapWrapper
							routeId={id}
							initialData={{
								title,
								tagIds: routeTags?.map((tag) => tag.tag.id),
								description,
							}}
						/>
						<RouteActionsMenu routeId={id} routeTitle={title} />
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
