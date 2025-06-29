
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Check } from "lucide-react";

const schemes = [
  {
    category: "Health / स्वास्थ्य",
    color: "bg-red-100 text-red-800",
    schemes: [
      {
        name: "Ayushman Bharat",
        hindi: "आयुष्मान भारत",
        description: "Free healthcare coverage up to ₹5 lakhs per family per year",
        hindiDesc: "प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त स्वास्थ्य कवरेज",
        eligibility: "All families below poverty line",
        documents: ["Aadhaar Card", "Ration Card", "Income Certificate"]
      },
      {
        name: "Janani Suraksha Yojana",
        hindi: "जननी सुरक्षा योजना",
        description: "Cash assistance for institutional delivery",
        hindiDesc: "संस्थागत प्रसव के लिए नकद सहायता",
        eligibility: "Pregnant women from BPL families",
        documents: ["Aadhaar Card", "Pregnancy Card", "Bank Details"]
      }
    ]
  },
  {
    category: "Agriculture / कृषि",
    color: "bg-green-100 text-green-800",
    schemes: [
      {
        name: "PM-KISAN",
        hindi: "प्रधानमंत्री किसान सम्मान निधि",
        description: "₹6,000 per year direct cash transfer to farmers",
        hindiDesc: "किसानों को प्रति वर्ष ₹6,000 की प्रत्यक्ष नकद सहायता",
        eligibility: "All small and marginal farmers",
        documents: ["Land Records", "Aadhaar Card", "Bank Account Details"]
      },
      {
        name: "Crop Insurance",
        hindi: "फसल बीमा योजना",
        description: "Insurance coverage for crop losses",
        hindiDesc: "फसल नुकसान के लिए बीमा कवरेज",
        eligibility: "All farmers",
        documents: ["Land Documents", "Sowing Certificate", "Bank Details"]
      }
    ]
  },
  {
    category: "Education / शिक्षा",
    color: "bg-blue-100 text-blue-800",
    schemes: [
      {
        name: "Mid Day Meal",
        hindi: "मध्याह्न भोजन योजना",
        description: "Free nutritious meals for school children",
        hindiDesc: "स्कूली बच्चों के लिए मुफ्त पौष्टिक भोजन",
        eligibility: "All school children (Classes I-VIII)",
        documents: ["School Admission Certificate"]
      },
      {
        name: "Scholarship for Girls",
        hindi: "बालिका छात्रवृत्ति",
        description: "Financial assistance for girl students",
        hindiDesc: "छात्राओं के लिए वित्तीय सहायता",
        eligibility: "Girl students from economically weaker sections",
        documents: ["Mark Sheets", "Income Certificate", "Bank Details"]
      }
    ]
  }
];

const GovernmentSchemes = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Government Schemes / सरकारी योजनाएं
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access verified information about government schemes in health, agriculture, education, and welfare. 
            Know your rights and benefits.
          </p>
        </div>

        <div className="space-y-8">
          {schemes.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                <Badge className={category.color}>{category.schemes.length} Schemes</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.schemes.map((scheme, schemeIndex) => (
                  <Card key={schemeIndex} className="hover:shadow-lg transition-shadow border-l-4 border-primary">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {scheme.name}
                        <div className="text-lg font-normal text-primary mt-1">{scheme.hindi}</div>
                      </CardTitle>
                      <CardDescription className="text-base">
                        <div>{scheme.description}</div>
                        <div className="mt-1 text-gray-600">{scheme.hindiDesc}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Eligibility / पात्रता:</h5>
                        <p className="text-gray-700">{scheme.eligibility}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Required Documents / आवश्यक दस्तावेज:</h5>
                        <ul className="space-y-1">
                          {scheme.documents.map((doc, docIndex) => (
                            <li key={docIndex} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1">
                          Apply Now / आवेदन करें
                        </Button>
                        <Button variant="outline" className="flex-1">
                          More Info / जानकारी
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentSchemes;
