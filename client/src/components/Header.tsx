export default function Header(): JSX.Element {
  const linkHover = "font-semibold hover:text-highlight hover:cursor-pointer";
  return (
    <header className="flex justify-between items-center px-8 py-4 m-0 bg-black absolute top-0 w-screen">
      <h1 className="p-0 m-0 text-xl">Can I wear</h1>
      <ul className="hidden sm:flex gap-8">
        <li>
          <a className={linkHover}>About</a>
        </li>
        <li>
          <a className={linkHover}>Pricing</a>
        </li>
        <li>
          <a className={linkHover}>FAQ</a>
        </li>
        <li>
          <a className={linkHover}>Support</a>
        </li>
        <li>
          <a className={linkHover}>Login</a>
        </li>
      </ul>
    </header>
  );
}
