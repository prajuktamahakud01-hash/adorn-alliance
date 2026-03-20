import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, Upload, Building2, ShieldCheck, Landmark } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ease = [0.16, 1, 0.3, 1];

const LoginPage = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [kycFileName, setKycFileName] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: mode === "login" ? "Login" : "Registration",
      description: "This feature requires backend integration. Enable Lovable Cloud to proceed.",
    });
  };

  return (
    <div className="min-h-screen bg-primary flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative z-10 text-center px-12"
        >
          <h1 className="font-display text-4xl xl:text-5xl font-bold text-primary-foreground leading-tight mb-6" style={{ lineHeight: "1.15" }}>
            The Trusted
            <br />
            <span className="text-gold">Jewelry</span> Marketplace
          </h1>
          <p className="text-primary-foreground/60 text-lg max-w-sm mx-auto leading-relaxed">
            Connect with verified vendors, source premium wholesale jewelry, and grow your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-8 text-primary-foreground/40 text-sm">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-gold font-display text-2xl font-semibold">2,400+</span>
              <span>Vendors</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/10" />
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-gold font-display text-2xl font-semibold">18k+</span>
              <span>Products</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/10" />
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-gold font-display text-2xl font-semibold">₹850Cr</span>
              <span>GMV</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          className="w-full max-w-md"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-gold transition-colors text-sm mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>

          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-primary-foreground">
              {mode === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {mode === "login"
                ? "Sign in to access your dashboard"
                : "Join the largest B2B jewelry marketplace"}
            </p>
          </div>

          {/* Login / Register toggle */}
          <div className="flex gap-1 p-1 bg-jet-light rounded-lg mb-8">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
                mode === "login"
                  ? "bg-gold text-accent-foreground shadow-sm"
                  : "text-primary-foreground/50 hover:text-primary-foreground/70"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-all ${
                mode === "register"
                  ? "bg-gold text-accent-foreground shadow-sm"
                  : "text-primary-foreground/50 hover:text-primary-foreground/70"
              }`}
            >
              Register
            </button>
          </div>

          {mode === "login" ? (
            <LoginForm
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
              onSubmit={handleSubmit}
            />
          ) : (
            <RegisterForm
              showPassword={showPassword}
              togglePassword={() => setShowPassword(!showPassword)}
              kycFileName={kycFileName}
              onKycChange={setKycFileName}
              onSubmit={handleSubmit}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Login Form ─── */
function LoginForm({
  showPassword,
  togglePassword,
  onSubmit,
}: {
  showPassword: boolean;
  togglePassword: () => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <motion.form
      key="login"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <FieldGroup label="Email address">
        <Input
          type="email"
          placeholder="you@company.com"
          className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40"
        />
      </FieldGroup>

      <FieldGroup label="Password">
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40 pr-10"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </FieldGroup>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold" />
          <span className="text-xs text-muted-foreground">Remember me</span>
        </label>
        <button type="button" className="text-xs text-gold hover:text-gold-light transition-colors">
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full gradient-gold text-accent-foreground font-semibold h-11 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
      >
        Sign In
      </Button>
    </motion.form>
  );
}

/* ─── Register Form ─── */
function RegisterForm({
  showPassword,
  togglePassword,
  kycFileName,
  onKycChange,
  onSubmit,
}: {
  showPassword: boolean;
  togglePassword: () => void;
  kycFileName: string | null;
  onKycChange: (name: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const [tab, setTab] = useState("buyer");

  return (
    <motion.form
      key="register"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease }}
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="w-full bg-jet-light border border-gold/10">
          <TabsTrigger
            value="buyer"
            className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-gold data-[state=active]:shadow-none text-muted-foreground text-sm"
          >
            <Building2 className="h-3.5 w-3.5 mr-1.5" />
            Buyer
          </TabsTrigger>
          <TabsTrigger
            value="vendor"
            className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-gold data-[state=active]:shadow-none text-muted-foreground text-sm"
          >
            <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
            Vendor
          </TabsTrigger>
        </TabsList>

        {/* Shared fields */}
        <div className="mt-5 space-y-4">
          <FieldGroup label="Business name">
            <Input
              placeholder="Your company name"
              className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40"
            />
          </FieldGroup>

          <div className="grid grid-cols-2 gap-3">
            <FieldGroup label="Email">
              <Input
                type="email"
                placeholder="email@company.com"
                className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40"
              />
            </FieldGroup>
            <FieldGroup label="Phone">
              <Input
                type="tel"
                placeholder="+91 98765 43210"
                className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40"
              />
            </FieldGroup>
          </div>

          <FieldGroup label="GST number">
            <Input
              placeholder="22AAAAA0000A1Z5"
              maxLength={15}
              className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40 uppercase tracking-wider font-mono text-sm"
            />
          </FieldGroup>

          <FieldGroup label="Password">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40 pr-10"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </FieldGroup>
        </div>

        {/* Vendor-only fields */}
        <TabsContent value="vendor" className="mt-4 space-y-4">
          <div className="border border-gold/10 rounded-lg p-4 space-y-4 bg-jet-light/50">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Vendor Verification
            </h4>

            <FieldGroup label="Product category">
              <Select>
                <SelectTrigger className="bg-jet-light border-gold/15 text-primary-foreground focus:border-gold/40">
                  <SelectValue placeholder="Select primary category" />
                </SelectTrigger>
                <SelectContent className="bg-primary border-gold/20">
                  <SelectItem value="gold">Gold Jewelry</SelectItem>
                  <SelectItem value="diamond">Diamond Jewelry</SelectItem>
                  <SelectItem value="silver">Silver Jewelry</SelectItem>
                  <SelectItem value="gemstone">Gemstone Jewelry</SelectItem>
                  <SelectItem value="custom">Custom / Designer</SelectItem>
                </SelectContent>
              </Select>
            </FieldGroup>

            <FieldGroup label="KYC document">
              <label className="flex items-center justify-center gap-2 border-2 border-dashed border-gold/20 rounded-lg py-4 cursor-pointer hover:border-gold/40 transition-colors group">
                <Upload className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {kycFileName || "Upload PAN / Aadhaar / CIN"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => onKycChange(e.target.files?.[0]?.name || null)}
                />
              </label>
            </FieldGroup>

            <div className="grid grid-cols-2 gap-3">
              <FieldGroup label="Bank name">
                <Input
                  placeholder="Bank name"
                  className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40"
                />
              </FieldGroup>
              <FieldGroup label="IFSC code">
                <Input
                  placeholder="SBIN0001234"
                  className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40 uppercase font-mono text-sm"
                />
              </FieldGroup>
            </div>

            <FieldGroup label="Bank account number">
              <Input
                placeholder="Account number"
                className="bg-jet-light border-gold/15 text-primary-foreground placeholder:text-muted-foreground focus:border-gold/40 font-mono text-sm"
              />
            </FieldGroup>
          </div>
        </TabsContent>

        {/* Buyer tab content is empty — shared fields are enough */}
        <TabsContent value="buyer" className="mt-0" />
      </Tabs>

      <label className="flex items-start gap-2.5 cursor-pointer">
        <Checkbox className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5" />
        <span className="text-xs text-muted-foreground leading-relaxed">
          I agree to the{" "}
          <button type="button" className="text-gold hover:text-gold-light transition-colors">
            Terms of Service
          </button>{" "}
          and{" "}
          <button type="button" className="text-gold hover:text-gold-light transition-colors">
            Privacy Policy
          </button>
        </span>
      </label>

      <Button
        type="submit"
        className="w-full gradient-gold text-accent-foreground font-semibold h-11 rounded-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
      >
        Create Account
      </Button>
    </motion.form>
  );
}

/* ─── Shared field wrapper ─── */
function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider">
        {label}
      </Label>
      {children}
    </div>
  );
}

export default LoginPage;
