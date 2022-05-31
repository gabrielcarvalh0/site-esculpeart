import { useParams } from 'react-router-dom';
import WithSubnavigation from '../../components/WithSubnavigation/index';
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Input,
    Select,
    forwardRef,
    AspectRatio,
    BoxProps,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    ModalContent,
    ModalFooter,
    Tooltip
} from '@chakra-ui/react';

import products from '../../Context/products.json';
import { motion, useAnimation } from "framer-motion";
import React, { useState } from 'react';
// types
type SecretOpen = {
    id: string;
}

const first = {
    rest: {
        rotate: "-15deg",
        scale: 0.95,
        x: "-50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "-70%",
        scale: 1.1,
        rotate: "-20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const second = {
    rest: {
        rotate: "15deg",
        scale: 0.95,
        x: "50%",
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        x: "70%",
        scale: 1.1,
        rotate: "20deg",
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};

const third = {
    rest: {
        scale: 1.1,
        filter: "grayscale(80%)",
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }
    },
    hover: {
        scale: 1.3,
        filter: "grayscale(0%)",
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
};
const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
        <Box
            bg="white"
            top="0"
            height="100%"
            width="100%"
            position="absolute"
            borderWidth="1px"
            borderStyle="solid"
            rounded="sm"
            borderColor="gray.400"
            as={motion.div}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
            {...props}
            ref={ref}
        />
    );
});


export function Adm() {

    // parametros
    const params = useParams<SecretOpen>();
    const roomId = params.id;
    const productsSelect = products.alienFrasco;


    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [aderess, setAdress] = useState('');
    const [cep, setCEP] = useState('');
    const [product, setProduct] = useState('');
    const [file, setFile] = useState('');

    const [stateCopie, setStateCopie] = useState('Copiar');

    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef('');


    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();

    function handlerInfo() {
        onOpen();



    }

    function handlerCopied(e: any) {

        setStateCopie('Copiado!');
    }

    function handlerCloseModal() {
        onClose();
        setStateCopie('Copiar');

    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={handlerCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Copie os dados</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={handlerCloseModal} >
                            Close
                        </Button>
                        <Tooltip label={stateCopie} placement='right-end'>
                            <Button onClick={e => handlerCopied(e)} bg='primary.500'>Copiar dados</Button>
                        </Tooltip>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Container maxW={'3xl'}>


                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 10, md: 26 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Formulário para Envio<br />

                    </Heading>

                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                onChange={(e) => setName(e.target.value)}

                                name="name"
                                placeholder="Nome Completo"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                onChange={(e) => setCPF(e.target.value)}
                                name="cpf"
                                placeholder="CPF"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                onChange={(e) => setAdress(e.target.value)}
                                name="aderess"
                                placeholder="Endereço"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Input
                                onChange={(e) => setCEP(e.target.value)}
                                name="cep"
                                placeholder="CEP"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            <Select
                                onChange={(e) => setProduct(e.target.value)}
                                name="product"
                                placeholder='Selecione o produto'>
                                {productsSelect.map(products => {
                                    return (

                                        <option key={products} value='option1'>{products}</option>
                                    )
                                })}

                            </Select>

                            <AspectRatio width="64" ratio={1}>
                                <Box
                                    borderColor="gray.300"
                                    borderStyle="dashed"
                                    borderWidth="2px"
                                    rounded="md"
                                    shadow="sm"
                                    role="group"
                                    transition="all 150ms ease-in-out"
                                    _hover={{
                                        shadow: "md"
                                    }}
                                    as={motion.div}
                                    initial="rest"
                                    animate="rest"
                                    whileHover="hover"
                                >
                                    <Box position="relative" height="100%" width="100%">
                                        <Box
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            height="100%"
                                            width="100%"
                                            display="flex"
                                            flexDirection="column"
                                        >
                                            <Stack
                                                height="100%"
                                                width="100%"
                                                display="flex"
                                                alignItems="center"
                                                justify="center"
                                                spacing="4"
                                            >
                                                <Box height="16" width="12" position="relative">
                                                    <PreviewImage
                                                        variants={first}
                                                        backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
                                                    />
                                                    <PreviewImage
                                                        variants={second}
                                                        backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
                                                    />
                                                    <PreviewImage
                                                        variants={third}
                                                        backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
                                                    />
                                                </Box>
                                                <Stack p="8" textAlign="center" spacing="1">
                                                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                                                        Drop images here
                                                    </Heading>
                                                    <Text fontWeight="light">or click to upload</Text>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Input
                                            onChange={(e) => setFile(e.target.value)}
                                            name="file"
                                            type="file"
                                            height="100%"
                                            width="100%"
                                            position="absolute"
                                            top="0"
                                            left="0"
                                            opacity="0"
                                            aria-hidden="true"
                                            accept="*"
                                            onDragEnter={startAnimation}
                                            onDragLeave={stopAnimation}
                                        />
                                    </Box>
                                </Box>

                            </AspectRatio>
                        </Stack>

                    </Box>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                            onClick={handlerInfo}
                            colorScheme={'green'}
                            bg={'green.400'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'green.500',
                            }}>
                            Enviar
                        </Button>
                        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                            Limpar
                        </Button>
                        <Box>
                            <Icon
                                as={Arrow}
                                color={useColorModeValue('gray.800', 'gray.300')}
                                w={71}
                                position={'absolute'}
                                right={-71}
                                top={'10px'}
                            />
                            <Text
                                fontSize={'lg'}
                                fontFamily={'Caveat'}
                                position={'absolute'}
                                right={'-125px'}
                                top={'-15px'}
                                transform={'rotate(10deg)'}>
                                Enviar no WhatsApp
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
});