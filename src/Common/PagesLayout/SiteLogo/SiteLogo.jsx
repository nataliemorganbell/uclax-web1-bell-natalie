import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./DownHillDesignLogo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="DownHillDesignLogo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
