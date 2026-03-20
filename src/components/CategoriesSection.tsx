import { motion } from "framer-motion";
import catGold from "@/assets/cat-gold.jpg";
import catDiamond from "@/assets/cat-diamond.jpg";
import catSilver from "@/assets/cat-silver.jpg";
import catCustom from "@/assets/cat-custom.jpg";

const categories = [
  { name: "Gold Jewelry", image: catGold, count: "2,400+ Products" },
  { name: "Diamond Jewelry", image: catDiamond, count: "1,800+ Products" },
  { name: "Silver Jewelry", image: catSilver, count: "3,200+ Products" },
  { name: "Custom Jewelry", image: catCustom, count: "900+ Designs" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-card"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-semibold text-cream">
                  {cat.name}
                </h3>
                <p className="text-gold text-xs md:text-sm mt-1">{cat.count}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
