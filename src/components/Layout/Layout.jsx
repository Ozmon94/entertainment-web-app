import { Outlet } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import { ContentWrapper } from "components/Layout/Layout.styles";

const Layout = () => {
  return (
    <>
      <Navigation />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </>
  );
};

export default Layout;
