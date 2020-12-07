import {
  Component
} from 'react'
import {
  Button
} from '../components/button'

import Display from '../components/display'


class Calculator extends Component {
  render() {
    return ( <
      div className = {
        'calculator'
      } >
      <
      div className = "displayContainer" >
      <
      Display value = {
        ''
      }
      /> < /
      div > <
      div className = {
        "buttonContainer"
      } > <
      Button display = {
        '1'
      }
      /> <
      Button display = {
        '2'
      }
      /> <Button display={'3'} / > <
      Button display = {
        '4'
      }
      /> <Button display={'5'} / >
      <
      Button display = {
        '6'
      }
      />  <
      Button display = {
        '7'
      }
      / > <
      Button display = {
        '8'
      }
      /> <Button display={'9'} / > <
      Button display = {
        '0'
      }
      /> <Button display={'+'} / >

      <
      Button display = {
        'X'
      }
      / > <
      Button display = {
        '/'
      }
      /> <Button display={'='} / >
      <
      Button display = {
        'C'
      }
      />

      <
      /div> < /
      div >

    );
  }
}

export default Calculator