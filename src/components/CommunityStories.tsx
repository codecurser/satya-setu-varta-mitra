
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    name: "राजू कुमार",
    englishName: "Raju Kumar",
    village: "Rampur, Bihar",
    story: "SatyaSetu helped me identify a fake government scheme message. I was about to send money to fraudsters, but the fact-checker saved me ₹5,000.",
    hindiStory: "सत्यसेतु ने मुझे एक नकली सरकारी योजना संदेश की पहचान करने में मदद की। मैं धोखाधड़ी करने वालों को पैसे भेजने वाला था, लेकिन तथ्य-जांचकर्ता ने मुझे ₹5,000 बचाए।",
    impact: "Saved from fraud",
    category: "Fraud Prevention",
    image: "👨‍🌾"
  },
  {
    name: "सुनीता देवी",
    englishName: "Sunita Devi",
    village: "Kishanganj, Uttar Pradesh",
    story: "Through SatyaSetu, I learned about PM-KISAN scheme and successfully applied. Now I receive ₹6,000 annually for my farm.",
    hindiStory: "सत्यसेतु के माध्यम से मैंने PM-KISAN योजना के बारे में सीखा और सफलतापूर्वक आवेदन किया। अब मुझे अपने खेत के लिए सालाना ₹6,000 मिलते हैं।",
    impact: "₹6,000/year benefit",
    category: "Government Scheme",
    image: "👩‍🌾"
  },
  {
    name: "अमित शर्मा",
    englishName: "Amit Sharma",
    village: "Begusarai, Bihar",
    story: "As a young volunteer, I use SatyaSetu to educate my community about digital safety. We've helped 50+ families avoid online fraud.",
    hindiStory: "एक युवा स्वयंसेवक के रूप में, मैं अपने समुदाय को डिजिटल सुरक्षा के बारे में शिक्षित करने के लिए सत्यसेतु का उपयोग करता हूं। हमने 50+ परिवारों को ऑनलाइन धोखाधड़ी से बचने में मदद की है।",
    impact: "50+ families helped",
    category: "Community Impact",
    image: "👨‍💻"
  },
  {
    name: "लक्ष्मी मां",
    englishName: "Lakshmi Maa",
    village: "Samastipur, Bihar",
    story: "At 65, I learned to use WhatsApp safely through SatyaSetu's simple tutorials. Now I can connect with my children without worry.",
    hindiStory: "65 की उम्र में, मैंने सत्यसेतु के सरल ट्यूटोरियल के माध्यम से व्हाट्सऐप को सुरक्षित रूप से उपयोग करना सीखा। अब मैं बिना चिंता के अपने बच्चों से जुड़ सकती हूं।",
    impact: "Digital inclusion",
    category: "Digital Literacy",
    image: "👵"
  }
];

const CommunityStories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Community Stories / समुदायिक कहानियां
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have benefited from SatyaSetu. 
            See how digital literacy is transforming rural communities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="hover:shadow-xl transition-all bg-white border-0">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{story.image}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-900">
                      {story.name}
                      <div className="text-sm font-normal text-gray-600 mt-1">
                        {story.englishName}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600 mt-2">
                      📍 {story.village}
                    </CardDescription>
                    <div className="flex gap-2 mt-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                        {story.category}
                      </Badge>
                      <Badge variant="outline" className="text-green-700 border-green-200">
                        {story.impact}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    "{story.story}"
                  </blockquote>
                  <blockquote className="text-gray-600 leading-relaxed text-sm border-l-2 border-primary/30 pl-4">
                    "{story.hindiStory}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-white to-gray-50 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Share Your Story / अपनी कहानी साझा करें
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Have you been helped by SatyaSetu? Share your experience to inspire others in your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                  Submit Story / कहानी भेजें
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors font-semibold">
                  Record Voice Message / वॉयस संदेश रिकॉर्ड करें
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;
