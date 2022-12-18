import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { Input } from '../../components/Input'

import { api } from '../../services/api'

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
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo Obrigatório'),
    password: yup.number().min(3, 'Mínimo de 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve algum erro')
        }
    }
    
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message } control={control} placeholder="E-mail" leftIcon={<EmailIcon />} />                            
                            <Input name="password" errorMessage={errors?.password?.message } control={control} placeholder="Senha" type="password" leftIcon={<LockIcon />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
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