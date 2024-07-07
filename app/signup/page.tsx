import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Button,
  TextField,
  Container,
  Paper,
  Box,
  Typography
} from "@mui/material";
// import { SubmitButton } from "./submit-button";

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" color="#e95420">Apricot</Typography>
      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            p: 3,
            width: 300
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 100 }}>Sign Up</Typography>
          <TextField label="Email" name="email" fullWidth></TextField>
          <TextField label="Password" name="password" fullWidth type="password"></TextField>

          <Button
            formAction={signUp} variant="contained" type="submit" color="primary"
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </Container>

  );
}
