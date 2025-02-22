export function Footer() {
  return (
    <footer className="p-8 md:p-16 lg:p-24 text-neutral-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4">
            <p>© {new Date().getFullYear()}</p>
            <p>all rights reserved</p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:hello@example.com"
              className="block hover:text-white transition-colors"
            >
              hello@example.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                vimeo
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
