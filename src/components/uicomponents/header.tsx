import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import Link from 'next/link'

export default function header() {
        return (
    <div>
    <header className="h-12 sticky top-0 rounded flex items-center justify-between lg:px-4 px-0 py-8"
        style={{ boxShadow: 'inset 2px 2px 10px #797979, inset -2px 2px 10px #797979' }}
        >
        <div className="flex-shrink-0 flex flex-row items-center lg:space-x-2">
            <p className="lg:text-base text-xs">Gabriel Getizo</p>
            <p className="lg:text-lg text-md">/</p>
            <p className="lg:text-base text-xs font-bold">Website Developer</p>
        </div>
        <div className="flex lg:space-x-8 space-x-2">
            <Link href="/">
            <p className="lg:text-base text-xs hover:underline">Home</p>
            </Link>
                <Dialog>
                    <DialogTrigger>
                    <p className="lg:text-base text-xs hover:underline">
                        About Me
                    </p>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                <p>About Me</p>
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                            <p className="text-black">
                            Hi! I&apos;m Gabriel Getizo. I study Computer Science at STI Ortigas-Cainta. This resumé is for compliance
                            for Fundamentals of Web Programming
                            </p>
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            
                <Dialog>
                    <DialogTrigger>
                    <Link href="/curriculumVitae">
                    <p className="lg:text-base text-xs hover:underline">
                        Resumé
                    </p>
                    </Link>
                    </DialogTrigger>
                </Dialog>
        </div>
    </header>   
    </div>
        );
}
