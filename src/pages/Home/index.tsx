import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import WithSubnavigation from '../../components/WithSubnavigation/index';
// import { Link  } from "react-router-dom";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    useToast,
} from '@chakra-ui/react';

import ImageLogo from '../../assets/img/logo.png';



export function Home() {
    // parametros
    const params = useParams();


    const [email, setEmail] = useState('');

    const [pass, setPass] = useState('');

    const toast = useToast();

    let navigate = useNavigate();

    function random() {
        let resultInitial = Math.random();
        let res = resultInitial.toString()
        let result = res.replace('.', '');
        return result;
    }

    async function handlerSignIn(e: any) {
        // console.log(email, pass);

        if (email === 'esculpearte.br@gmail.com' && pass === "G@zao123") {
            console.log('entrou')
            toast({
                title: "Acesso permitido!.",
                description: "redirecionado em segundos...",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            setTimeout(() => {
                navigate(`/admin/${random()}`, { replace: true });

            }, 3000)


        } else {
            toast({
                title: "Acesso não permitido.",
                description: "Você não colocou o acesso correto.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    }
    return (
        <>
            <WithSubnavigation></WithSubnavigation>


            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('black', 'gray.800')}>


                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Box>
                        <Flex
                            align={'center'}
                            justify={'center'}>
                            <Image
                                w={250}
                                objectFit='cover'
                                src={ImageLogo}
                                alt='Dan Abramov'
                            />
                        </Flex>

                    </Box>
                    <Stack align={'center'}>
                        <Heading color={'gray.200'} fontSize={'4xl'}>Entrada apenas autorizada</Heading>
                        <Text fontSize={'lg'} color={'gray.300'}>
                            Entrada apenas de <Link color={'primary.500'}>colaboradores</Link> ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email </FormLabel>
                                <Input onChange={event => setEmail(event.target.value)} type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Senha</FormLabel>
                                <Input onChange={event => setPass(event.target.value)} type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                {/* <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack> */}
                                <Button
                                    onClick={handlerSignIn}
                                    bg={'primary.500'}
                                    color={'black'}
                                    _hover={{
                                        bg: 'primary.800',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}


