import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import HeaderAction from "../components/Header"
import Sidemenu from "../components/Sidemenu"

function Root() {
  return (
    <div className="root">
    <HeaderAction links={
        [
            {
                link: "/",
                label: "Home",
                links: []
            },
            {
                link: "/",
                label: "Home",
                links: []
            },
            {
                link: "/",
                label: "Home",
                links: []
            }
        ]
    }/>
    <main className="main">
        <Sidemenu />
        <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default Root