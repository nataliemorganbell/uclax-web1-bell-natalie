import styled from "styled-components";
import React from "react";
import ReactPlayer from "react-player/youtube";

import { breakpoints, useMediaQuery } from "@/Common/useMediaQuery.jsx";

const Players = () => {
    const { isMediumAndUp } = useMediaQuery();
    return (
        <PlayersStyled>
            <h1>free online classes</h1>
            <div className="players">
                <div className="player player1">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=hgXOwI0nFGQ&t=1s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player2">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=8eBaC3BS-OE&t=31s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player3a">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=4NNwP1P9oNI&t=25s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player3b">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=MnfqWepWP2w&t=84s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player4a">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=myNJQ43H6w8&t=27s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player4b">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=JMidD9AV0Z8&t=16s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player5a">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=R0mDk60ZqVw&t=26s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player5b">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=nOU33oIxUbw&t=16s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player5c">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=RCkFb0l069g&t=14s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player6a">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=NkZWTRK51rk&t=13s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player6b">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=N8gv_My-veo"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="player player7">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=MGBagcmKn5Y&t=82s"
                        controls={true}
                        height="100%"
                        width="100%"
                    />
                </div>
            </div>
        </PlayersStyled>
    );
};

export default Players;

const PlayersStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .players {
            display: grid;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }
    }

    .player {
        width: 100%;
        max-width: 100%;
        height: 600px;
        width: 1240px;
        border: solid 25px #99403a;
        border-radius: 25px;
        margin: 0px 100px 50px 100px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    h1 {
        margin-top: 50px;
    }
`;
