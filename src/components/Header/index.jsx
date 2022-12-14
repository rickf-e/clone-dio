import React from 'react'
import Logo from '../../assets/logo-dio.png'
import { Button } from '../Button'

import { 
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo" />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#" >Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}