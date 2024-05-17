import { Button, Heading } from "@chakra-ui/react";

const Home = () =>
{
    return (
        <>
            <Heading>Home</Heading>

            <Button as='a' href='/login'>Login</Button>
        </>
    );
};

export default Home;