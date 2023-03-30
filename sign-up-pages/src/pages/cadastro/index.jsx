import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle} from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('esse E-mail não é válido').required(),
    password: yup.string().min(3,'No minimo 3 caracteres').required(),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate()
    const handleClickSignIn = () => {
        navigate('/feed')
    }
    const handleClickLogin = () => {
        navigate('/login')
    }
    const { control } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece gratis</TitleLogin>
                <SubtitleLogin>Faça seu cadastro e make the change.</SubtitleLogin>
                <form >
                    <Input  name="name" control={control} placeholder="Nome completo" leftIcon={<MdAccountCircle />}  />
                    <Input  name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />}  />
                    <Input  name="password" control={control} type="password" placeholder="Senha" leftIcon={<MdLock />} />
                    
                    <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleClickSignIn}/>
                </form>
                <SubtitleLogin>
                        Ao criar a sua conta, você concorda com as politicas de privacidade
                        e os termos de uso da dio.
                    </SubtitleLogin>
                <Row>

                    <EsqueciText>Já tem login? </EsqueciText>
                    <CriarText onClick={handleClickLogin}>Fazer login</CriarText>
                    
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }
