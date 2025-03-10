import { FormChangeProfile } from '@/features/user/components/forms/form-change-profile';

export default function Page() {
	return (
		<div className="mr-auto px-2">
			<div className="mb-4">
				<h1 className="text-3xl font-bold mb-1">Профиль</h1>
				<p className="text-sm text-muted-foreground">
					Создайте свой профиль, чтобы продемонстрировать свои умения другим. Профиль будет отображаться при просмотре ваших созданных карт.
				</p>
			</div>

			<FormChangeProfile/>

			{/* <div className="mt-2 flex items-center">
		  <Checkbox id="show-email" />
		  <Label htmlFor="show-email" className="ml-2">Показать мой email в профиле</Label>
		</div> */}
		</div>
	);
}
