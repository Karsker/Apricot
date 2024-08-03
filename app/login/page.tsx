
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { signIn } from './actions';
export default async function Login({
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
          <Typography variant="h2" sx={{ fontWeight: 100 }}>Login</Typography>
          <TextField label="Email" name="email" fullWidth></TextField>
          <TextField label="Password" name="password" fullWidth type="password"></TextField>

          <Button
            formAction={signIn} variant="contained" type="submit"
          >
            Login
          </Button>

          <Divider sx={{
            width: '100%'
          }} />

          <Typography variant="subtitle2" color="gray">Don't have an account? <Link href="/signup" color="inherit">Sign up</Link></Typography>
        </Box>
      </form>
    </Container>
  );
}
