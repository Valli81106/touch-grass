import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ChevronRight, Sparkle , Book , Lock, FileText, Trophy } from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description: "Express yourself with a power editor supporitng markdown , formatting and more.",
  
  },
  {
    icon: Sparkle,
    title: "Daily Inspiration",
    description: "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & private",
    description: "Your thoughts are safe with enterprise-grade security and privacy features",
  }
]; 

export default function Home() {
  const hello = 1;

  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">

        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 gradient-title">
          just a lil something to take the edge off.
        </h1>

        <p className="text-lg md:text-xl text-green-800">
          the grass is greener where you water it. go create twin.
          <br />
          the world is your oyster
        </p>

        <div className="relative">
         
          <div className="absolute inset-0 bg-linear-to-t from-green-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl p-4 max-w-full mx-auto relative z-20">

            <div className="border-b border-green-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="text-green-900 font-medium">
                  Today's Entry
                </span>
              </div>

              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-green-200" />
                <div className="h-3 w-3 rounded-full bg-green-300" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>

            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-green-900">
                daily prompts for now
              </h3>

              <Skeleton className="h-4 bg-green-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-green-100 rounded w-full" />
              <Skeleton className="h-4 bg-green-100 rounded w-2/3" />
            </div>

          </div>
        </div>

        <div className="flex justify-center gap-4 ">
          <Link href="/dashboard">
          <Button variant="journal" className="px-8 py-6 rounded-full flex items-center gap-2">
            Start Writing  <ChevronRight className="h-5 w-5"/>
          </Button>
          </Link>

          <Link href="#features">
          <Button variant="outline" className="px-8 py-6 rounded-full border text-green-600 border-green-600 hover:bg-green-100">
            Learn More <ChevronRight className="h-5 w-5"/>
          </Button>
          </Link>
        </div>
      </div>

      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl text-green-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-green-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
             <Trophy className="h-6 w-6 text-green-600"/>
            </div>
            <h3 className="text-2xl font-bold text-green-900">Weekly Wins</h3>
            <p className="text-lg text-green-700">Every Friday, write down one win from the week. By the end of the year you'll have 52 tangible accomplishments.</p>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-green-100"></div>
              <div className="h-8 w-8 rounded bg-green-100"></div>
              <div className="h-8 w-8 rounded bg-green-100"></div>
            </div>
            <Skeleton className="h-4 bg-green-50 rounded w-3/4"/>
            <Skeleton className="h-4 bg-green-50 rounded w-full"/>
            <Skeleton className="h-4 bg-green-50 rounded w-2/3"/>
            <Skeleton className="h-4 bg-green-50 rounded w-3/4"/>
          </div>
        </div>
        <div>2nd feature</div>
      </div>
    </div>
  );
}