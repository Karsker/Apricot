import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import App from "@/components/App";
import { CssBaseline } from "@mui/material";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Apricot",
  description: "The task manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body>
        
        <AppRouterCacheProvider>
          <App>
            
            {children}
          </App>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
