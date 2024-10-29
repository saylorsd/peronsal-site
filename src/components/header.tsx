export function Header() {
  return (
    <header>
      <div>
        <h1>Steve Saylor </h1>
        <div className="tight">
          Full-stack developer, civic technologist, GIS specialist{" "}
        </div>
      </div>
      <nav className="mainNav">
        <ul>
          <li>
            <a href="/" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/work">Projects</a>
          </li>
          <li>
            <a href="/bit">😼Bit</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
