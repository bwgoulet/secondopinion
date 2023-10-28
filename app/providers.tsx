import { getServerSession } from 'next-auth'
import NextUIProvider from "@/components/Providers/NextUIProvider"
import SessionProvider from "@/components/Providers/SessionProvider"



export async function Providers({ children }: { children: React.ReactNode }) {
    const session = await getServerSession()
    return (
        <SessionProvider session={session}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </SessionProvider>
    )
}