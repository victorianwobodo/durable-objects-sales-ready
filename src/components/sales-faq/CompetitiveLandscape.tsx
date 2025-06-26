
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, CheckCircle, AlertTriangle, Shield } from "lucide-react";

const CompetitiveLandscape = () => {
  const competitiveLandscape = [
    {
      category: "Traditional Database + Cache Solutions",
      currentStack: ["PostgreSQL/MySQL + Redis", "MongoDB + Memcached", "Elasticsearch clusters"],
      painPoints: [
        "Complex multi-tier architecture requires specialized DBAs",
        "Cache invalidation and consistency issues",
        "High infrastructure costs ($50K-500K+ annually)",
        "Slow global replication (seconds to minutes)",
        "Manual scaling and maintenance overhead"
      ],
      monthlyCost: "$15K-100K+",
      complexity: "Very High",
      timeToMarket: "6-12 months",
      salesOpportunity: "High - Clear cost and complexity reduction"
    },
    {
      category: "Real-time Platforms",
      currentStack: ["Pusher", "Ably", "Socket.io + Redis", "Firebase Realtime"],
      painPoints: [
        "Limited to simple messaging patterns",
        "No built-in state management or business logic",
        "Expensive per-connection pricing models",
        "Vendor lock-in with proprietary APIs",
        "Still need separate backend for complex logic"
      ],
      monthlyCost: "$5K-50K+",
      complexity: "Medium",
      timeToMarket: "3-6 months",
      salesOpportunity: "Medium - Focus on feature limitations and costs"
    },
    {
      category: "Serverless + External State",
      currentStack: ["AWS Lambda + DynamoDB", "Vercel + PlanetScale", "Netlify + FaunaDB"],
      painPoints: [
        "Cold starts impact user experience",
        "Complex state coordination across functions",
        "Multiple vendor relationships and bills",
        "Limited real-time capabilities",
        "Debugging distributed systems is nightmare"
      ],
      monthlyCost: "$8K-40K+",
      complexity: "High",
      timeToMarket: "4-8 months",
      salesOpportunity: "High - Simplification and performance gains"
    },
    {
      category: "Custom Infrastructure",
      currentStack: ["Kubernetes clusters", "Microservices architecture", "Message queues"],
      painPoints: [
        "Massive engineering overhead and maintenance",
        "Requires DevOps specialists ($150K+ salaries)",
        "Slow iteration due to infrastructure complexity",
        "Scaling challenges and unpredictable costs",
        "Security and compliance burden"
      ],
      monthlyCost: "$30K-200K+",
      complexity: "Extreme",
      timeToMarket: "12+ months",
      salesOpportunity: "Very High - Dramatic simplification opportunity"
    }
  ];

  const salesOpportunityIndicators = [
    {
      signal: "High Infrastructure Costs",
      description: "Customer spending $20K+/month on databases, caching, and messaging infrastructure",
      questions: [
        "What's your current monthly cloud infrastructure spend?",
        "How many database instances are you running globally?",
        "Do you have dedicated DBAs or DevOps engineers?"
      ],
      opportunity: "Show 50-70% cost reduction potential"
    },
    {
      signal: "Real-time Feature Roadblock",
      description: "Customer wants to build collaborative, live, or interactive features but struggling with complexity",
      questions: [
        "What real-time features are on your product roadmap?",
        "How long have these features been planned but not implemented?",
        "What's blocking you from building collaborative features?"
      ],
      opportunity: "Demonstrate rapid real-time feature development"
    },
    {
      signal: "Scaling Pain Points",
      description: "Customer experiencing performance issues, data inconsistency, or complex coordination challenges",
      questions: [
        "Are you experiencing performance bottlenecks as you scale?",
        "Do you have issues with data consistency across regions?",
        "How do you handle coordination between multiple users?"
      ],
      opportunity: "Show automatic scaling and consistency guarantees"
    },
    {
      signal: "Developer Productivity Issues",
      description: "Engineering team spending significant time on infrastructure instead of features",
      questions: [
        "What percentage of engineering time goes to infrastructure vs features?",
        "How long does it take to deploy new real-time features?",
        "Do you have challenges debugging distributed systems?"
      ],
      opportunity: "Highlight development velocity improvements"
    },
    {
      signal: "Multi-vendor Complexity",
      description: "Customer juggling multiple services for database, caching, messaging, and compute",
      questions: [
        "How many different services do you use for your backend?",
        "Do you struggle with vendor management and integration complexity?",
        "Are you dealing with multiple bills and support relationships?"
      ],
      opportunity: "Position unified platform benefits"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          Competitive Landscape & Sales Opportunities
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Understand what customers are using today and how to position Durable Objects as the superior alternative
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Current Customer Environments */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            What Customers Are Using Today
          </h3>
          <div className="grid gap-6">
            {competitiveLandscape.map((competitor, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Current Solution */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      {competitor.category}
                    </h4>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Typical Stack:</span>
                      </div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {competitor.currentStack.map((tech, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pain Points */}
                  <div>
                    <h5 className="font-medium text-red-800 mb-3">Key Pain Points</h5>
                    <ul className="text-sm text-red-700 space-y-2">
                      {competitor.painPoints.map((pain, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sales Opportunity */}
                  <div className="bg-white/80 rounded-lg p-4 border border-red-300">
                    <h5 className="font-medium text-green-800 mb-3">Sales Opportunity</h5>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Monthly Cost: </span>
                        <span className="text-red-600 font-semibold">{competitor.monthlyCost}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Complexity: </span>
                        <span className="text-red-600">{competitor.complexity}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Time to Market: </span>
                        <span className="text-red-600">{competitor.timeToMarket}</span>
                      </div>
                      <div className="pt-2 border-t border-gray-200">
                        <span className="font-medium text-green-700">{competitor.salesOpportunity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Opportunity Indicators */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            How to Identify High-Value Prospects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {salesOpportunityIndicators.map((indicator, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  {indicator.signal}
                </h4>
                <p className="text-green-700 text-sm mb-4">{indicator.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-medium text-green-800 mb-2">Discovery Questions:</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    {indicator.questions.map((question, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        "{question}"
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/80 rounded p-3 border border-green-300">
                  <span className="font-medium text-green-800 text-sm">Sales Approach: </span>
                  <span className="text-green-700 text-sm">{indicator.opportunity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Positioning Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Key Competitive Advantages to Emphasize
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">vs Traditional Databases</h4>
              <p className="text-blue-700">No separate caching layer, automatic global distribution, zero maintenance overhead</p>
            </div>
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">vs Real-time Platforms</h4>
              <p className="text-blue-700">Full application logic support, built-in state management, no per-connection fees</p>
            </div>
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">vs Custom Infrastructure</h4>
              <p className="text-blue-700">Managed service eliminates DevOps overhead, automatic scaling, built-in reliability</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitiveLandscape;
