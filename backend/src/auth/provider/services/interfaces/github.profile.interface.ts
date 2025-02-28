export interface GitHubProfile extends Record<string, any> {
    login: string;
    id: string;
    avatar_url: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    created_at: string;
}
