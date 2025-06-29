
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FactChecker = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<null | { status: 'real' | 'fake' | 'uncertain', explanation: string, sources: string[] }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFactCheck = async () => {
    if (!message.trim()) {
      toast({
        title: "कृपया संदेश दर्ज करें",
        description: "Please enter a message to fact-check",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate fact-checking API call
    setTimeout(() => {
      const mockResults = [
        {
          status: 'fake' as const,
          explanation: "यह संदेश गलत है। कोई भी सरकारी योजना WhatsApp के माध्यम से पैसे नहीं मांगती।",
          sources: ["PIB Fact Check", "Government of India", "Reserve Bank of India"]
        },
        {
          status: 'real' as const,
          explanation: "यह जानकारी सत्य है। यह एक वैध सरकारी योजना है।",
          sources: ["Official Government Portal", "District Collector Office", "PIB"]
        },
        {
          status: 'uncertain' as const,
          explanation: "इस जानकारी को सत्यापित करने के लिए अधिक जांच की आवश्यकता है।",
          sources: ["Multiple sources being verified"]
        }
      ];
      
      setResult(mockResults[Math.floor(Math.random() * mockResults.length)]);
      setIsLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'real': return 'bg-green-100 text-green-800 border-green-200';
      case 'fake': return 'bg-red-100 text-red-800 border-red-200';
      case 'uncertain': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'real': return <Check className="w-4 h-4" />;
      case 'fake': return <Info className="w-4 h-4" />;
      case 'uncertain': return <Search className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Fact Checker / तथ्य परीक्षक
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload WhatsApp messages, images, or any content to verify if it's true or false. 
            Get instant results with reliable sources.
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Search className="w-6 h-6 text-primary" />
              Check Your Message
            </CardTitle>
            <CardDescription className="text-lg">
              Paste the message or describe the content you want to verify
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Textarea
                placeholder="यहां संदेश पेस्ट करें या वर्णन करें... / Paste message here or describe the content..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="text-lg resize-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleFactCheck} 
                disabled={isLoading}
                className="flex-1 py-3 text-lg font-semibold"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Checking... / जांच रहे हैं...
                  </div>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Verify Now / सत्यापित करें
                  </>
                )}
              </Button>
              
              <Button variant="outline" className="flex-1 py-3 text-lg">
                <Upload className="w-5 h-5 mr-2" />
                Upload Image / छवि अपलोड करें
              </Button>
            </div>

            {result && (
              <Card className="mt-6 border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Badge className={`${getStatusColor(result.status)} flex items-center gap-1 px-3 py-1 text-base font-semibold`}>
                      {getStatusIcon(result.status)}
                      {result.status === 'real' && 'VERIFIED TRUE / सत्य'}
                      {result.status === 'fake' && 'FAKE NEWS / झूठी खबर'}
                      {result.status === 'uncertain' && 'NEEDS VERIFICATION / जांच आवश्यक'}
                    </Badge>
                  </div>
                  
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    {result.explanation}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-gray-900">Sources / स्रोत:</h4>
                    <ul className="space-y-1">
                      {result.sources.map((source, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-3 h-3 text-green-600" />
                          {source}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FactChecker;
