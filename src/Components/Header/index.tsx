import { Container, Top, UserName, Logo } from "./styles";

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
    return (
        <Container>
            <Top>
                <Logo source={require('../../assets/Nubank_Logo.png')}/>
                <UserName>Daniel</UserName>
            </Top>
                <Icon name={'keyboard-arrow-down'} size={20} color="#FFF"/>
        </Container>

    )
}