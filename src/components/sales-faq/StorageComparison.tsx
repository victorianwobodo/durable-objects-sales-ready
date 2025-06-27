
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Key, TrendingUp, Users, Clock, Shield } from "lucide-react";

const StorageComparison = () => {
  const storageOptions = [
    {
      type: "KV-Backed Durable Objects",
      icon: <Key className="h-6 w-6 text-blue-600" />,
      description: "Simple key-value storage with automatic persistence",
      strengths: [
        "Extremely fast read/write operations",
        "Simple programming model - just set/get",
        "Automatic persistence to global storage",
        "No schema management required",
        "Perfect for session data and counters"
      ],
      idealFor: [
        "Real-time gaming (player state, leaderboards)",
        "Live chat applications",
        "User session management",
        "Simple counters and metrics",
        "Caching frequently accessed data"
      ],
      businessValue: "Fastest time-to-market for simple real-time features. Minimal development complexity means junior developers can build sophisticated real-time applications.",
      whenToUse: "When you need fast, simple state management without complex relationships"
    },
    {
      type: "SQL-Backed Durable Objects",
      icon: <Database className="h-6 w-6 text-purple-600" />,
      description: "Full SQLite database with ACID transactions and complex queries",
      strengths: [
        "Full SQL query capabilities",
        "ACID transactions for data integrity",
        "Complex relationships and joins",
        "Familiar SQL development patterns",
        "Advanced analytics and reporting"
      ],
      idealFor: [
        "Collaborative document editing",
        "Complex workflow applications",
        "Financial applications requiring transactions",
        "Multi-user project management tools",
        "Applications with complex business logic"
      ],
      businessValue: "Enables complex business applications that previously required expensive database clusters. Developers can use familiar SQL skills while getting global distribution.",
      whenToUse: "When you need complex queries, transactions, or structured data relationships"
    }
  ];

  const decisionMatrix = [
    {
      scenario: "Real-time Gaming",
      kvScore: "Excellent",
      sqlScore: "Good",
      recommendation: "KV",
      reason: "Speed is critical, simple state management"
    },
    {
      scenario: "Collaborative Editing",
      kvScore: "Limited",
      sqlScore: "Excellent",
      recommendation: "SQL",
      reason: "Complex document structure, transaction safety"
    },
    {
      scenario: "Live Chat",
      kvScore: "Excellent",
      sqlScore: "Good",
      recommendation: "KV",
      reason: "Simple message storage, maximum performance"
    },
    {
      scenario: "Financial Applications",
      kvScore: "Poor",
      sqlScore: "Excellent",
      recommendation: "SQL",
      reason: "ACID transactions required for money operations"
    },
    {
      scenario: "IoT Device Management",
      kvScore: "Good",
      sqlScore: "Excellent",
      recommendation: "SQL",
      reason: "Complex device relationships and analytics"
    }
  ];

  return (
    <Card className="bg-white/90 backdrop-blur border-0 shadow-xl mb-16">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-gray-900">
          KV vs SQL-Backed Durable Objects
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Choosing the right storage approach for maximum business impact
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        
        {/* Storage Options Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {storageOptions.map((option, index) => (
            <div key={index} className="bg-gradient-to-br from-white/80 to-gray-50/80 rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                {option.icon}
                <h3 className="text-xl font-semibold text-gray-900">{option.type}</h3>
              </div>
              <p className="text-gray-600 mb-4">{option.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Key Strengths
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {option.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Ideal Use Cases
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {option.idealFor.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/60 rounded p-3">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">Business Value</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">{option.businessValue}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded p-3">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">When to Choose</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">{option.whenToUse}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Matrix */}
        <div className="bg-white/60 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Decision Matrix: Which Storage to Choose
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Use Case</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">KV-Backed</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-600">SQL-Backed</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-600">Recommendation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Why</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="py-3 px-4 font-medium text-gray-900">{row.scenario}</td>
                    <td className={`py-3 px-4 text-center text-sm font-medium ${
                      row.kvScore === 'Excellent' ? 'text-green-600' : 
                      row.kvScore === 'Good' ? 'text-blue-600' : 
                      row.kvScore === 'Limited' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {row.kvScore}
                    </td>
                    <td className={`py-3 px-4 text-center text-sm font-medium ${
                      row.sqlScore === 'Excellent' ? 'text-green-600' : 
                      row.sqlScore === 'Good' ? 'text-blue-600' : 
                      row.sqlScore === 'Limited' ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {row.sqlScore}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        row.recommendation === 'KV' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {row.recommendation}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales Positioning */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-green-600" />
            Sales Positioning: Why This Matters to Customers
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">For Technical Teams</h4>
              <p className="text-gray-700 leading-relaxed">
                No need to choose between simplicity and power. Start with KV for rapid prototyping, 
                upgrade to SQL when complexity demands it - all within the same Durable Objects architecture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">For Business Leaders</h4>
              <p className="text-gray-700 leading-relaxed">
                One platform handles everything from simple real-time features to complex business applications. 
                Reduces vendor complexity and training costs while enabling faster feature delivery.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StorageComparison;
