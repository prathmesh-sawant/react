const Button = (props) =>{
     return(
          <>
          <button onClick={props.func} style={{backgroundColor:"cyan", marginRight:"10px",}}>
               {props.text}</button>
          </>
     )
}

export default Button;  