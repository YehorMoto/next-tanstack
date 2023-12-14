//@styles
import { Roboto } from "next/font/google";
import "./styles/globals.css";

//@providers
import { TanStackQueryClientProvider } from "app/providers";

//@types
import type { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TanStack table App",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  description: "Fancy Next.js application using TanStack table and query",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={roboto.className}>
      <TanStackQueryClientProvider>
        <div className="container">{children}</div>
      </TanStackQueryClientProvider>
    </body>
  </html>
);

export default RootLayout;
