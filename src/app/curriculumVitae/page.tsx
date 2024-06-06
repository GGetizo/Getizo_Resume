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
    <div>
    <Header/>
    <h1 className="relative flex justify-center m-40 mb-10 font-bold">Experiences</h1>
    <div className="flex justify-center items-center flex-col space-y-4 mb-20">
  <div>
    <Card className="lg:w-[37.5rem] w-[21.875rem] h-auto rounded">
      <CardContent className="p-4 flex flex-row justify-between space-x-4">
        <div className="flex-shrink-0">
          <p className="text-base font-bold">2024-2025</p>
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
  <div>
    <Card className="lg:w-[37.5rem] w-[21.875rem] h-auto rounded">
      <CardContent className="p-4 flex flex-row justify-between space-x-4">
        <div className="flex-shrink-0">
          <p className="text-base font-bold">2026-Present</p>
          <p className="lg:text-base text-sm font-medium">Job Position</p>
          <p className="lg:text-base text-sm">Job Place</p>
        </div>
        <div className="flex-grow">
          <p className="lg:text-base text-sm">Insert Paragraph Here</p>
        </div>
      </CardContent>
    </Card>
  </div>
</div>

    <Footer/>
    </div>
    );
}