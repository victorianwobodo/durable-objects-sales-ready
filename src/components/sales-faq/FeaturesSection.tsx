
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, DollarSign, Clock, Database, Globe, Lock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Single-Threaded Execution & Strong Consistency",
      description: "Each Durable Object instance runs in a single thread, eliminating race conditions and ensuring perfect data consistency",
      enablesUseCases: [
        "Chat apps: Messages appear in exact order for all users",
        "Financial trading: Prevents double-spending and ensures accurate balances",
        "Collaborative editing: No conflicting edits or data corruption",
        "Auctions: Bids processed in correct sequence"
      ],
      businessImpact: "Eliminates expensive conflict resolution logic and data corruption bugs"
    },
    {
      icon: <Database className="h-6 w-6 text-purple-600" />,
      title: "Persistent State Between Requests",
      description: "Objects maintain state in memory and automatically persist to disk, surviving across requests and restarts",
      enablesUseCases: [
        "Chat rooms: Keep conversation history and user presence",
        "Gaming: Maintain game state, player progress, and leaderboards",
        "Shopping carts: Remember items across sessions",
        "Collaboration: Preserve document state and edit history"
      ],
      businessImpact: "Reduces database queries by 80-90% and enables real-time features impossible with stateless functions"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Automatic Instance Management",
      description: "Cloudflare automatically creates, scales, and migrates instances based on demand without configuration",
      enablesUseCases: [
        "Chat apps: New chat rooms created instantly when needed",
        "Gaming: Game lobbies spawn automatically for players",
        "IoT: Device objects created as sensors come online",
        "Events: Handle traffic spikes during viral moments"
      ],
      businessImpact: "Zero DevOps overhead - no server provisioning, scaling decisions, or capacity planning required"
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-600" />,
      title: "Global Distribution & Edge Deployment",
      description: "Objects automatically distributed to Cloudflare's global network, closest to users",
      enablesUseCases: [
        "Global chat: Low latency messaging worldwide",
        "Multi-region gaming: Players connect to nearest game servers",
        "IoT coordination: Edge processing near device clusters",
        "Financial trading: Reduced latency for high-frequency trading"
      ],
      businessImpact: "Sub-100ms response times globally without complex multi-region deployment"
    },
    {
      icon: <Zap className="h-6 w-6 text-red-600" />,
      title: "WebSocket & HTTP Support",
      description: "Native support for persistent WebSocket connections alongside standard HTTP requests",
      enablesUseCases: [
        "Real-time chat: Instant message delivery via WebSockets",
        "Live collaboration: Real-time cursor tracking and edits",
        "Gaming: Low-latency player actions and game updates",
        "Live dashboards: Push updates without polling"
      ],
      businessImpact: "Eliminates need for separate WebSocket infrastructure and connection management complexity"
    },
    {
      icon: <Lock className="h-6 w-6 text-indigo-600" />,
      title: "Transactional Storage API",
      description: "Built-in transactional storage with both key-value and SQL options for complex data operations",
      enablesUseCases: [
        "Financial apps: Atomic money transfers between accounts",
        "Inventory systems: Prevent overselling during flash sales",
        "Voting systems: Ensure each vote counted exactly once",
        "Collaborative docs: Atomic operations on shared documents"
      ],
      businessImpact: "Guarantees data integrity without complex distributed transaction coordination"
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      title: "Hibernation & Wake-on-Demand",
      description: "Objects hibernate when inactive and instantly wake when needed, optimizing costs and performance",
      enablesUseCases: [
        "Chat rooms: Dormant rooms consume no resources until users join",
        "Gaming: Game instances only active during play sessions",
        "User sessions: Personal state objects wake when user returns",
        "IoT devices: Object activates only when device sends data"
      ],
      businessImpact: "Pay only for active usage while maintaining instant responsiveness - up to 90% cost reduction vs always-on servers"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-emerald-600" />,
      title: "Integrated with Cloudflare Workers",
      description: "Seamlessly work with Workers for stateless operations, creating a complete serverless platform",
      enablesUseCases: [
        "Chat apps: Workers handle authentication, Durable Objects manage chat state",
        "E-commerce: Workers process payments, Durable Objects manage cart state",
        "APIs: Workers for transformations, Durable Objects for coordination",
        "Analytics: Workers collect data, Durable Objects aggregate metrics"
      ],
      businessImpact: "Single platform for entire application stack - reduces vendor complexity and integration overhead"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          How Durable Objects Enable Real-Time Applications
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          The technical features that make chat apps, gaming, collaboration, and other real-time use cases possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-white/80 to-gray-50/80 rounded-lg border border-gray-200 p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Feature Overview */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  
                  <div className="bg-green-50 rounded p-3 border border-green-200">
                    <h4 className="font-semibold text-green-800 text-sm mb-1">Business Impact</h4>
                    <p className="text-green-700 text-xs leading-relaxed">{feature.businessImpact}</p>
                  </div>
                </div>

                {/* Use Case Examples */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-800 mb-3">How This Enables Real Applications:</h4>
                  <div className="grid gap-3">
                    {feature.enablesUseCases.map((useCase, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-800 text-sm font-medium">
                          {useCase.split(':')[0]}:
                        </span>
                        <span className="text-blue-700 text-sm">
                          {useCase.split(':')[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Combination Example */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            Real Example: How These Features Work Together in a Chat App
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">User joins chat room:</span>
                <span className="text-purple-700 ml-2">Hibernated object wakes instantly, WebSocket connects</span>
              </div>
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Message sent:</span>
                <span className="text-purple-700 ml-2">Single-threaded processing ensures order, persistent state saves history</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Global users:</span>
                <span className="text-purple-700 ml-2">Edge deployment provides low latency worldwide</span>
              </div>
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Scaling:</span>
                <span className="text-purple-700 ml-2">New rooms auto-created, integrated with Workers for auth/routing</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
