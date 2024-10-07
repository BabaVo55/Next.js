import Link from "next/link";
import Image from "next/image";
import './dashboard.css';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <div className='h-screen flex'>
        {/* Left */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200">
          <Link href=''>
            <Image src='/logo.png' alt="" width={20} height={20} className='fall' />
          </Link>
        </div>
        {/* Right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200 flex flex-col">
          RightSide
          <div className="h-500 w-500">

            <button className='button bg-white w-60 h-20 rounded  m-20'>Wow, look at me im a stupid button</button>
          </div>
        {children}
        </div>
       
       </div>

  );
}
