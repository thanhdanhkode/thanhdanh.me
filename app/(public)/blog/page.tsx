import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container-new mx-auto h-[calc(100vh-var(--header-height)-32px)] max-sm:px-3">
      <div className="mx-auto mt-4 flex h-full w-full flex-col items-center justify-center ring-1">
        <div className="text-2xl font-bold">Comming Soon!</div>
        <Button variant="link" className="mt-4" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
