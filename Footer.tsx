const Footer = () => {
  return (
    <footer className="bg-heritage-earth text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold heritage-text-gradient mb-4">
              Heritage Preserve
            </h3>
            <p className="text-lg opacity-90 max-w-md mx-auto">
              Preserving India's cultural legacy through technology
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a 
              href="#about" 
              className="hover:text-heritage-gold transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-heritage-gold transition-colors duration-300"
            >
              Contact
            </a>
            <a 
              href="#privacy" 
              className="hover:text-heritage-gold transition-colors duration-300"
            >
              Privacy
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-sm opacity-70">
              Prototype for SIH Hackathon 2025 • Built with ❤️ for Cultural Heritage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;