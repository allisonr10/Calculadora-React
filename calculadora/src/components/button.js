const {
  Component
} = require("react");

export class Button extends Component {

  handleClick() {
    if (this.props.onClick)
      this.props.onClick()
  }
  render() {
    return ( <
      div className = {
        "button"
      }
      onClick = {
        this.handleClick.bind(this)
      } > {
        this.props.display
      } < /div>
    )
  }
}