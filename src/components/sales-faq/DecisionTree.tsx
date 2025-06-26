
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Shield } from "lucide-react";

const DecisionTree = () => {
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

  return (
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
  );
};

export default DecisionTree;
