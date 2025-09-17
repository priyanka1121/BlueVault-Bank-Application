import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn: User = {
    $id: 'temp-id',
    email: 'priyanka.gupta@example.com',
    userId: 'temp-user-id',
    dwollaCustomerUrl: '',
    dwollaCustomerId: '',
    firstName: 'Priyanka',
    lastName: 'Gupta',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    dateOfBirth: '',
    ssn: ''
  };


  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}
