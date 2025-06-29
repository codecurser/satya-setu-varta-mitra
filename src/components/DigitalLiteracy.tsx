
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Check } from "lucide-react";

const topics = [
  {
    title: "Identifying Fake News",
    hindi: "झूठी खबरों की पहचान",
    icon: "🔍",
    level: "Beginner",
    duration: "5 mins",
    tips: [
      "Check the source - is it from a trusted news website?",
      "Look for grammatical errors and emotional language",
      "Verify with multiple sources before sharing",
      "Be skeptical of sensational headlines"
    ],
    hindiTips: [
      "स्रोत की जांच करें - क्या यह विश्वसनीय न्यूज़ साइट से है?",
      "व्याकरण की त्रुटियों और भावनात्मक भाषा को देखें",
      "साझा करने से पहले कई स्रोतों से सत्यापित करें",
      "सनसनीखेज शीर्षकों पर संदेह करें"
    ]
  },
  {
    title: "WhatsApp Safety",
    hindi: "व्हाट्सऐप सुरक्षा",
    icon: "💬",
    level: "Beginner",
    duration: "7 mins",
    tips: [
      "Don't share personal information with strangers",
      "Verify forwarded messages before sharing",
      "Use two-step verification for account security",
      "Be cautious with links from unknown senders"
    ],
    hindiTips: [
      "अजनबियों के साथ व्यक्तिगत जानकारी साझा न करें",
      "अग्रेषित संदेशों को साझा करने से पहले सत्यापित करें",
      "खाता सुरक्षा के लिए दो-चरणीय सत्यापन का उपयोग करें",
      "अज्ञात भेजने वालों के लिंक से सावधान रहें"
    ]
  },
  {
    title: "Online Financial Safety",
    hindi: "ऑनलाइन वित्तीय सुरक्षा",
    icon: "💰",
    level: "Intermediate",
    duration: "10 mins",
    tips: [
      "Never share OTP, PIN, or bank details with anyone",
      "Government schemes never ask for money via WhatsApp",
      "Always verify bank calls through official numbers",
      "Use only official apps for banking and payments"
    ],
    hindiTips: [
      "कभी भी OTP, PIN या बैंक विवरण किसी के साथ साझा न करें",
      "सरकारी योजनाएं कभी व्हाट्सऐप के माध्यम से पैसे नहीं मांगती",
      "हमेशा आधिकारिक नंबरों के माध्यम से बैंक कॉल सत्यापित करें",
      "बैंकिंग और भुगतान के लिए केवल आधिकारिक ऐप्स का उपयोग करें"
    ]
  },
  {
    title: "Social Media Awareness",
    hindi: "सोशल मीडिया जागरूकता",
    icon: "📱",
    level: "Intermediate",
    duration: "8 mins",
    tips: [
      "Think before you post or share",
      "Respect others' privacy and opinions",
      "Report inappropriate content",
      "Understand privacy settings on your accounts"
    ],
    hindiTips: [
      "पोस्ट या साझा करने से पहले सोचें",
      "दूसरों की निजता और राय का सम्मान करें",
      "अनुचित सामग्री की रिपोर्ट करें",
      "अपने खातों पर गोपनीयता सेटिंग्स को समझें"
    ]
  }
];

const DigitalLiteracy = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Digital Literacy / डिजिटल साक्षरता
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn essential digital skills to stay safe online. Practical tips and guidance 
            for secure internet usage, especially designed for rural communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-all border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{topic.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-base text-primary font-medium">
                        {topic.hindi}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="text-xs">
                      {topic.level}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {topic.duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Key Points:</h5>
                  <ul className="space-y-2">
                    {topic.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div>{tip}</div>
                          <div className="text-gray-600 mt-1">{topic.hindiTips[tipIndex]}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learn More / और जानें
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Practice / अभ्यास करें
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Need Help? / सहायता चाहिए?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Connect with our community volunteers for personalized digital literacy support
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Volunteer / स्वयंसेवक से संपर्क करें
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DigitalLiteracy;
