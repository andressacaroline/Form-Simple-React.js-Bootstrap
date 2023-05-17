import React, { useState } from "react";
import './App.css';
import { SignIn } from "./components/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";

function App() {
  const [currentForm, setCurrentForm] = useState('SignIn');

  const toggleForm = (formName) => { /* A função 'toggleForm' é usada para alternar entre os formularios,
  ela tbm atualiza o estado do componente  */
    setCurrentForm(formName);
  }
/* Se 'currentForm' for igual a "login", o componente <Login> é renderizado com a propriedade 'onFormSwitch' 
que é uma referência à função toggleForm. */

/*Se 'currentForm' não for igual a "login", o componente <Register> é renderizado com a propriedade 
'onFormSwitch' que é uma referência à função toggleForm. */
  return (
    <div className="App">
      {
        currentForm === "SignIn" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;