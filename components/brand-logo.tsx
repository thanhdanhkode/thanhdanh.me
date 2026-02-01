import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <div className="px-2">
      <div className="relative size-10">
        <Link href={"/"}>
          <Image src={"brand.png"} alt="brand_logo" fill></Image>
        </Link>
      </div>
    </div>
  );
};

export default BrandLogo;
