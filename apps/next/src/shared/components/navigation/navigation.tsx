import { NavLink } from '../nav-link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-[#1C1C1C]">
      <div className="flex justify-between items-center max-w-6xl p-2  mx-auto">
        <NavLink href="/">sizov</NavLink>
        <div className="flex gap-8">
          <NavLink href="/videoHorizontal">horizontal.mov</NavLink>
          <NavLink href="/videoVertical">vertical.mp4</NavLink>
          <NavLink href="/photos">photos.jpeg</NavLink>
          <NavLink href="/actor">me.actor</NavLink>
          <NavLink href="/contact">contacts.me</NavLink>
        </div>
      </div>
    </nav>
  );
}
