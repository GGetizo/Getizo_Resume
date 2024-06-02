"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/uicomponents/header"
import Footer from "@/components/uicomponents/footer"
import Image from "next/image"
import profilepic from "@/components/images/pfp.png"
import fblogo from "@/components/images/fbicon.png"
import gmaillogo from "@/components/images/gmailicon.png"


export default function Home() {
  return (
    <div className="font-sans w-auto">
      <Header/>
      <div className="flex justify-center m-40">
      <Card className="w-auto h-auto rounded border-black">
        <CardContent className="flex flex-row p-0">
          <div className="bg-[#F4ECE6] flex flex-col items-center justify-center p-4">
            <Image
              src={profilepic}
              alt="my profile pic"
              className="w-16 rounded-full mb-2" 
            />
            <p className="flex">Gabriel Getizo</p>
            <p className="flex font-semibold">Front-End Developer</p>
            <Separator className="border-black"/>
            <div className="pt-10 flex flex-row space-x-4">
            <a href="https://www.facebook.com/GreatGabow/">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                  src={fblogo}
                  alt="fb"
                  className="w-6 h-6" 
                  />
              </TooltipTrigger>
              <TooltipContent>
                <p>Gabriel Getizo</p>
              </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </a>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <Image
                src={gmaillogo}
                alt="gmail"
                className="w-6 h-6"
                />
                </TooltipTrigger>
                <TooltipContent>
                  <p>gfsgetizo@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </div>
          </div>
          <div className="flex flex-col items-center  ml-4 p-4">
            <h1 className="font-bold text-7xl">HELLO!</h1>
            <h2>Here&apos;s who I am</h2>
          </div>
        </CardContent>
      </Card>
      </div>
      <Footer/>
    </div>
  );
}
