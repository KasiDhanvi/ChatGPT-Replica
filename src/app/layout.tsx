import SideBar from "@/components/SideBar";
import "./globals.css"
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions }  from "../pages/api/auth/[...nextauth]"
import Login from "@/components/Login";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <html>
            <head />
            <body>
                <SessionProvider session={null}>
                    {!session ? (
                     <Login />
                    ): (
                    <div className="flex">
                        <div className="bg-[#131633] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                            <SideBar  />
                        </div>
                        <div className="bg-[#0e102e] flex-1">{children}</div>
                    </div>
                    )}
                </SessionProvider>
            </body>
        </html>
    )
}