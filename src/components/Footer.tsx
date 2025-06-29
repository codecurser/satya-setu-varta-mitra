
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              सत्यसेतु SatyaSetu
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering rural India with digital literacy and truth. 
              Building a safer, more informed digital community through fact-checking, 
              government scheme awareness, and digital education.
            </p>
            <p className="text-gray-400 text-sm">
              डिजिटल साक्षरता और सत्य के साथ ग्रामीण भारत को सशक्त बनाना।
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Fact Checker</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Government Schemes</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Literacy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Community Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 SatyaSetu. Made with ❤️ for Digital India.
            </div>
            <div className="flex gap-6">
              <span className="text-sm text-gray-400">🇮🇳 Proudly Indian</span>
              <span className="text-sm text-gray-400">🤝 Community Driven</span>
              <span className="text-sm text-gray-400">✅ Verified Information</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
