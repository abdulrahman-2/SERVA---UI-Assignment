import Icon from "@/components/common/Icon";

const menu = [
  { name: "Analytics", link: "/", icon: <Icon name="audio" /> },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Icon name="dashboard" />,
  },
  { name: "Cars", link: "/cars", icon: <Icon name="car" /> },
  { name: "Users", link: "/users", icon: <Icon name="users" /> },
  { name: "Waypoints", link: "/waypoints", icon: <Icon name="waypoints" /> },
  { name: "Contact", link: "/contact", icon: <Icon name="contact" /> },
  { name: "Transactions", link: "/transactions", icon: <Icon name="logout" /> },
  { name: "Settings", link: "/settings", icon: <Icon name="bolt" /> },
];

export { menu };
