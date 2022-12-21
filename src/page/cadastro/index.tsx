import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Input } from '../../components/Input'

import { 
    Container,
    Title,
    TitleLogin,
    SubtitleLogin,
    TermosDeUso,
    CriarConta,
    Wrapper,
    Column,
    Row
} from './styles'
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.number().min(3, 'Mínimo de 3 caracteres').required('Campo Obrigatório'),
}).required();

const Cadastro = () => {
    

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    return(
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas do mercado.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change.</SubtitleLogin>
                        <form>
                            <Input name="text" control={control} placeholder="Nome Completo" leftIcon={<PersonIcon style={{ color: "#AE37FF" }} />} /> 
                            <Input name="email" control={control} placeholder="E-mail" leftIcon={<EmailIcon style={{ color: "#AE37FF" }} />} />                            
                            <Input name="password" control={control} placeholder="Senha" type="password" leftIcon={<LockIcon style={{ color: "#AE37FF" }} />} />
                            <Button title="Criar minha conta" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <TermosDeUso>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermosDeUso>
                            <CriarConta>Já tenho uma conta. <span>Fazer Login</span></CriarConta>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Cadastro}