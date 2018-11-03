import styled from 'styled-components/native'
import {Control, Input} from "../../../../../styles/index";

export const FormControl =  styled(Control)`
    flex-direction: column;
    alignItems: center;
    
`

export const TextInput = styled(Input)`
    border: 1px solid ${props => props.error ? 'red' : 'steelblue'};
    height: 37px;
    flex: 1;
    padding: 5px;
`

export const ErrorContainer = styled.View`
    height: 20px;
`

export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
