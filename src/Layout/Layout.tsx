import { Container } from "@material-ui/core";
import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="container">{children} </div>
);

export default Layout;
