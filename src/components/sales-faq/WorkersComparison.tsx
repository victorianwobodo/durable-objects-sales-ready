
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WorkersComparison = () => {
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

  return (
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
  );
};

export default WorkersComparison;
