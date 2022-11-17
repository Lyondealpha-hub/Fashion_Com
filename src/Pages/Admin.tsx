import AdminNavbar from "../components/admin_navbar";
import DashboardPage from "../components/dashboard"
import Navbar from "../components/navbar";


const Admin = ()=>{
    return(
        <div>
            {/* <Navbar /> */}
            <AdminNavbar />
            <DashboardPage />
        </div>
    )
}

export default Admin;