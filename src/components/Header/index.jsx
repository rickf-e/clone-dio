import React from 'react'
import Logo from '../../assets/logo-dio.png'
import Perfil from '../../assets/perfil.jpg'
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

const Header = ({autenticado}) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>) : null}
                    
                </Row>
                <Row>
                    {autenticado ?(
                        <UserPicture src={Perfil} />
                    ) : (<>
                        <MenuRight href="#" >Home</MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button>
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}