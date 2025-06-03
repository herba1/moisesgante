import Navbar from "./Navigation/Navbar";
import StickyFooter from "./StickyFooter";
import FooterContent from "./Footer/FooterContent";
import { getExtraFooterData, getSocialMediaLinks } from "../lib/api/cmsData";
import LoadingScreen from "./LoadingScreen";

export default async function PageLayout({ children }) {
  const socialLinks = await getSocialMediaLinks();
  const extraLinks = await getExtraFooterData();
  

  return (
    <div className="page__container ">
      <LoadingScreen></LoadingScreen>
      <Navbar className="text-base lg:text-xl" background={false} socialLinks={socialLinks}></Navbar>
      <main className=" main__container relative z-10">{children}</main>
      <StickyFooter height="600px">
        <FooterContent
          socialLinks={socialLinks}
          extraLinks={extraLinks.items}
        ></FooterContent>
      </StickyFooter>
    </div>
  );
}
