import { Link } from "react-router-dom";

import banner from "../../assets/banner.png"
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Container, TitleContent, Title, TitleHighlight  } from './styles';
const Home = () => {
    return(<>
        <Header />
        <Link to="/login"> Fazer login </Link>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                    o seu futuro global
                </Title>
                <TitleContent>
                    Lero Lero Bla Bla Lero Lero Bla Bla Lero Lero Bla BlaLero Lero Bla BlaLero Lero Bla Bla
                </TitleContent>
                <Button title="Começar" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={banner} alt="Imagem Principal" />   
            </div>
        </Container>
        </>
    );        
};

export { Home }