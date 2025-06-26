import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, Clock, Shield, Zap, Users } from "lucide-react";

const Index = () => {
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

  const workerComparison = [
    {
      aspect: "State Management",
      worker: "Stateless - no memory between requests",
      durableObject: "Stateful - maintains data in memory",
      advantage: "durable"
    },
    {
      aspect: "Data Consistency",
      worker: "No guarantees across multiple instances",
      durableObject: "Strong consistency guaranteed",
      advantage: "durable"
    },
    {
      aspect: "Real-time Features",
      worker: "Limited - requires external coordination",
      durableObject: "Native support for WebSockets & real-time",
      advantage: "durable"
    },
    {
      aspect: "Scaling Model",
      worker: "Unlimited parallel execution",
      durableObject: "One instance per object globally",
      advantage: "worker"
    },
    {
      aspect: "Use Case",
      worker: "API endpoints, transformations, routing",
      durableObject: "Chat, gaming, collaboration, counters",
      advantage: "both"
    },
    {
      aspect: "Cold Start",
      worker: "Extremely fast (< 1ms)",
      durableObject: "Fast but slightly slower due to state",
      advantage: "worker"
    }
  ];

  const decisionTree = [
    {
      question: "Do you need to maintain state between requests?",
      workerAnswer: "No - Each request is independent",
      durableAnswer: "Yes - Need to remember data across requests",
      examples: {
        worker: "API transformations, content delivery, routing",
        durable: "User sessions, shopping carts, game state"
      }
    },
    {
      question: "Do you need real-time collaboration features?",
      workerAnswer: "No - Simple request/response pattern",
      durableAnswer: "Yes - Multiple users interacting simultaneously",
      examples: {
        worker: "Static site generation, image optimization",
        durable: "Live chat, collaborative editing, multiplayer games"
      }
    },
    {
      question: "Do you need strong data consistency?",
      workerAnswer: "No - Eventually consistent is fine",
      durableAnswer: "Yes - Data must be immediately consistent",
      examples: {
        worker: "Analytics collection, logging, caching",
        durable: "Financial transactions, voting systems, inventory"
      }
    },
    {
      question: "How many concurrent users per 'thing'?",
      workerAnswer: "Many users, independent operations",
      durableAnswer: "Many users, shared state/coordination",
      examples: {
        worker: "Public API endpoints, CDN functions",
        durable: "Chat rooms, game lobbies, auction systems"
      }
    }
  ];

  const faqs = [
    {
      question: "What business problems do Durable Objects solve?",
      answer: "Durable Objects solve critical business challenges that cost companies millions: slow user experiences that drive customers away, expensive infrastructure that doesn't scale efficiently, and complex real-time features that take months to build. They enable businesses to deliver instant, collaborative experiences like live chat, real-time analytics, gaming, and IoT applications that keep customers engaged and drive revenue growth."
    },
    {
      question: "How do Durable Objects reduce our total cost of ownership?",
      answer: "Traditional solutions require expensive database clusters, complex caching layers, and multiple servers across regions - often costing $50K-500K+ annually. Durable Objects eliminate most of this infrastructure by combining compute and storage in a single, globally distributed solution. Customers typically see 50-70% reduction in infrastructure costs while getting better performance and easier maintenance."
    },
    {
      question: "What's the competitive advantage for our customers?",
      answer: "Durable Objects give your customers a significant competitive edge: they can launch real-time features 5-10x faster than competitors, deliver sub-10ms response times globally (vs 100-500ms for traditional solutions), and scale seamlessly from 100 to 100 million users. This means faster time-to-market, better user experiences, and the ability to capture market share while competitors struggle with slow, expensive solutions."
    },
    {
      question: "How complex is it to implement compared to alternatives?",
      answer: "This is where Durable Objects shine for sales conversations. Traditional real-time systems require teams to manage databases, caching layers, message queues, and complex synchronization - often taking 6-12 months and requiring specialized expertise. Durable Objects reduce this to weeks with standard web development skills. Your customers can redirect their expensive senior engineering resources to revenue-generating features instead of infrastructure maintenance."
    },
    {
      question: "What types of applications are perfect for Durable Objects?",
      answer: "Focus on high-value use cases that directly impact revenue: collaborative tools (like Google Docs), live customer support chat, real-time gaming and betting, IoT device management, live auctions, financial trading platforms, and social media features. These applications typically generate millions in revenue but are notoriously difficult and expensive to build reliably - until now."
    },
    {
      question: "How do we position this against traditional databases and Redis?",
      answer: "Traditional databases and Redis require complex architectures with multiple moving parts, expensive specialists to maintain them, and significant operational overhead. They also can't guarantee data consistency across global users without major performance penalties. Durable Objects provide the performance of Redis, the consistency of databases, and the global reach of CDNs - all in one simple solution that any web developer can use."
    },
    {
      question: "What's the ROI customers can expect?",
      answer: "Customers typically see ROI within 3-6 months through: 50-70% reduction in infrastructure costs, 80% reduction in development time for real-time features, improved user engagement (leading to higher retention and revenue), and elimination of expensive database specialists. For a mid-size company, this often translates to $200K-2M in annual savings while enabling new revenue streams."
    },
    {
      question: "How do we handle concerns about vendor lock-in?",
      answer: "Durable Objects use standard JavaScript/TypeScript and web APIs - skills every development team already has. The business logic isn't tied to proprietary formats, and the development patterns are transferable. More importantly, the competitive advantages and cost savings are so significant that customers quickly realize the 'risk' of lock-in is far outweighed by the risk of falling behind competitors who are moving faster with modern solutions."
    },
    {
      question: "What enterprise features and guarantees do we offer?",
      answer: "Enterprise customers get: 99.99% uptime SLA with automatic failover, SOC 2 Type II compliance, GDPR compliance, 24/7 enterprise support, custom contracts with volume discounts, and dedicated customer success managers. We also provide migration assistance and architectural consulting to ensure success from day one."
    },
    {
      question: "How do we qualify and size opportunities?",
      answer: "Look for companies with: real-time or collaborative features in their roadmap, current infrastructure costs over $20K/month, development teams spending significant time on scalability issues, or businesses losing customers due to slow/unreliable experiences. Start conversations around their current pain points with user engagement, infrastructure costs, or development velocity - then show how Durable Objects solve these specific problems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Sales Enablement Guide</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Durable Objects
            <span className="block text-blue-600">Sales FAQ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to confidently sell the future of real-time applications. 
            Turn technical capabilities into compelling business value.
          </p>
        </div>

        {/* Key Benefits */}
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

        {/* Features Section */}
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

        {/* Workers vs Durable Objects Comparison */}
        <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Workers vs Durable Objects
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Understanding when to use each technology
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-left py-4 px-4 font-semibold text-blue-600">Cloudflare Workers</th>
                    <th className="text-left py-4 px-4 font-semibold text-purple-600">Durable Objects</th>
                  </tr>
                </thead>
                <tbody>
                  {workerComparison.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="py-4 px-4 font-medium text-gray-900">{row.aspect}</td>
                      <td className={`py-4 px-4 text-sm ${row.advantage === 'worker' ? 'bg-blue-50 font-medium text-blue-800' : 'text-gray-600'} rounded-l`}>
                        {row.worker}
                      </td>
                      <td className={`py-4 px-4 text-sm ${row.advantage === 'durable' ? 'bg-purple-50 font-medium text-purple-800' : 'text-gray-600'} rounded-r`}>
                        {row.durableObject}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Decision Tree */}
        <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Decision Tree: Which Should You Choose?
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Ask these questions to guide your customers to the right solution
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {decisionTree.map((decision, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {decision.question}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Workers Side */}
                    <div className="bg-blue-100 rounded-lg p-4 border-l-4 border-blue-600">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Choose Workers
                      </h4>
                      <p className="text-blue-700 mb-3">{decision.workerAnswer}</p>
                      <div className="text-sm">
                        <span className="font-medium text-blue-800">Examples: </span>
                        <span className="text-blue-600">{decision.examples.worker}</span>
                      </div>
                    </div>

                    {/* Durable Objects Side */}
                    <div className="bg-purple-100 rounded-lg p-4 border-l-4 border-purple-600">
                      <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Choose Durable Objects
                      </h4>
                      <p className="text-purple-700 mb-3">{decision.durableAnswer}</p>
                      <div className="text-sm">
                        <span className="font-medium text-purple-800">Examples: </span>
                        <span className="text-purple-600">{decision.examples.durable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Quick Summary
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-green-800">Use Workers for: </span>
                  <span className="text-green-700">Stateless operations, APIs, transformations, high-scale parallel processing</span>
                </div>
                <div>
                  <span className="font-medium text-green-800">Use Durable Objects for: </span>
                  <span className="text-green-700">Stateful applications, real-time features, data consistency, user coordination</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="bg-white/90 backdrop-blur border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Master these answers to close more deals and build customer confidence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-white/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6 pl-8 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Drive Revenue?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Use these insights to identify high-value prospects and close deals faster
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Access Sales Materials
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo Training
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
