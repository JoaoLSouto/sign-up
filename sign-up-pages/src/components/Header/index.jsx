import React from 'react'
import logo from  '../../assets/logo-dio.png'
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


export default function Header() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo" />
                <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                </BuscarInputContainer>
                <Menu> Live Code</Menu>
                <Menu> Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }