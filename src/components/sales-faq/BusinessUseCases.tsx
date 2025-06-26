
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, TrendingUp, Building, Users, MessageSquare, Gamepad2, ShoppingCart, BarChart3, Car } from "lucide-react";

const BusinessUseCases = () => {
  const businessUseCases = [
    {
      category: "Real-time Collaboration",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      examples: [
        "Collaborative document editing (Google Docs style)",
        "Real-time design tools and whiteboards",
        "Code collaboration platforms",
        "Project management with live updates"
      ],
      industries: ["SaaS", "EdTech", "Enterprise Software", "Creative Tools"],
      businessValue: "Increase user engagement by 40-60% and reduce churn through seamless collaboration experiences",
      revenueImpact: "$500K-5M+ annual revenue from premium collaboration features"
    },
    {
      category: "Live Chat & Customer Support",
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      examples: [
        "Customer support chat with agent handoffs",
        "Live sales chat with CRM integration",
        "Community forums with real-time discussions",
        "Multi-language support with instant translation"
      ],
      industries: ["E-commerce", "SaaS", "Financial Services", "Healthcare"],
      businessValue: "Improve customer satisfaction scores by 25-35% and increase conversion rates by 15-20%",
      revenueImpact: "$1M-10M+ annual revenue from improved customer experience and sales conversion"
    },
    {
      category: "Gaming & Interactive Entertainment",
      icon: <Gamepad2 className="h-8 w-8 text-purple-600" />,
      examples: [
        "Multiplayer game sessions and tournaments",
        "Real-time betting and prediction markets",
        "Live streaming with interactive features",
        "Virtual events and conferences"
      ],
      industries: ["Gaming", "Sports Betting", "Entertainment", "Events"],
      businessValue: "Increase player retention by 50-70% and average session time by 2-3x",
      revenueImpact: "$2M-50M+ annual revenue from enhanced user engagement and in-app purchases"
    },
    {
      category: "E-commerce & Marketplaces",
      icon: <ShoppingCart className="h-8 w-8 text-orange-600" />,
      examples: [
        "Live auctions with real-time bidding",
        "Flash sales with inventory synchronization",
        "Social shopping with live recommendations",
        "Real-time pricing and availability updates"
      ],
      industries: ["E-commerce", "Marketplaces", "Retail", "Fashion"],
      businessValue: "Increase sales conversion by 20-30% and reduce cart abandonment by 15-25%",
      revenueImpact: "$3M-25M+ annual revenue from improved shopping experiences and urgency-driven purchases"
    },
    {
      category: "Financial Trading & Analytics",
      icon: <BarChart3 className="h-8 w-8 text-red-600" />,
      examples: [
        "Real-time trading platforms and order books",
        "Live financial data feeds and alerts",
        "Risk management with instant calculations",
        "Cryptocurrency trading and DeFi applications"
      ],
      industries: ["FinTech", "Trading", "Banking", "Cryptocurrency"],
      businessValue: "Reduce trading latency by 80-90% and improve execution quality",
      revenueImpact: "$5M-100M+ annual revenue from trading volume and premium features"
    },
    {
      category: "IoT & Smart Systems",
      icon: <Car className="h-8 w-8 text-indigo-600" />,
      examples: [
        "Smart city traffic management systems",
        "Industrial IoT with real-time monitoring",
        "Connected vehicle fleets and logistics",
        "Smart home automation and energy management"
      ],
      industries: ["Smart Cities", "Manufacturing", "Logistics", "Energy"],
      businessValue: "Improve operational efficiency by 30-50% and reduce costs through predictive maintenance",
      revenueImpact: "$10M-500M+ annual savings and new revenue streams from data-driven insights"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          Business Use Cases & Target Industries
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          High-value applications that generate significant revenue and competitive advantage
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {businessUseCases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Use Case Overview */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    {useCase.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.category}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Examples:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Target Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, i) => (
                        <Badge key={i} variant="outline" className="text-xs bg-blue-100 text-blue-800 border-blue-300">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Value */}
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6 h-full">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Business Impact
                      </h4>
                      <p className="text-green-700 text-sm leading-relaxed mb-4">
                        {useCase.businessValue}
                      </p>
                      <div className="bg-white/80 rounded p-3 border border-green-300">
                        <span className="font-medium text-green-800 text-xs">Sales Talking Point: </span>
                        <span className="text-green-700 text-xs">
                          "This directly impacts your bottom line through improved user experience and retention"
                        </span>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        Revenue Opportunity
                      </h4>
                      <p className="text-purple-700 text-sm leading-relaxed mb-4">
                        {useCase.revenueImpact}
                      </p>
                      <div className="bg-white/80 rounded p-3 border border-purple-300">
                        <span className="font-medium text-purple-800 text-xs">ROI Timeline: </span>
                        <span className="text-purple-700 text-xs">
                          "Typical payback period: 3-6 months from launch"
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="h-5 w-5 text-blue-600" />
            Industry Prioritization for Sales Teams
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-100 rounded-lg p-4 border border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Tier 1 - Highest Priority</h4>
              <p className="text-sm text-green-700 mb-2">SaaS, FinTech, Gaming, E-commerce</p>
              <p className="text-xs text-green-600">High willingness to pay, clear ROI, immediate need</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-4 border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-2">Tier 2 - Strong Potential</h4>
              <p className="text-sm text-yellow-700 mb-2">EdTech, Healthcare, Enterprise Software</p>
              <p className="text-xs text-yellow-600">Growing need, longer sales cycles, compliance considerations</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-4 border border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">Tier 3 - Emerging</h4>
              <p className="text-sm text-blue-700 mb-2">Manufacturing, Smart Cities, Energy</p>
              <p className="text-xs text-blue-600">Early adoption phase, large opportunity but longer term</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessUseCases;
