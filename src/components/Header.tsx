import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Categories", href: "#categories" },
  { label: "Vendors", href: "#vendors" },
  { label: "RFQ", href: "#" },
  { label: "About", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
            JEWEL<span className="text-gold">TRADE</span>
          </span>
        </a>

        {/* Search - desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jewelry, vendors..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-jet-light border border-gold/20 text-primary-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
        </div>

        {/* Nav - desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-primary-foreground/70 hover:text-gold transition-colors font-medium tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 ml-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground/70 hover:text-gold hover:bg-jet-light">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button asChild className="hidden md:flex gradient-gold text-accent-foreground font-semibold text-sm px-5 hover:opacity-90 transition-opacity rounded-full">
            <Link to="/login">
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-primary border-t border-gold/10"
          >
            <div className="p-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-jet-light border border-gold/20 text-primary-foreground placeholder:text-muted-foreground text-sm focus:outline-none"
                />
              </div>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-primary-foreground/70 hover:text-gold transition-colors font-medium uppercase text-sm tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="w-full gradient-gold text-accent-foreground font-semibold rounded-full">
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Login / Register
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
