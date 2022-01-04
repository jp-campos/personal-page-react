import Card from './components/Card.js';
import IconText from './components/IconText.js';
import {currAge,yearsExp} from './utility/age_calculator.js';

function App() {
  return (
    <body>
      <h1>About me</h1>
      <Card imageBackground>
        <div className="about-container">
         <IconText asset='location'>Bogotá, Colombia  </IconText> 
          <IconText asset='timezone'>GMT-5</IconText>
          <IconText asset='language'>English/Spanish</IconText>
        </div>

        <p>
          I am a {currAge()} years old Systems and Computing engineer with {yearsExp()} of experience.
        </p>
      </Card>

      <h1>Changuita</h1>
      <Card contentBackground>
        
      </Card>
    </body>
  )
}

export default App;
