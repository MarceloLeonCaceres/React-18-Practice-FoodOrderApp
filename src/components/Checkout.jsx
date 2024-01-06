import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import { useInput } from "../hooks/useInput.js";

export default function Checkout() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput('', (value) => hasMinLength(value.trim(), 6));

    function handleSubmit(event){

    }
  
    return (
    <form onSubmit={handleSubmit}>
      <div className="control-row">
        <Input
            label="Email"
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={hadleEmailChange}
            value={emailValue}
            error={emailHasError && "Por favor ingrese un email valido"}
        />
        <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            value={passwordValue}
            error={passwordHasError && "Por favor ingrese un password valido"}
        />
      </div>
      <p className="form-actions">
        <button className="button">Close</button>        
        <button className="button">Submit Order</button>
      </p>
    </form>
  );
}
