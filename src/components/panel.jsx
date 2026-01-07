import { useState } from "react"
import Button from "./button";
import '../styles/panel.css'
export default function Panel(){
    const [ fullName , setFullName] = useState('');
    const [ email , setEmail] = useState('');
    const [ phone , setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);    
return (<>
<div className="popup-container">
<div hidden={submitted}>

          <input type="text" placeholder="Full Name" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}  />
          <br />

          <input type="email" placeholder="Email Address" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
          <br />

          <input type="text" placeholder="Phone Number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
        <br/> </div>
        <Button fullName={fullName} email={email} phone={phone} mewo={() => setSubmitted(!submitted)} submitted={submitted}/>
        </div>

</>)
}