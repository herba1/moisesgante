import { LenisProvider } from "@/context/LenisContext";
import { inter } from "./fonts";
import PageLayout from "./ui/PageLayout";
import { Analytics } from "@vercel/analytics/next";
import { description, title } from "./lib/CONSTANTS";

export const metadata = {
  title: { default: title, template: `%s | ${title}` },
  description: description,
  openGraph:{
    images:['/opengraph-image.png']
  }
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className} `}>
        <LenisProvider>
          <PageLayout>{children}</PageLayout>
        </LenisProvider>
        <Analytics></Analytics>
      </body>
    </html>
  );
}
