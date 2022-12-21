import styled from "styled-components"

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;
`
export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`
export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`
export const TermosDeUso = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 19px;

    display: block;

    color: #FAFAFA;
    opacity: .7;
`
export const CriarConta = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 19px;
    margin-top: 20px;

    color: #FAFAFA;
    opacity: .7;

    span{
        color: #30c9c9;
        cursor: pointer;
        opacity: 1;
    }
`
export const Wrapper = styled.div`
    max-width: 300px;
`
export const Column = styled.div`
    flex: 1;
`
export const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`