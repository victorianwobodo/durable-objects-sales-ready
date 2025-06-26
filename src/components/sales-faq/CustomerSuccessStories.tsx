
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Trophy, Sparkles, TrendingUp, Globe } from "lucide-react";

const CustomerSuccessStories = () => {
  const customerWinStories = [
    {
      company: "Major League Baseball (MLB)",
      industry: "Sports & Entertainment",
      logo: "🏟️",
      challenge: "Needed to deliver real-time baseball statistics, live game updates, and interactive fan experiences to millions of concurrent users during peak games without latency or downtime",
      solution: "Implemented Durable Objects to manage real-time game state, player statistics, and fan interactions across multiple concurrent games",
      results: [
        "Handles millions of concurrent users during World Series without performance degradation",
        "Reduced latency for live statistics from 2-3 seconds to under 100ms",
        "Eliminated expensive database scaling infrastructure",
        "Enabled new interactive fan features that increased engagement by 45%"
      ],
      businessImpact: "Significantly improved fan experience leading to higher digital engagement and premium subscription conversions",
      salesTakeaway: "Perfect example for sports, gaming, and entertainment companies needing real-time fan engagement at massive scale",
      useCaseCategory: "Real-time Sports Analytics & Fan Engagement"
    },
    {
      company: "Contentful (formerly Ninetailed)",
      industry: "Content Management & Personalization",
      logo: "🎯",
      challenge: "Building a real-time personalization engine that could deliver personalized content experiences instantly while maintaining consistency across multiple touchpoints",
      solution: "Used Durable Objects to maintain user personalization state and coordinate real-time content delivery across different channels and devices",
      results: [
        "Achieved sub-50ms personalization response times globally",
        "Reduced infrastructure costs by 60% compared to traditional microservices architecture",
        "Enabled real-time A/B testing with instant result compilation",
        "Scaled to handle 10M+ personalization requests per day seamlessly"
      ],
      businessImpact: "Enabled enterprise customers to increase conversion rates by 25-40% through instant personalization",
      salesTakeaway: "Ideal for MarTech, e-commerce personalization, and content management platforms requiring real-time user state",
      useCaseCategory: "Real-time Personalization & Content Management"
    },
    {
      company: "LiveBlocks",
      industry: "Developer Tools & Collaboration",
      logo: "🔗",
      challenge: "Providing developers with real-time collaboration infrastructure that could handle complex state synchronization for collaborative applications like design tools and document editors",
      solution: "Built their entire collaboration platform on Durable Objects to manage document state, user presence, and conflict resolution in real-time",
      results: [
        "Powers collaborative editing for thousands of applications",
        "Achieved 99.99% uptime with automatic state consistency",
        "Reduced development complexity for customers by 80%",
        "Scaled from startup to enterprise customers seamlessly"
      ],
      businessImpact: "Became the go-to collaboration infrastructure for modern SaaS applications, enabling their customers to add Google Docs-style collaboration",
      salesTakeaway: "Perfect reference for developer tool companies and B2B SaaS platforms adding collaborative features",
      useCaseCategory: "Developer Infrastructure & Real-time Collaboration"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-600" />
          Customer Success Stories
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Real companies achieving breakthrough results with Durable Objects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {customerWinStories.map((story, index) => (
            <div key={index} className="bg-gradient-to-r from-green-50 via-white to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Company Overview */}
                <div className="lg:col-span-1">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{story.logo}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.company}</h3>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                      {story.industry}
                    </Badge>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-4 border border-green-300">
                    <h4 className="font-semibold text-green-800 mb-2">Use Case Type</h4>
                    <p className="text-green-700 text-sm">{story.useCaseCategory}</p>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        The Challenge
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed bg-red-50 p-4 rounded-lg border border-red-200">
                        {story.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        The Solution
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed bg-blue-50 p-4 rounded-lg border border-blue-200">
                        {story.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results & Impact */}
                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Key Results
                      </h4>
                      <ul className="space-y-2">
                        {story.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-green-700">
                            <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
                      <h5 className="font-semibold text-yellow-800 mb-2 text-sm">Business Impact</h5>
                      <p className="text-yellow-700 text-xs leading-relaxed">
                        {story.businessImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Takeaway */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Sales Takeaway
                </h4>
                <p className="text-purple-700 text-sm">{story.salesTakeaway}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Success Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Why These Wins Matter for Your Sales Conversations
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Proven at Scale</h4>
              <p className="text-blue-700">These companies handle millions of users, proving Durable Objects work for enterprise-scale applications</p>
            </div>
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Measurable ROI</h4>
              <p className="text-blue-700">Clear metrics on cost reduction, performance improvement, and business impact you can reference</p>
            </div>
            <div className="bg-white/80 rounded p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Diverse Use Cases</h4>
              <p className="text-blue-700">From sports to collaboration to personalization - shows versatility across industries</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSuccessStories;
