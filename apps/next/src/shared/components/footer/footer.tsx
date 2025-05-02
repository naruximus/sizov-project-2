import { SocialLinks } from '../social-links';

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-neutral-400 py-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between px-3 space-y-4 md:space-y-0">
          <div className="flex justify-center md:items-center">
            <SocialLinks className="flex flex-row space-x-4" />
          </div>
          <div className="flex justify-center md:items-center">
            <p>all rights reserved</p>
          </div>
          <div className="flex justify-center">
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
