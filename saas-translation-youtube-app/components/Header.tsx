import { getServerSession } from "next-auth";
import Logo from "./Logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./ui/UserButton";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "./ui/CreateChatButton";
import UpgradeBanner from "./ui/UpgradeBanner";
import LanguageSelect from "./ui/LanguageSelect";

async function Header() {
    const session = await getServerSession(authOptions);
    console.log(session);


  return (
    <header className="sticky top-0 z-50 bg-white  dark:bg-gray-900">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white
        dark:bg-gray-900 max-w-7xl mx-auto">
            <Logo />

            <div className="flex-1 flex items-center justify-end space-x-4">
                {/*LanguageSelect */}
                <LanguageSelect />
                
                {session ? (
                    <>
                    <Link href={'/chat'} prefetch={false}>
                        <MessagesSquareIcon className="text-black dark:text-white"/>
                        </Link>
                        <CreateChatButton />
                    </>
                ) : (
                    <Link href='/pricing'> Pricing</Link>
                )}

                <DarkModeToggle />
                <UserButton session={session}/>
            </div>

        </nav>

        {/* Upgrade Banner */}
        <UpgradeBanner />
    </header>
  );
}

export default Header;