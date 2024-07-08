import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";

export const metadata = {
  title: "Login",
};

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
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
          <Typography variant="h2" sx={{ fontWeight: 100 }}>Login</Typography>
          <TextField label="Email" name="email" fullWidth></TextField>
          <TextField label="Password" name="password" fullWidth type="password"></TextField>
          
          <Button
            formAction={signIn} variant="contained" type="submit" color="primary"
          >
            Login
          </Button>
          
          <Divider sx = {{
            width: '100%'
          }}/>

          <Typography variant="subtitle2" color="gray">Don't have an account? <Link href="/signup" color="inherit">Sign up</Link></Typography>
          
        </Box>
      </form>
    </Container>
  );
}
