import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Content, Card,CardHeader,CardContent, Title, Description, CardFooter, Annotation} from './styles'

import Header from "../../Components/Header";
import Tabs from "../../Components/Tabs";


export default function Main() {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardHeader>
                        <Icon name={'attach-money'} size={28} color="#000"/>
                        <Icon name={'visibility-off'} size={28} color="#000"/>
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo Disponivel</Title>
                        <Description>R$ 197.611</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>Transferencia recebida de $20 dolares de Joas</Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs/>
        </Container>

    )
}
