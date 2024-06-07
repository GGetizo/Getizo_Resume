"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,  
} from "@/components/ui/card"
import Header from "@/components/uicomponents/header"
import Footer from "@/components/uicomponents/footer"

export default function Page(){
    return(
    <div className="font-sans w-auto bg-gradient-to-r from-[#F4ECE6] to-[#FFFFFF]">
    <Header/>
    <h1 className="relative flex justify-center py-14 font-bold">Experiences</h1>
    <div className="flex justify-center items-center flex-col space-y-7 mb-20">
  <div>
    <Card className="lg:w-[37.5rem] w-[20rem] h-auto rounded"
    style={{boxShadow:'20px 20px 45px #d4d4d4, -20px -20px 45px #ffffff'}}
    >
      <CardContent className="p-4 flex flex-row justify-between space-x-4">
        <div className="flex-shrink-0">
          <p className="text-base font-bold">2024-Present</p>
          <p className="lg:text-base text-sm font-medium">ALPHA Front-End Developer</p>
          <p className="lg:text-base text-sm">STI Ortigas-Cainta</p>
        </div>
        <div className="flex-grow">
            <p className="lg:text-base text-sm">I am currently a Front-End Developer in the
            A.L.P.H.A: Alliance of Leading Programmers through Heuristic Approach
            </p>
        </div>
      </CardContent>
    </Card>
  </div>
  <h1 className="relative flex justify-center mb-10 font-bold">Skills</h1>
  <div>
    <Card className="lg:w-[37.5rem] w-[20rem] h-auto rounded"
    style={{boxShadow:'20px 20px 45px #d4d4d4, -20px -20px 45px #ffffff'}}
    >
      <CardContent className="p-4 flex flex-row justify-between space-x-4">
        <div className="flex-shrink-0">
          <p className="text-base font-bold">Programming Skills:</p>
          <p className="lg:text-base text-sm">C++</p>
          <p className="lg:text-base text-sm">Java</p>
          <p className="lg:text-base text-sm">HTML, CSS, Js, Ts</p>
        </div>
        <div className="flex-grow">
          <p className="lg:text-base text-sm">I am knowledgeable of OOP programming langugaes like C++ and Java. I also know vanilla HTML, CSS, Js, and Ts</p>
        </div>
      </CardContent>
    </Card>
  </div>
</div>

    <Footer/>
    </div>
    );
}