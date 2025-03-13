export enum EmailStatus {
    send,
    access,
}

export interface EmailUpdateProps {
    status: EmailStatus;
    email: string;
    message: string;
}