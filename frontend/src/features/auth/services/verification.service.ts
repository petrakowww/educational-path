import { api } from "@/shared/api";
import { apiRoutes } from "@/shared/config";

export class VerificationService {
    public async newVerification(token: string | null) {
        const response = await api.post(apiRoutes.auth.emailConfirmation, {token});

        return response;
    }
}

export const verificationService = new VerificationService();