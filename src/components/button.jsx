import '../styles/button.css'

export default function Button({fullName,email,phone,mewo,submitted}){
        console.log(fullName,email,phone,submitted)
    return (<>
    <div hidden={!submitted}>
        <h2>Full Name: {fullName}</h2>
        <h2>Email: {email}</h2>
        <h2>Phone: {phone}</h2>
    </div>
    <button onClick={(e) => {
    mewo();
    e.target.textContent = submitted ? "Submit" : "Edit";}}>Submit</button>
    
    </>)
}