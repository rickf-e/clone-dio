import styled, { css } from 'styled-components'
import { IButtonStyled } from './types'

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4104C;

        &:hover{
            background-color: #E4105D;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% - -11px);
            height: calc(100% + 8px);
            border-radius: 22px;
        }
    `}
`