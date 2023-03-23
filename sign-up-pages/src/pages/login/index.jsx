import { useNavigate  } from "react-router-dom";
import { useForm} from "react-hook-form";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { MdEmail, MdLock } from 'react-icons/md'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, ErrorText ,Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles';

const schema = yup.object({
    email: yup.string('Email não é valido').required(),
    password: yup.number().min(3, 'No minimo 3 caracteres').required(),
  }).required();

const Login = () => {

    const navigate = useNavigate();
    const { control, register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    console.log(errors)

    const onSubmit = data => console.log(data);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title> A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin> Faça seu Login</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" errormessage={errors.email.message}leftIcon={<MdEmail />} name="email"  control={control} />
                    <Input type="password" placeholder="Senha "  errormessage={errors.password.message}  leftIcon={<MdLock />}  name="senha" control={control} />
                    <Button title="Entrar" varian="secondary" type="submit"></Button>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText> Criar conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }