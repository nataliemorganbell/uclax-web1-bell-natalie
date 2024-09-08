import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

// prop types
SingleEssay.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.any,
};

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 3px #99403a;
    border-radius: 25px;

    h3 {
        background-color: #99403a;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        color: #fffbe0;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        padding: 20px;
    }
`;
