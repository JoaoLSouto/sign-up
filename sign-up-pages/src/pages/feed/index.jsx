import { useNavigate  } from "react-router-dom";
import banner from '../../assets/banner.png'

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Container, Title, TitleHighlight, TextContent } from './styles';
import { Card } from '../../components/Card'
const Feed = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/')
    }

    return (<>
        <Header />
        <Container>
            <Card/>
        </Container>
    </>)
}

export { Feed }