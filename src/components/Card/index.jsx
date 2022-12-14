import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Banner from '../../assets/banner-user.png'
import Perfil from '../../assets/perfil.jpg'

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    UserInfo,
    PostInfo,
    UserPicture
} from './styles'

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src={Banner} />
            <Content>
                <UserInfo>
                    <UserPicture src={Perfil} />
                    <div>
                        <h4>Paulo Henrique</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de ReactJS</h4>
                    <p>Um simples projeto feito no curso de Web Developer no bootcamp da DIO.</p>
                    <p><strong>Saiba Mais...</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <ThumbUpIcon />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }