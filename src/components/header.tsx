import { Link } from "./link";

export function Header() {
  return (
    <header className="mt-8 mb-2 border-b-4 pb-0.5">
      <div>
        <h1 className="text-5xl font-bold">Steve Saylor </h1>
        <div className="mt-2 italic text-stone-700">
          <span className="block lg:inline">full-stack developer,</span>{" "}
          <span className="block lg:inline">civic technologist</span>
        </div>
      </div>

      <nav className="border-b-2 py-[2ch]">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio" icon="💼">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/lab" icon="🧪">
              Side Projects
            </Link>
          </li>
          <li>
            <Link href="/bit" icon="😼">
              Bit
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
