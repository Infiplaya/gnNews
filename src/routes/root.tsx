import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Sidemenu from "../components/Sidemenu"

function Root() {
  return (
    <>
    <Header />
    <main>
        <Sidemenu />
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Root