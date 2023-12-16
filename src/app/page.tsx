import Image from 'next/image'
import { UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-full w-full">
            <nav className="w-full justify-self-start p-2 h-10">
                <UserButton afterSignOutUrl="/sign-in"/>
            </nav>

            <h1>The Calendar</h1>
            <h4>Coming Soon</h4>
        </main>
  )
}
