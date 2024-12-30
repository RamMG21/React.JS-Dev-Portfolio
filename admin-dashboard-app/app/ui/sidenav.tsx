import Link from 'next/link';
import NavLinks from '@/app/ui/nav-link';
import { AiFillIdcard } from "react-icons/ai";


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-900 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
        <AiFillIdcard className='text-8xl' />
        <h1 className='text-2xl'>My User</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        
        <div className="hidden h-auto w-full grow rounded-md bg-blue-950 md:block">
        <NavLinks />
        </div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-800 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
            
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}