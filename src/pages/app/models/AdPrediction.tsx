import React from "react";

import AdPerformance from "@/components/charts/AdPerformance";
import PlatformChart from "@/components/charts/Platformspec";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdPrediction = () => {
  return (
    <div className="p-4 px-2 flex justify-between gap-4 flex-col">
      <h1 className="font-bold text-3xl text-blue-950 mb-5">
        Ads Performance Prediction model
      </h1>

      <div className="flex-1 flex items-center gap-4">
        <AdPerformance />
        <Card className="flex-1 h-full">
          <CardContent>
            <h2 className="text-lg font-semibold text-blue-950">
              Ad Performance Across Aging Demographics
            </h2>
            <p className="mb-4">
              This chart highlights how your ads perform across different age
              groups. By analyzing engagement scores, you can refine targeting
              and content strategies to maximize effectiveness among key
              demographics. Understanding which age groups interact most with
              your ads allows for better budget allocation, ensuring your
              campaigns resonate with the right audience. It also helps in
              adjusting messaging and visuals to appeal to different
              generations, improving overall campaign success.
            </p>
            <h2 className="text-lg font-semibold text-blue-950">
              Ad Clicks Across Platforms
            </h2>
            <p>
              This chart displays the number of clicks your ads receive across
              various platforms like Facebook, Google, and Instagram. By
              analyzing this data, you can determine which platforms generate
              the highest engagement and conversions. This insight helps in
              optimizing advertising spend, focusing resources on the most
              effective platforms, and testing new strategies to improve
              underperforming ones. Regularly monitoring these metrics ensures
              that your campaigns remain competitive and continue to reach the
              right audience in the most cost-effective way.
            </p>
          </CardContent>
        </Card>
      </div>
      <PlatformChart />
    </div>
  );
};

export default AdPrediction;
