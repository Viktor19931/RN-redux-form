import styled from 'styled-components/native'
import {Button} from "../Auth/components/Button/Button";
import { Text } from '../../styles/Text'

export const CounterText = styled(Text)`
    font-weight: bold;
    color: darkgreen;
    text-align: center;
`

export const CounterBtn = styled(Button)`
    border-radius: 5;
    margin-bottom: 20;
    width: 120;
    color: black;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
`
