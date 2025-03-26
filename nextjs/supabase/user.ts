import 'server-only'
import { createClient } from './server';

export const getUser = async () => {
    const supabase = await createClient()
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
        console.error("Authentication error:", authError);
        return { error: "Authentication failed", status: 401 };
    }

    if (!user) {
        return { error: "User not authenticated", status: 401 };
    }

    return user
}