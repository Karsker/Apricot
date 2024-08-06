'use client'

import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { signIn } from './actions';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [userCredentials, setUserCredentials] = useState<FormData | undefined>(undefined);
  const router = useRouter();
  const loginUser = (formData: FormData) => {
    setLoggingIn(true);
    setUserCredentials(formData);
  }

  useEffect(() => {
    if (loggingIn && userCredentials) {
      signIn(userCredentials);
    }
  }, [loggingIn])

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
      <form action={loginUser}>
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

          <Button variant="contained" type="submit" disabled={loggingIn}>
            Login
          </Button>
          {loggingIn && <CircularProgress size={24} />}
          <Divider sx={{
            width: '100%'
          }} />

          <Typography variant="subtitle2" color="gray">Don't have an account? <Link href="/signup" color="inherit">Sign up</Link></Typography>
        </Box>
      </form>
    </Container>
  );
}
