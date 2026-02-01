import Image from "next/image";

export default function Page() {
  return (
    <div className="container-new mx-auto h-[calc(100vh-var(--header-height)-32px)] max-sm:px-3">
      <div className="mx-auto mt-4 flex h-full w-full flex-col items-center justify-center ring-1">
        <div className="flex w-full items-center justify-between px-12 max-[480px]:flex-col max-[480px]:gap-12">
          <div className="max-[480px]:order-2 sm:w-3/4">
            <p className="text-muted-foreground text-sm">Hi There,</p>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-6xl">
              I am <span className="text-foreground">Thành Danh</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              I am on my way to becoming an Embedded Engineer.
            </p>
          </div>

          <div className="flex justify-center max-[480px]:order-1 max-[480px]:w-3/4 sm:w-1/4">
            <div className="relative z-10 aspect-square w-full">
              <Image
                src="brand-bg.png"
                alt=""
                width={800}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
