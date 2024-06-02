import { Separator } from "../ui/separator";

export default function header() {
        return (
    <div>
    <header className="h-12 sticky top-0 rounded flex items-center justify-between lg:px-4 px-0 py-8"
        style={{ boxShadow: 'inset -9px 9px 36px #d9d9d9, inset -9px -9px 36px #ffffff' }}
        >
        <div className="flex-shrink-0 flex flex-row items-center lg:space-x-2">
            <p className="text-xs">Gabriel Getizo</p>
            <p className="lg:text-lg text-md">/</p>
            <p className="font-bold">Website Developer</p>
        </div>
        <div className="flex lg:space-x-8 space-x-4">
            <p className="lg:text-base text-xs">About Me</p>
            <p className="lg:text-base text-xs">Resume</p>
        </div>
    </header>   
    </div>
        );
}
