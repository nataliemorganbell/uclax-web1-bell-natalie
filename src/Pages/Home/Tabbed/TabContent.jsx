import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>
            <div className="column2">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: #fffbe0;
    border: solid 3px #99403a;
    border-top-left-radius: 0px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
        padding: 50px;
    }

    h3 {
        font-size: 70px;
        font-weight: 700;
        background-image: linear-gradient(to left, #99403a, #80884d);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        text-align: center;
    }

    p {
        font-size: 18px;
        color: #545932;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
