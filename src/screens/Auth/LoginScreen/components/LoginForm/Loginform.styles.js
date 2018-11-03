import styled from 'styled-components/native'
import {Control, Input} from "../../../../../styles/index";

export const FormControl =  styled(Control)`
    flex-direction: row;
    height: 50px;
    alignItems: center;
`

export const TextInput = styled(Input)`
    border: 1px solid steelblue;
    height: 37px;
    flex: 1;
    padding: 5px;
`

export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
