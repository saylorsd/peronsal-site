import Link from "next/link";

export function Header() {
  return (
    <header>
      <div>
        <h1>Steve Saylor </h1>
        <div className="tight">full-stack developer, civic technologist</div>
      </div>
      <nav className="mainNav">
        <ul>
          <li>
            <Link href="/" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/lab">Side Projects</Link>
          </li>
          <li>
            <Link href="/bit">😼Bit</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
