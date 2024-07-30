import { signUp } from "./actions";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";
// import { SubmitButton } from "./submit-button";

export const metadata = {
  title: "Sign Up"
}

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {

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
          <TextField label="First Name" name="firstName" fullWidth required></TextField>
          <TextField label="Last Name" name="lastName" fullWidth></TextField>
          <TextField label="Email" name="email" fullWidth required></TextField>
          <TextField label="Password" name="password" fullWidth type="password" required></TextField>

          <Button
            formAction={signUp} variant="contained" type="submit" color="primary"
          >
            Sign Up
          </Button>

          <Divider sx = {{
            width: '100%'
          }}/>

          <Typography variant="subtitle2" color="gray">Already have an account? <Link href="/login" color="inherit">Go to login</Link></Typography>
        </Box>
      </form>
    </Container>

  );
}
