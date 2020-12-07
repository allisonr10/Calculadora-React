  import React, {
    Component
  } from 'react';

  export class Button extends Component {


    handleClick() {
      const {
        disabled,
        onClick
      } = this.props;

      if ((onClick) && (!disabled))
        this.props.onClick();
    }

    render() {
      const cssButton = this.props.disabled ? "button disabled" : "button";
      return ( <
        div className = {
          cssButton
        }
        onClick = {
          this.handleClick.bind(this)
        } > {
          this.props.display
        } <
        /div>
      )
    }
  }