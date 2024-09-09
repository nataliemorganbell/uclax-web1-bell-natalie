import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const WindowType = ({ member }) => {
    const { name, image, price, accolades } = member;

    return (
        <WindowTypeStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>

            <div className="bottom">
                <p>
                    <b>PRICE $USD:</b> {price}
                </p>
                <Accolades accolades={accolades} />
            </div>
        </WindowTypeStyled>
    );
};

export default WindowType;

// prop-types
WindowType.propTypes = {
    member: PropTypes.object.isRequired,
};

const WindowTypeStyled = styled.div`
    background-color: #fffbe0;

    img {
        aspect-ratio: 1, height 600px;
        width: 100%;
        display: block;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .bottom {
        padding: 0px;
    }

    h3 {
        text-align: center;
        color: #fffbe0;
        background-color: #99403a;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        padding: 5px 10px;
        margin: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;
