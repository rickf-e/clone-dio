import { Link } from 'react-router-dom'

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import { 
    Container,
    TextContent,
    Title,
    TitleHighLight
 } from './styles'

const Home = () => {
    return(
        <>
            <Header />
            <Container>
                <div>
                    <div>
                        <Title>                            
                            <TitleHighLight>
                                Implemente
                                <br /> 
                            </TitleHighLight>
                            O seu futuro global agora!
                        </Title>
                        <TextContent>
                            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                        </TextContent>
                        <Button title="Começar agora" variant="secondary" onClick={() => null} />
                    </div>
                </div>
                <div>
                    <img src={bannerImage} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}

export {Home}