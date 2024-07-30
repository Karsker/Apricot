'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
export const signUp = async (formData: FormData) => {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            // emailRedirectTo: `${origin}/auth/callback`,
            data: {
                first_name: firstName,
                last_name: lastName
            }
        },
    });

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login");
};
