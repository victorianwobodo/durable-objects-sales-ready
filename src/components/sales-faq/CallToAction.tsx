
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
