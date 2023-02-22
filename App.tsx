import { StatusBar } from "react-native"
import Main from "./src/Pages/Main"

export default function App(){
  return(
    <>
      <StatusBar barStyle='light-content' backgroundColor="#8810AE"/>
      <Main/>
    </>
  )
}