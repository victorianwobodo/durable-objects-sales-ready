
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Sales Enablement Guide</Badge>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Durable Objects
        <span className="block text-blue-600">Sales FAQ</span>
      </h1>
      <div className="max-w-4xl mx-auto mb-6">
        <p className="text-lg text-gray-800 font-medium leading-relaxed mb-4">
          Modern applications need real-time coordination, but traditional databases and caching layers create bottlenecks, 
          increase costs, and fail at scale. Companies waste months building complex infrastructure just to handle 
          collaborative features, live updates, and stateful interactions. Durable Objects eliminate this complexity 
          by providing instant, globally-distributed state management that scales automatically—letting your customers 
          focus on building features that drive revenue, not wrestling with infrastructure.
        </p>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Everything you need to confidently sell the future of real-time applications. 
        Turn technical capabilities into compelling business value.
      </p>
    </div>
  );
};

export default HeroSection;
