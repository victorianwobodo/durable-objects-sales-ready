
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, Shield, Zap, Users, TrendingUp } from "lucide-react";

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Reduce Infrastructure Costs by 70%",
      description: "Eliminate expensive database clusters, reduce server provisioning, and cut operational overhead with automatic scaling"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Launch Real-Time Features 10x Faster",
      description: "Deploy collaborative editing, live chat, and interactive features in days instead of months of complex infrastructure work"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
      title: "Increase User Engagement by 40-60%",
      description: "Real-time collaboration and instant updates keep users active longer and reduce churn significantly"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Guarantee 99.99% Uptime",
      description: "Enterprise-grade reliability with automatic failover, data consistency, and zero-downtime deployments"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Deliver Sub-10ms Performance",
      description: "Lightning-fast response times globally with edge computing that automatically routes to the nearest data center"
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Scale to Millions of Users Instantly",
      description: "Handle massive traffic spikes without pre-planning or over-provisioning—pay only for what you use"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Business Benefits That Drive Revenue
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Quantifiable advantages that directly impact your customers' bottom line and competitive position
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          Sales Impact Summary
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="font-bold text-green-600 text-2xl">70%</div>
            <div className="text-gray-700">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-blue-600 text-2xl">10x</div>
            <div className="text-gray-700">Faster Development</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 text-2xl">60%</div>
            <div className="text-gray-700">Higher Engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;
