import { LenisProvider } from "@/context/LenisContext";
import { inter } from "./fonts";
import PageLayout from "./ui/PageLayout";
import { getSocialMediaLinks } from "./lib/api/cmsData";



export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`antialiased ${inter.className} `}>
        <LenisProvider>
          <PageLayout>
            {children}
          </PageLayout>
        </LenisProvider>
      </body>
    </html>
  );
}