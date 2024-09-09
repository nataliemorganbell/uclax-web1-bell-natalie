import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";

import WindowsList from "./WindowsList/WindowsList.jsx";

const Windows = () => {
    return (
        <WindowsStyled>
            <Inset>
                <h1>custom made windows</h1>
                <WindowsList />
            </Inset>
        </WindowsStyled>
    );
};

export default Windows;

const WindowsStyled = styled.div``;
