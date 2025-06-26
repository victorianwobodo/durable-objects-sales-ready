
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
