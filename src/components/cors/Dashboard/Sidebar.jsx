import { useState, useEffect } from "react"
import { VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  )
  const { loading: authLoading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [confirmationModal, setConfirmationModal] = useState(null)

  // Toggle sidebar visibility on button click
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState) // Toggle state
  }

  // Close sidebar if clicking outside
  useEffect(() => {
    const closeSidebar = (e) => {
      if (isSidebarOpen && !e.target.closest(".sidebar") && !e.target.closest(".menu-btn")) {
        setIsSidebarOpen(false)
      }
    }
    document.addEventListener("click", closeSidebar)
    return () => {
      document.removeEventListener("click", closeSidebar)
    }
  }, [isSidebarOpen])

  if (profileLoading || authLoading) {
    return (
      <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800 ">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        className="menu-btn absolute top-4 left-4 z-1 block lg:hidden text-white bg-richblack-800 p-2 rounded"
        onClick={toggleSidebar} // Toggle the sidebar
      >
        Menu
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" />
      )}

      <div
        className={`fixed lg:static z-40 min-w-[220px] h-full flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative sidebar`}
      >
        <div className="flex flex-col sidebar">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon} />
            )
          })}
        </div>
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
        <div className="flex flex-col">
          <SidebarLink
            link={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}
