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
            <a href="/" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/lab">Side Projects</a>
          </li>
          <li>
            <a href="/bit">😼Bit</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
