import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import Perfil from '../../assets/perfil.jpg'

import { Container, Title, TitleHighLight, Column } from './styles'

const Feed = () => {
    return(
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING - TOP 5 DA SEMANA</TitleHighLight>
                    <UserInfo percentual={85} nome="Paulo Henrique" image={Perfil} />
                    <UserInfo percentual={71} nome="Paulo Henrique" image={Perfil} />
                    <UserInfo percentual={67} nome="Paulo Henrique" image={Perfil} />
                    <UserInfo percentual={50} nome="Paulo Henrique" image={Perfil} />
                    <UserInfo percentual={48} nome="Paulo Henrique" image={Perfil} />
                </Column>                
            </Container>
        </>
    )
}

export { Feed }