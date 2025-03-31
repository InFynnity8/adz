import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Chart from "@/components/chart";
import Radar from "@/components/radar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ads1 from "../../assets/ads.jpg";
import ads2 from "@/assets/ads2.jpg";
import ads3 from "@/assets/ads3.webp";
import ads4 from "@/assets/ads4.jpg";
import Dashboard from "@/out/Dashboard";

const Home = () => {
  return (
    <div className="p-4 px-2">
      <Dashboard/>
      <div className="flex flex-col xl:flex-row items-start justify-between gap-4">
  
        {/* todo next */}
        <div className="p-2 flex-1">
          <h1 className="text-[20px] font-medium">What to do next?</h1>
          <Tabs defaultValue="updates" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="updates">Updates</TabsTrigger>
            </TabsList>
            <TabsContent value="updates">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Card className="h-[300px] p-0 overflow-hidden">
                      <img src={ads1} alt="ads1" className="h-full w-full" />
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-[300px] p-0 overflow-hidden">
                      <img src={ads2} alt="ads1" className="h-full w-full" />
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-[300px] p-0 overflow-hidden">
                      <img src={ads3} alt="ads1" className="h-full w-full" />
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card className="h-[300px] p-0 overflow-hidden">
                      <img src={ads4} alt="ads1" className="h-full w-full" />
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </div>
        
    </div>
  );
};

export default Home;
