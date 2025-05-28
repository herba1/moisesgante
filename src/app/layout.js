import { LenisProvider } from "@/context/LenisContext";
import { inter } from "./fonts";
import PageLayout from "./ui/PageLayout";
import { getSocialMediaLinks } from "./lib/api/cmsData";



export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`antialiased ${inter.className}`}>
        <LenisProvider>
          <PageLayout>
            {children}
          </PageLayout>
          {/* <Navbar className=" mix-blend-difference text-base lg:text-xl"></Navbar>
          <main className="relative z-10">
          {children}
          </main>
          <StickyFooter height="600px" >
            <FooterContent></FooterContent>
          </StickyFooter> */}
        </LenisProvider>
      </body>
    </html>
  );
}