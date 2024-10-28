import '../../App.scss'
import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import './layout.scss'

export default function Layout() {
  return (
    <div className="wrapper">
        <Header />
        <div className='main'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
