import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const vendors = [
  { name: "Royal Gold Creations", location: "Mumbai, India", rating: 4.9, products: 340, specialty: "Gold & Kundan" },
  { name: "DiamondCraft Co.", location: "Surat, India", rating: 4.8, products: 520, specialty: "Diamonds & Solitaires" },
  { name: "SilverLine Exports", location: "Jaipur, India", rating: 4.7, products: 890, specialty: "Silver & Gemstone" },
  { name: "Artisan Jewels Ltd.", location: "Bangkok, Thailand", rating: 4.9, products: 210, specialty: "Custom & Bespoke" },
];

const FeaturedVendors = () => {
  return (
    <section id="vendors" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Trusted Partners
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              Featured Vendors
            </h2>
          </div>
          <Button variant="ghost" className="text-gold hover:text-gold-dark mt-4 md:mt-0 self-start md:self-auto">
            View All Vendors <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor, i) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-luxury transition-shadow duration-300 group cursor-pointer border border-border"
            >
              {/* Vendor initial avatar */}
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mb-4">
                <span className="font-display text-xl font-bold text-accent-foreground">
                  {vendor.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                {vendor.name}
              </h3>

              <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                <MapPin className="h-3.5 w-3.5" />
                {vendor.location}
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-gold fill-gold" />
                  <span className="font-semibold text-foreground">{vendor.rating}</span>
                </div>
                <span className="text-muted-foreground">{vendor.products} Products</span>
              </div>

              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium">
                {vendor.specialty}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVendors;
