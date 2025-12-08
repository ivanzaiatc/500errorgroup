import Image from "next/image";

export default function AppBar() {
  return (
    <header className="sticky top-0 z-50 w-full pt-2">
        <div className="flex items-center gap-2">
      <div className="container flex h-30 items-center px-6">
          <div className="relative h-30 w-30 overflow-hidden rounded-full">
            <Image
              src="/me.png"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
