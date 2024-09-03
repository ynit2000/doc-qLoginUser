import WelcomeSection from '../components/WelcomeSection'
import SignupForm from '../components/SignupForm'
import LoginHome from '../components/LoginHome'
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      <div className=' w-full p-10 bg-slate-100  flex justify-center items-center'>
      <div className='border-2 bg-white shadow-xl border-white h-[554px] w-[611px] rounded-[60px] flex flex-col items-center gap-10 justify-center'>
        <div className='border-b-2 flex items-center text-black justify-center border-black/50 w-[476px] h-[123px] text-5xl text-center hover:bg-[#017BFC] hover:w-full hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:text-white transition-all duration-300 ease-in-out'>
          <Link href='/notifications'>Notifications</Link>
        </div>
        <div className='border-b-2 flex text-black items-center justify-center border-black/50 w-[476px] h-[123px] text-5xl text-center hover:bg-[#017BFC] hover:w-full hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:text-white transition-all duration-300 ease-in-out'>
          <Link href='/security-settings'>Security Settings</Link>
        </div>
        <div className='border-b-2 text-black flex items-center justify-center border-black/50 w-[476px] h-[123px] text-5xl text-center hover:bg-[#017BFC] hover:w-full hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:text-white transition-all duration-300 ease-in-out'>
          <Link href='/account-preferences'>Account Preferences</Link>
        </div>
        <div className='border-b-2 flex text-black items-center justify-center border-black/50 w-[476px] h-[123px] text-5xl text-center hover:bg-[#017BFC] hover:w-full hover:rounded-[60px] hover:cursor-pointer hover:border-none hover:text-white mb-10 transition-all duration-300 ease-in-out'>
          <Link href='/logout'>Logout</Link>
        </div>
      </div>
    </div>
      
    </div>
  )
}