import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'

const Card = () => {
    return (
        <CardContainer>
          <ImageBackground />
          <Content>
            <UserInfo>
              <UserPicture />
              <div>
                <h4>
                  João Lucas
                </h4>
                <p>Há 8 minutos</p>
              </div>
            </UserInfo>
            <PostInfo>
              <h4>Projeto para curso de HTML e CSS</h4>
              <p>Projeto feito o curso de html e css no bootcamp <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
              <h4> #HTML #CSS #JAVASCRIPT</h4>
              <p>
                <FiThumbsUp />10
              </p>
              
            </HasInfo>
          </Content>
        </CardContainer>
    )
}

export { Card }