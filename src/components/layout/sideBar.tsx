import AboutSideBar from "@/page/about/aboutSideBar";
import ContactSideBar from "@/page/contact/contactSideBar";
import ProjectsSideBar from "@/page/projects/projectsSideBar";
type SideBarProp = {
  pathname: string;
};
const SideBar = ({ pathname }: SideBarProp) => {
  const sort = () => {
    switch (pathname) {
      case "/projects":
        return <ProjectsSideBar />;
      case "/about":
        return <AboutSideBar />;
      case "/contact":
        return <ContactSideBar />;
      default:
        return null;
    }
  };
  return (
    <aside className="w-full max-w-[311px] h-full border-r border-[#1E2D3D] sticky top-0 left-0 ">
      {sort()}
    </aside>
  );
};

export default SideBar;
