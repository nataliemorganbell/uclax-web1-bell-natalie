import styled from "styled-components";
import PropTypes from "prop-types";

const Submission = ({ sub }) => {
    const { name, email, message } = sub;

    return (
        <SubmissionStyled>
            {name} : {email} : {message}
        </SubmissionStyled>
    );
};

export default Submission;

// prop-types
Submission.propTypes = {
    sub: PropTypes.object.isRequired,
};

const SubmissionStyled = styled.div`
    outline: solid 3px #99403a;
    padding: 10px;
    margin: 10px 0px;
`;
