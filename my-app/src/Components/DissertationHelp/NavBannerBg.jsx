import Navbar from '../Navbar'
import { useRouter } from "next/navigation";
import Banner from './Banner';

const NavBannerBg = () => {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the home page with the '/about' URL
  };
  return (
    <div className='w-full banner  h-auto'>
        <Navbar handleAboutClick={handleAboutClick} />
        <Banner/>
    </div>
  )
}

export default NavBannerBg