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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
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
      <div className="flex justify-center m-32">
      <Card className="lg:w-auto w-80 h-auto rounded border-black">
        <CardContent className="flex flex-row p-0">
          <div className="bg-[#F4ECE6] flex flex-col items-center justify-center p-4">
            <div className="">
            <Image
              src={profilepic}
              alt="my profile pic"
              className="w-16 rounded-full mb-2" 
            />
            <p className="flex">Gabriel Getizo</p>
            <p className="flex font-semibold">Front-End Developer</p>
            <Separator />
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
                  <AlertDialog>
                    <AlertDialogTrigger>
                    <Image
                    src={gmaillogo}
                    alt="gmail"
                    className="w-6 h-6"
                    />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                      <h1 className="font-bold">Contact Me:</h1>
                      <h2>gfsgetizo@gmail.com</h2>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Thanks!</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
            </div>
          </div>
          </div>
          <div className="w-96 flex flex-col ml-4 p-4">
            <h1 className="font-bold lg:text-7xl text-5xl">HELLO!</h1>
            <h2 className="font-semibold">Here&apos;s who I am</h2>
            <p>I am a Website Developer who currently does Front-End! This website is made with Next.Js</p>
          </div>
        </CardContent>
      </Card>
      </div>
      <Footer/>
    </div>
  );
}
