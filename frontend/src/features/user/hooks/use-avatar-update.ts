'use client';

import { api } from '@/shared/api';
import { apiRoutes } from '@/shared/config';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { fileValidationSchema } from '../schemes/form-change-profile-avatar-schema';
import { UserProps } from '@/features/auth/types/user.type';
import client from '@/shared/lib/apollo/apollo-client';
import { FindProfileLogoDocument } from '@/shared/graphql/generated/output';

const updateCache = (user: UserProps) => {
  client.cache.writeQuery({
    query: FindProfileLogoDocument,
    data: {
      findProfile: {
        __typename: 'UserModel',
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        method: user.method,
        role: user.role,
      },
    },
  });
};

export const useAvatarUpdate = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        fileValidationSchema.parse({ file });

        const reader = new FileReader();
        reader.onload = () => {
          setAvatarPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append('file', file);

        const user = await api.post<UserProps>(apiRoutes.users.updateProfileAvatar, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        toast.success('Аватар успешно обновлен!');
        updateCache(user); 
      } catch (error) {
        if (error instanceof z.ZodError) {
          toast.error(error.errors[0].message);
        } else {
          toast.error('Ошибка обновления аватара');
        }
      }
    }
  };

  const handleAvatarDelete = async () => {
    try {
      const user = await api.delete<UserProps>(apiRoutes.users.deleteProfileAvatar);

      setAvatarPreview(undefined);
      updateCache(user);

      toast.success('Аватар успешно удален!');
    } catch {
      toast.error('Ошибка при удалении аватара');
    }
  };

  const handleResetAvatar = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return {
    avatarPreview,
    fileInputRef,
    handleAvatarUpload,
    handleAvatarDelete,
    handleResetAvatar,
    setAvatarPreview,
  };
};
