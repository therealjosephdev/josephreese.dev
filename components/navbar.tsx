import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="mb-12 md:mb-32">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-end gap-2">
            {/* <Image
              priority
              className="invert transition-all hover:opacity-70 dark:invert-0"
              src={logo}
              width={54}
              height={43.97}
              alt="Joseph Reese logo"
            ></Image> */}
            <p className="hidden md:block">Joseph Reese</p>
          </Link>
          <div className="flex items-center gap-4 text-base">
            <a
              className="text-muted-foreground transition-all hover:text-foreground"
              href="https://github.com/therealjosephdev"
              target="_blank"
            >
              GitHub
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}