import LogoImage from "@logos/logo.svg";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

function logo() {
  return <Link href="/" prefetch= {false} className="overflow-hidden">
    <div className="flex items-center w-12 h-12">
        <AspectRatio
        ratio={16/9}
        className="flex items-left justify-left"
        >
            <Image 
                priority
                src={LogoImage}
                alt="logo"
                className="dark:filter dark:invert"
            />
        </AspectRatio>
    </div>
  
  </Link>;
  
}

export default logo