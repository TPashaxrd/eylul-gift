import Intro from "./components/Intro";
import PasswordGate from "./components/PasswordGate";

export default function App() {
  return(
    <>
     <PasswordGate />
     <Intro onEnter={() => {
      window.location.href = "/home";
    }} />
    </>
  )
}