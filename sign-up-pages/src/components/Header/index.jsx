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


const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu> Live Code</Menu>
                        <Menu> Global</Menu>
                    </>
                ) : null }
  
            </Row>
            <Row>
                {autenticado ? (    
                    <UserPicture src="https://avatars.githubusercontent.com/u/98335519?v=4" />
                ) : (
                    <>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }