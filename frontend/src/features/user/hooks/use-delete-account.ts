import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { userService } from '../services/user.service';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/shared/config';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const useDeleteAccount = () => {
    const router = useRouter();
    const { logout } = useAuth();
    
    const { mutate: deleteAccount, isPending } = useMutation({
        mutationKey: ['delete-account'],
        mutationFn: async () => {
            await userService.DeleteAccountProfile();
        },
        onSuccess: () => {
            logout();
            toast.success('Аккаунт успешно удалён');
            router.replace(AppRoutes.SignIn);
        },
        onError: (error) => {
            toast.error('Ошибка при удалении аккаунта', {
                description: (error as Error).message,
            });
        },
    });

    return { deleteAccount, isPending };
};
