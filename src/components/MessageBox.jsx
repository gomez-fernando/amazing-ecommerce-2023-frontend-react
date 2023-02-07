import { Alert } from "react-bootstrap"

// const MessageBox = (props) => {
//   return (
//     <Alert variant={props.variant || 'info'}>{props.children}</Alert>
//   )
// }

const MessageBox = ({variant, children}) => {
  return (
    <Alert variant={variant || 'info'}>{children}</Alert>
  )
}

export default MessageBox