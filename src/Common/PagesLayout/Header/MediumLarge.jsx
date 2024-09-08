import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.div`
    color: #99403a;

    .logo {
        .SiteLogo {
            width: 100%;
            margin: auto;
            padding: 0px 0px;
        }
    }

    nav {
        text-align: center;
        a {
            width: 145px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 50px 0px;
            border-bottom: solid 3px #545932;
            text-align: center;
            font-size: 15px;
            color: #545932;
            opacity: 0.8;
            font-weight: bold;
            text-decoration: none;
            text-transform: lowercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #99403a;
                border-bottom-color: #99403a;
            }
        }
    }
`;
