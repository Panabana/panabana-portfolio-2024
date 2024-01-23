export default function Footer() {
  return (
    <div className="container mx-auto top-[100vh] flex flex-wrap max-h-24 mb-0 p-5 flex-col md:flex-row items-center justify-center text-xs md:text-lg text-neutral-300  ">
      <nav className="md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center justify-evenly">
        <a
          href="https://www.linkedin.com/in/alexanderbengtsson/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1 md:mr-10 hover:underline font-bold">
          LinkedIn
        </a>
        <p className="mr-1 md:mr-10"> | </p>
        <a
          href="https://www.github.com/panabana/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 md:mr-28 hover:underline font-bold">
          GitHub
        </a>
        <p>
          Updated: 2024-01-23
        </p>
      </nav>
      <div>

      </div>
    </div>
  );
}