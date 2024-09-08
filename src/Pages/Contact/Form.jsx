import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import axios from "axios";

//components
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");

    const inputNameOnChange = (e) => {
        setInputName(e.target.value);
    };
    const inputEmailOnChange = (e) => {
        setInputEmail(e.target.value);
    };
    const inputMessageOnChange = (e) => {
        setInputMessage(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuid(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);

        getSubmissions();

        console.log("Submitted form");
    };

    return (
        <FormStyled onSubmit={onSubmit}>
            <Input
                id="name"
                labelText="Name"
                onChange={inputNameOnChange}
                value={inputName}
            />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputEmailOnChange}
                value={inputEmail}
            />
            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageOnChange}
                value={inputMessage}
            />

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form`
    .input-group {
        margin-bottom: 20px;
    }

    label {
        font-family: Arial, Helvetica, sans-serif;
        color: #545932;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #fffbe0;
        border: solid 3px #99403a;
        border-radius: 25px;

        &:focus {
            background-color: #fffbe0;
        }
    }

    button {
        background-color: #99403a;
        padding: 10px 5px;
        color: #fff;
        width: 150px;
        border: none;
        border-radius: 25px;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #545932;
        }
        &:active {
            background-color: #5459324d;
        }
    }
`;
