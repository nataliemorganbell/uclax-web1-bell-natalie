import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "./Inset.jsx";
import SiteLogo from "./SiteLogo/SiteLogo.jsx";

const Footer = () => {
    return (
        <FooterStyled className="Footer">
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <h2>DOWNHILL DESIGN • MCLOUTH, KANSAS</h2>
                <div className="copyright">
                    &copy; 2024. All rights reserved.
                </div>
            </Inset>
        </FooterStyled>
    );
};

export default Footer;

const FooterStyled = styled.footer`
    color: #99403a;

    padding: 20px 0px;

    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 20px;
    max-height: 600px;
    color: #fffbe0;

    .logo {
        display: flex;
        justify-content: bottom;
        .SiteLogo {
            margin-bottom: 0px;
            width: 300px;
        }
    }

    h6 {
        color: #99403a;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: #545932;
    }
`;
