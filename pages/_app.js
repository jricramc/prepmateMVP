import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/css/style.css'
import '../styles/scss/style.scss'
import '../styles/css/all.min.css'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'react-toastify/dist/ReactToastify.css';
import { FarzaaContextProvider } from '@/context/FarzaaContext';
import { ToastContainer } from 'react-toastify';
import RightSideBar from '@/component/sidebar/RightSideBar';


export default function App({ Component, pageProps }) {
  return (
    <>
      <FarzaaContextProvider>
        <Component {...pageProps}/>
        <RightSideBar/>
        <ToastContainer/>
      </FarzaaContextProvider>
      
    </>
   )
}
