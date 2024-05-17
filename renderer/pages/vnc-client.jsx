import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import
{
    Heading, FormControl,
    FormLabel,
    Box,
    Input,
    Text,
    Container,
    VStack,
    Button,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { NavContainer } from '../components/NavContainer';

const VncClient = () =>
{
    const VncScreen = dynamic(() =>
    {
        return import('react-vnc').then((mod) => mod.VncScreen);
    }, { ssr: false });


    // const vncScreenRef = useRef<React.ElementRef<typeof VncScreen>>(null);
    const ref = useRef();
    const [password, setPassword] = useState('1234');
    const [hostname, setHostname] = useState('ws://PoopyPro.local');
    const [port, setPort] = useState('6080');
    const [username, setUsername] = useState('');
    const [rendering, setRendering] = useState(false);
    const [timesConnected, setTimesConnected] = useState(0);


    const handleOnCredentialsRequired = (rfb) =>
    {
        console.log('Credentials required');
    };

    const handleOnDisconnect = (rfb) =>
    {
        console.log('Disconnected');
        setRendering(false);
    };

    const handleSubmitInfo = () =>
    {
        setTimesConnected(timesConnected + 1);
        setRendering(true);
    };

    const handleDisconnect = () =>
    {
        setTimesConnected(0);
        setRendering(false); // unmounting the component auto-disconnects
    };

    return (
        <React.Fragment>
            <Head>
                <title>Airavata UI</title>
            </Head>

            <NavContainer activePage='VNC Client'>
                {
                    !rendering && (
                        <>

                            <Container mt={16}>
                                <Heading size='lg' color='blue.600'>
                                    Connection Information
                                </Heading>

                                {
                                    timesConnected > 0 && (
                                        <Alert status='error' rounded='md' mt={2}>
                                            <AlertIcon />
                                            <Text>
                                                <Text as='span' color='red.800' fontWeight='bold'>Something went wrong</Text>. Please make sure your VNC server is running and your web proxy is running.
                                            </Text>
                                        </Alert>
                                    )
                                }

                                <VStack spacing={4} mt={4}>
                                    <FormControl>
                                        <FormLabel>VNC Server Hostname</FormLabel>
                                        <Input type='text' value={hostname} onChange={(e) =>
                                        {
                                            setHostname(e.target.value);
                                        }} placeholder='ws://your-url' />
                                    </FormControl>


                                    <FormControl>
                                        <FormLabel>VNC Server Port</FormLabel>
                                        <Input type='text' value={port} onChange={(e) =>
                                        {
                                            setPort(e.target.value);
                                        }} placeholder='Port' />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Username</FormLabel>
                                        <Input type='text' value={username} onChange={(e) =>
                                        {
                                            setUsername(e.target.value);
                                        }} placeholder='Username' />
                                    </FormControl>


                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Input type='password' value={password} onChange={(e) =>
                                        {
                                            setPassword(e.target.value);
                                        }} placeholder='Password' />
                                    </FormControl>

                                    <Button onClick={handleSubmitInfo} colorScheme='blue' w='full'>
                                        Connect to VNC server
                                    </Button>
                                </VStack>

                            </Container>
                        </>
                    )
                }

                {rendering && (
                    <>
                        <Box textAlign='center'>
                            <VncScreen
                                url={hostname + ':' + port}
                                scaleViewport
                                background="#000000"
                                style={{
                                    width: '100%',
                                    height: '75vh',
                                }}
                                rfbOptions={{
                                    credentials: {
                                        username,
                                        password
                                    }
                                }}
                                ref={ref}
                                onCredentialsRequired={handleOnCredentialsRequired}
                                onDisconnect={handleOnDisconnect}
                            />

                            <Button onClick={handleDisconnect} colorScheme='red' mt={4}>
                                Disconnect
                            </Button>
                        </Box>
                    </>
                )
                }




            </NavContainer>
        </React.Fragment>
    );
};

export default VncClient;