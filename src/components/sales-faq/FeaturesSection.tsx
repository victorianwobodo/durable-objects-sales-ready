
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, DollarSign, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Strong Consistency",
      description: "Guaranteed data consistency across all operations - no race conditions or data corruption"
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: "Stateful Compute",
      description: "Keep data in memory between requests for lightning-fast access and complex operations"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Real-time Coordination",
      description: "Enable multiple users to collaborate in real-time with automatic conflict resolution"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-orange-600" />,
      title: "Automatic Scaling",
      description: "Scale from zero to millions of objects instantly based on demand"
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Global Distribution",
      description: "Automatically distributed worldwide for lowest latency to your users"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          Durable Objects Features
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Powerful capabilities that enable next-generation applications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-white/80 to-gray-50/80 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                {feature.icon}
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
