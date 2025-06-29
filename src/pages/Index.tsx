
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search, Check, Info, BookOpen, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import FactChecker from "@/components/FactChecker";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import DigitalLiteracy from "@/components/DigitalLiteracy";
import CommunityStories from "@/components/CommunityStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Hero />
      <FactChecker />
      <GovernmentSchemes />
      <DigitalLiteracy />
      <CommunityStories />
      <Footer />
    </div>
  );
};

export default Index;
