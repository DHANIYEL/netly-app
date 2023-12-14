import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "NETLY",
  description: "my Next Js Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(inter);
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-black-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
