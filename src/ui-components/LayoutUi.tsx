import {FC} from "react";
import styled from "styled-components";

import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <Section>
            <Outlet/>
        </Section>
    );
}

export default Layout;

const Section = styled('div')`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
`
