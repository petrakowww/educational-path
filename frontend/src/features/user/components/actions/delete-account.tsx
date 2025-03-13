import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/shared/ui";

export const DeleteAccountProfile = () => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setInputValue("");
    setIsOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Удаление аккаунта</CardTitle>
        <CardDescription>
          Нажимая <span className="font-semibold">удалить аккаунт</span>, вам
          будет предложено полностью удалить ваш аккаунт{" "}
          <span className="text-destructive">*без возможности восстановления*</span>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="w-full">
              Удалить аккаунт
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
              <AlertDialogDescription>
                Это действие <span className="font-bold">невозможно отменить</span>. Ваш аккаунт и все данные будут{" "}
                <span className="text-destructive">безвозвратно удалены</span>.
                Для подтверждения введите{" "}
                <span className="font-semibold">Delete Account</span> в поле ниже.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Input
              placeholder="Введите: Delete Account"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="mt-2"
            />
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleClose}>Отмена</AlertDialogCancel>
              <AlertDialogAction
                disabled={inputValue !== "Delete Account"}
                className="bg-destructive text-white"
                onClick={handleClose}
              >
                Подтвердить удаление
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
};
