// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Subtitles from "@material-ui/icons/Subtitles";
import Message from "@material-ui/icons/Message";
import TrackChanges from "@material-ui/icons/TrackChanges";
import DesktopMac from "@material-ui/icons/DesktopMac";
import { FileCopy } from "@material-ui/icons";
// core components/views
import Dashboard from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import Notebook from "views/Notebook/Notebook.jsx";
import Project from "views/Project/Project.jsx";

const dashboardRoutes = [
  {
    path: "/form",
    sidebarName: "Form",
    navbarName: "Form",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/profile",
    sidebarName: "Profile",
    navbarName: "Profile Page",
    icon: FileCopy,
    component: Project
  },
  {
    path: "/notebook",
    // sidebarName: "Notebook",
    navbarName: "Notebook",
    icon: DesktopMac,
    component: Notebook
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/resume",
    sidebarName: "Resume",
    navbarName: "Resume",
    icon: Subtitles,
    component: TableList
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
