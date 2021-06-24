import { FC } from "react";
import "./SideDrawer.css";

const SideDrawer: FC = (props: any) => {
  return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;
