import BrandLogo from "./brand-logo";
import HeaderNavigation from "./nav-header";
import { ThemeModeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <header className="flex h-(--header-height) w-full">
      <div className="container-new mt-4 flex h-12 w-full items-center ring-1 max-sm:mx-3 sm:mx-auto">
        <BrandLogo />
        <Separator orientation="vertical" className="bg-current" />
        <HeaderNavigation />
        <div className="flex-1"></div>
        <Separator orientation="vertical" className="bg-current" />
        <div className="flex items-center px-4">
          <ThemeModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
