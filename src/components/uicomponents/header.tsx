import { Separator } from "../ui/separator";

export default function header() {
        return (
    <div >
    <header className="h-12 sticky rounded flex items-center justify-between px-4 py-8"
        style={{ boxShadow: 'inset -9px 9px 36px #d9d9d9, inset -9px -9px 36px #ffffff' }}
        >
        <div className="flex-shrink-0 flex flex-row items-center space-x-2">
            <p>Gabriel Getizo</p>
            <p className="text-lg">/</p>
            <p className="font-bold">Website Developer</p>
        </div>
        <div className="flex space-x-8">
            <p>About Me</p>
            <p>Resume</p>
        </div>
    </header>   
    </div>
        );
}
