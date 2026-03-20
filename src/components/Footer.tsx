import { Gem } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Gem className="h-6 w-6 text-gold" />
              <span className="font-display text-xl font-bold tracking-wide">
                JEWEL<span className="text-gold">TRADE</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              The premier B2B wholesale jewelry marketplace connecting verified vendors with buyers worldwide.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Company",
              links: ["About Us", "Careers", "Press", "Blog"],
            },
            {
              title: "Support",
              links: ["Help Center", "Contact Us", "Shipping Info", "Returns"],
            },
            {
              title: "Legal",
              links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Compliance"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-gold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/50 hover:text-gold text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 JewelTrade. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/40 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
