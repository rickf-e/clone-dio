import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Input } from '../../components/Input'

import { 
    Container,
    Title,
    TitleLogin,
    SubtitleLogin,
    RecuperarSenha,
    CriarText,
    Wrapper,
    Column,
    Row
 } from './styles'

const Login = () => {
    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form>
                            <Input placeholder="E-mail" leftIcon={<EmailIcon />}/>                            
                            <Input placeholder="Senha" type="password" leftIcon={<LockIcon />} />
                            <Button title="Entrar" variant="secondary" />
                        </form>
                        <Row>
                            <RecuperarSenha>Esqueci minha senha</RecuperarSenha>
                            <CriarText>Criar uma conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Login}