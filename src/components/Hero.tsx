
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient-bg py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🇮🇳 राष्ट्रीय डिजिटल साक्षरता मिशन
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            सत्यसेतु
            <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
              SatyaSetu - Bridge to Truth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            Empowering rural India with digital literacy and truth. 
            Fight fake news, access government schemes, and build a safer digital community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Check Facts Now / तथ्य जांचें
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
              Explore Schemes / योजनाएं देखें
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-effect rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">Facts Verified</div>
            </div>
            <div className="glass-effect rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-90">Villages Served</div>
            </div>
            <div className="glass-effect rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Government Schemes</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
