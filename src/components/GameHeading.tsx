import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";

interface Props{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`

    return (
        <Heading paddingLeft={3} as={"h1"}>{heading}</Heading>
    );
};

export default GameHeading;