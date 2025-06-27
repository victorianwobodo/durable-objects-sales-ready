
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, DollarSign, Clock, Database, Globe, Lock, Cpu, HardDrive } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Single-Threaded Execution & Strong Consistency",
      description: "Each Durable Object instance runs on a single isolate with exclusive access to its state, eliminating race conditions and ensuring perfect data consistency through JavaScript's single-threaded nature",
      enablesUseCases: [
        "Chat apps: Messages appear in exact order for all users",
        "Financial trading: Prevents double-spending and ensures accurate balances",
        "Collaborative editing: No conflicting edits or data corruption",
        "Auctions: Bids processed in correct sequence"
      ],
      businessImpact: "Eliminates expensive conflict resolution logic and data corruption bugs - reduces development time by 60-80%",
      technicalDetail: "Enabled by: V8 isolates + exclusive object ownership + JavaScript's event loop architecture"
    },
    {
      icon: <Cpu className="h-6 w-6 text-emerald-600" />,
      title: "In-Memory State Management",
      description: "Objects maintain state directly in memory variables that persist across requests within the same instance, providing instant access without database queries",
      enablesUseCases: [
        "Chat rooms: Keep active user lists and typing indicators in memory",
        "Gaming: Maintain real-time game state and player positions",
        "Live collaboration: Store cursor positions and active selections",
        "Session management: Keep user authentication state readily available"
      ],
      businessImpact: "Reduces response times by 90-95% compared to database lookups - enables real-time features impossible with stateless functions",
      technicalDetail: "Enabled by: Instance lifetime management + memory persistence across requests + automatic hibernation"
    },
    {
      icon: <HardDrive className="h-6 w-6 text-purple-600" />,
      title: "Transactional Storage API",
      description: "Built-in persistent storage with ACID transactions, supporting both key-value operations and SQL queries for complex data operations",
      enablesUseCases: [
        "Financial apps: Atomic money transfers between accounts",
        "Inventory systems: Prevent overselling during flash sales",
        "Chat history: Reliably store message history with metadata",
        "Voting systems: Ensure each vote counted exactly once"
      ],
      businessImpact: "Guarantees data integrity without complex distributed transaction coordination - eliminates data corruption risks",
      technicalDetail: "Enabled by: SQLite integration + ACID transactions + automatic persistence + conflict-free storage operations"
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
      businessImpact: "Zero DevOps overhead - no server provisioning, scaling decisions, or capacity planning required",
      technicalDetail: "Enabled by: Dynamic instance creation + load-based scaling + automatic migration + global distribution"
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
      businessImpact: "Sub-100ms response times globally without complex multi-region deployment",
      technicalDetail: "Enabled by: 300+ global edge locations + automatic geo-routing + instance migration + smart placement"
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
      businessImpact: "Eliminates need for separate WebSocket infrastructure and connection management complexity",
      technicalDetail: "Enabled by: Native WebSocket API + persistent connections + request multiplexing + connection state management"
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
      businessImpact: "Pay only for active usage while maintaining instant responsiveness - up to 90% cost reduction vs always-on servers",
      technicalDetail: "Enabled by: Automatic state serialization + instant deserialization + smart eviction policies + usage-based billing"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
      title: "Integrated with Cloudflare Workers",
      description: "Seamlessly work with Workers for stateless operations, creating a complete serverless platform",
      enablesUseCases: [
        "Chat apps: Workers handle authentication, Durable Objects manage chat state",
        "E-commerce: Workers process payments, Durable Objects manage cart state",
        "APIs: Workers for transformations, Durable Objects for coordination",
        "Analytics: Workers collect data, Durable Objects aggregate metrics"
      ],
      businessImpact: "Single platform for entire application stack - reduces vendor complexity and integration overhead",
      technicalDetail: "Enabled by: Shared runtime environment + seamless inter-service communication + unified deployment + shared networking"
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
                  
                  <div className="bg-blue-50 rounded p-3 border border-blue-200 mb-4">
                    <h4 className="font-semibold text-blue-800 text-sm mb-1">Technical Implementation</h4>
                    <p className="text-blue-700 text-xs leading-relaxed">{feature.technicalDetail}</p>
                  </div>
                  
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
                      <div key={i} className="flex items-start gap-3 p-3 bg-indigo-50 rounded border border-indigo-200">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-indigo-800 text-sm font-medium">
                          {useCase.split(':')[0]}:
                        </span>
                        <span className="text-indigo-700 text-sm">
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
                <span className="text-purple-700 ml-2">Hibernated object wakes instantly, WebSocket connects, in-memory state loads active users</span>
              </div>
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Message sent:</span>
                <span className="text-purple-700 ml-2">Single-threaded processing ensures order, in-memory state updates instantly, storage API persists to disk</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Global users:</span>
                <span className="text-purple-700 ml-2">Edge deployment provides low latency, automatic instance management handles scaling</span>
              </div>
              <div className="bg-white/80 rounded p-3">
                <span className="font-semibold text-purple-800">Integration:</span>
                <span className="text-purple-700 ml-2">Workers handle auth/routing, Durable Objects manage chat state coordination</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturesSection;
