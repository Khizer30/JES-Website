import { useState } from "react" ;
import emailjs from "@emailjs/browser" ;
import type * as React from "react" ;

// Inputs Interface
interface Inputs
{
  name: string ;
  email: string ;
  contact: string ;
  subject: string ;
  message: string ;
}

// Franchise
function Franchise(): JSX.Element
{
  // Variables
  const [inputs, setInputs] = useState<Inputs>({ name: "", email: "", contact: "", subject: "", message: "" }) ;
  const form: HTMLFormElement = document.getElementById("theForm")! ;

  // Send Email
  function send(): void
  {
    if (checkIt(inputs.name, 30) && checkIt(inputs.email, 50) &&
    (inputs.contact, 30) && checkIt(inputs.subject, 30) && checkIt(inputs.message, 500))
    {
      emailjs.sendForm("service_lbk0op9", "jes_franchise", form, "n1WTOESB7GzuR5U_a")
      .then(() => alert("Form Submitted! We Will Contact You Shortly!"))
      .catch(() => alert("Error Submitting The Form! Please Try Later!")) ;
    }
    else
    {
      alert("Please, Complete The Form!") ;
    }
  }

  // Handle Change
  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void
  {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value })) ;
  }

  // Check Input
  function checkIt(it: string, len: number): boolean
  {
    if ((it !== "") && (it.length <= len))
    {
      return true ;
    }
    else
    {
      return false ;
    }
  }

  return (
  <>
    <input name="name" type="text" maxLength={ 30 } required
    placeholder="Name*" className="form-control franchiseTxt" autoFocus
    value={ inputs.name } onChange={ handleChange } />
    
    <input name="email" type="email" maxLength={ 50 } required
    placeholder="Email*" className="form-control franchiseTxt"
    value={ inputs.email } onChange={ handleChange } />

    <input name="contact" type="text" maxLength={ 30 } required
    placeholder="Contact*" className="form-control franchiseTxt"
    value={ inputs.contact } onChange={ handleChange } />

    <input name="subject" type="text" maxLength={ 30 } required
    placeholder="Subject*" className="form-control franchiseTxt"
    value={ inputs.subject } onChange={ handleChange } />

    <textarea name="message" maxLength={ 500 } wrap="off" required
    placeholder="Message*"  className="form-control franchiseTxtArea"
    value={ inputs.message } onChange={ handleChange }></textarea>

    <div className="text-center">
      <button type="button" onClick={ send } className="franchiseBtn2"> Submit </button>
    </div>
  </>
  )
}

// Export Franchise
export default Franchise ;