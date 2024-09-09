import styled from "styled-components";

import { windowsData } from "../windowsData.js";

import WindowType from "./WindowType.jsx";

const WindowsList = () => {
    return (
        <WindowsListStyled>
            {windowsData.map((member) => {
                return <WindowType key={member.id} member={member} />;
            })}
        </WindowsListStyled>
    );
};

export default WindowsList;

const WindowsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
`;
