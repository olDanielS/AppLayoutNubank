import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Content, Card,CardHeader,CardContent, Title, Description, CardFooter, Annotation} from './styles'

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from "../../Components/Header";
import Tabs from "../../Components/Tabs";
import Menu from '../../Components/Menu';


export default function Main() {
    const translateY = new Animated.Value(0);

    const animetedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        {useNativeDriver: true},
    );

    function onHandlerStateChanged(event:any){
        console.log(event)
    }

    return (
        <Container>
            <Header/>
            <Content>
                <Menu/>

                <PanGestureHandler
                    onGestureEvent={animetedEvent}
                    onHandlerStateChange={onHandlerStateChanged}
                >
                <Card style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange:[0, 380],
                            outputRange:[0,380],
                            extrapolate: 'clamp'
                        })
                    }]
                
                }}>
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
                </PanGestureHandler>
            </Content>

            <Tabs/>
        </Container>

    )
}
