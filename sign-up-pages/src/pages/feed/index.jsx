import React from 'react'

import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title> Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight> #Ranking 5 top na Semana!</TitleHighlight>
            <UserInfo percentual={35} nome="João" image="https://avatars.githubusercontent.com/u/98335519?v=4"/>
            <UserInfo percentual={37} nome="Lucas" image="https://avatars.githubusercontent.com/u/98335519?v=4"/>
            <UserInfo percentual={20} nome="Souto" image="https://avatars.githubusercontent.com/u/98335519?v=4"/>
            <UserInfo percentual={95} nome="Fulano" image="https://avatars.githubusercontent.com/u/98335519?v=4"/>
            <UserInfo percentual={20} nome="Siclano" image="https://avatars.githubusercontent.com/u/98335519?v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }