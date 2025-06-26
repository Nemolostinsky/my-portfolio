export default function Footer() {
  return (
    <footer className="w-full border-t border-cyan-100 dark:border-cyan-900 py-6 mt-12 bg-white/80 dark:bg-gray-900/80 text-center text-gray-500 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
        <span>&copy; {new Date().getFullYear()} Suhani. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/resume" className="hover:underline">Resume</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
} 