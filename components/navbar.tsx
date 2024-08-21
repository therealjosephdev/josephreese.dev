import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="mb-12 md:mb-32">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-end gap-2">
            <p>Joseph Reese</p>
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