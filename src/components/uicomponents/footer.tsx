import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
 } from "../ui/tooltip";
 import Image from "next/image";
import fblogo from "../images/fbicon.png"
import gmaillogo from "../images/gmailicon.png"

export default function footer() {
    return (
        <div>
            <footer className="h-12 rounded flex items-center justify-end px-4 py-8 space-x-12 border-t-black border-t-2">
                <div className="flex-shrink-0 flex flex-col items-center space-x-2">
                <p>Call Me:</p>
                <p>0976-3500-735</p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center space-x-2">
                <p>Contact Me:</p>
                <div className="flex flex-row space-x-4">
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
            </footer>
        </div>
    );
}