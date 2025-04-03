"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import axios from "axios"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type OptimizedBudget = {
    OptimizedNewspaperBudget: number;
    OptimizedRadioBudget: number;
    OptimizedTVBudget: number;
    PredictedSales: number;
  };

const chartConfig = {
  desktop: {
    label: "Budget",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

export default function Component() {
    const [budget, setBudget] = useState(0)
    const [resData, setResData] = useState<OptimizedBudget>()
    const [fetched, setFetched] = useState(false)
    const [tv, settv] = useState<number>()
    const [radio, setradio] = useState<number>()
    const [news, setnews] = useState<number>()
    const [sales, setsales] = useState<number>()

    useEffect(() => {
     handleBudgetPost(budget)
    }, [budget])
    

    const handleBudgetPost = async (budget: number) => {
        await axios.post(
            "http://127.0.0.1:8000/optimize-budget/",
            {budget},
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            }
        )
        .then(res => {setResData(res.data); setFetched(true)
            console.log(resData.OptimizedTVBudget)
            console.log(resData.OptimizedRadioBudget)
            settv(resData.OptimizedTVBudget)
            setradio(resData.OptimizedRadioBudget)
            setnews(resData.OptimizedNewspaperBudget)
            setsales(resData.PredictedSales)
        })
        .catch(err => console.log(err))
    }

    const chartData = [
        { month: "TV", desktop: tv, mobile: 80 },
        { month: "Radio", desktop: radio, mobile: 200 },
        { month: "NewsPaper", desktop: news, mobile: 120 },
        { month: "Sales", desktop: sales, mobile: 190 },
      ]
      

  return (
    <div className="p-5">
        <h1>Enter Budget:</h1>
       <div className="flex items-center justify-center gap-4 mb-5">
        
        <Input value={budget} onChange={e => setBudget(Number(e.target.value))} type="text" placeholder="Please Enter a Budget"/>
        <Button onClick={() => handleBudgetPost(budget)}>Submit</Button>
        </div> 
    <Card >
      <CardHeader>
        <CardTitle>Optimized Budget</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent >
        { fetched ? <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
            
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="#eb5f02"
              radius={4}
            >
              {/* <LabelList
                dataKey="month"
                position="outside"
                offset={8}
                className="text-white"
                fontSize={12}
              /> */}
              <LabelList
                dataKey="desktop"
                position="right"
                offset={2}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer> : "Data will show here"}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Optimized budget for TV, Radio and NewsPaper with predicted Sales <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
    </div>
  )
}
