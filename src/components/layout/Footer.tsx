const Footer = () => {
  return (
    <footer className="h-16 border-t border-gray-200 flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-between text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Kseniia Konovalova</span>

        <div className="flex gap-4">
          <a
            href="https://github.com/KKonovalova2502"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kseniia-konovalova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:k.konovalova2502@gmail.com"
            className="hover:text-gray-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
