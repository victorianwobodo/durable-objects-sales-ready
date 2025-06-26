
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, Shield, Zap, Users } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Reduce Infrastructure Costs",
      description: "Eliminate expensive database clusters and reduce server costs by up to 70%"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Faster Time to Market",
      description: "Deploy real-time features in days, not months"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Enterprise-Grade Reliability",
      description: "99.99% uptime with automatic failover and data consistency"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Lightning-Fast Performance",
      description: "Sub-10ms response times globally with edge computing"
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: "Scale to Millions",
      description: "Handle millions of concurrent users without breaking a sweat"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {benefits.map((benefit, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              {benefit.icon}
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">{benefit.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BenefitsGrid;
