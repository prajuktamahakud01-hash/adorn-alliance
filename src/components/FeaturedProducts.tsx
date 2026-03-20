import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import catGold from "@/assets/cat-gold.jpg";
import catDiamond from "@/assets/cat-diamond.jpg";
import catSilver from "@/assets/cat-silver.jpg";
import catCustom from "@/assets/cat-custom.jpg";

const products = [
  { name: "22K Gold Temple Necklace", vendor: "Royal Gold Creations", moq: 10, image: catGold },
  { name: "1ct Diamond Solitaire Ring", vendor: "DiamondCraft Co.", moq: 5, image: catDiamond },
  { name: "Sterling Silver Anklet Set", vendor: "SilverLine Exports", moq: 50, image: catSilver },
  { name: "Custom Emerald Pendant", vendor: "Artisan Jewels Ltd.", moq: 3, image: catCustom },
  { name: "Gold Hoop Earrings 18K", vendor: "Royal Gold Creations", moq: 20, image: catGold },
  { name: "Diamond Tennis Bracelet", vendor: "DiamondCraft Co.", moq: 5, image: catDiamond },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase">
              Curated Selection
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
              Featured Products
            </h2>
          </div>
          <Button variant="ghost" className="text-gold hover:text-gold-dark mt-4 md:mt-0 self-start md:self-auto">
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-border"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs px-3 py-1 rounded-full">
                    MOQ: {product.moq}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="font-display text-sm md:text-base font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                  {product.vendor}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Lock className="h-3 w-3" />
                    <span>Login for price</span>
                  </div>
                  <Button
                    size="sm"
                    className="gradient-gold text-accent-foreground text-xs rounded-full px-4 hover:opacity-90 transition-opacity"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
