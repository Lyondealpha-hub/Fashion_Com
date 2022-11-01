import { useState } from 'react';
import { MdEmail, MdPassword, MdPersonOutline, MdPhone } from 'react-icons/md';
import Axios from 'axios';



const Register = () => {
    const [username, setUserName] = useState('')
    const  [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpwd, setConfirmpwd] = useState("")
    const [phone, setPhone] = useState('')


    const submitForm =(e)=>{
        // e.preventDefault();

        Axios.post("http://localhost:3001/api/Register",{

            username: username,
            email:email,
            password:password,
            confirmpwd:confirmpwd,
            phone:phone,

            
        }).then((response)=>{
            if(!response){
                console.log(response.status)
            }else{
                localStorage.setItem('token',  response.data.token)
                console.log(response.data);
            }
        })

        Axios.get('http://localhost:3001/api/isUserAuth', {
            headers : {
                "x-access-token": localStorage.getItem('token')
            }
        }).then((response)=>{
            console.log(response);
            if(response.data.auth === true){
                window.location.assign('http://localhost:3000/Convo')
            }
        })
    }
    return (
        
        <div  className='Register'>
            <div className='Register_template'>
                <form>
                    <h1>Customer Registration</h1>

                    <div className='form_fields'>
                        <MdPersonOutline size={30} style={{padding:'20px 0'}}/>
                        <input type='Username' placeholder='UserName' onChange={(e)=>{setUserName(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <MdEmail size={30} style={{padding:'20px 0'}} />
                        <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <MdPassword size={30} style={{padding:'20px 0'}} />
                        <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <MdPassword size={30} style={{padding:'20px 0'}} />
                        <input type='password' placeholder='Confirm Password' onChange={(e)=>{setConfirmpwd(e.target.value)}}  />
                    </div>
                    <br/>
                    <div className='form_fields'>
                        <MdPhone size={30} style={{padding:'20px 0'}} />
                        <input type='number' placeholder='Tel Number' onChange={(e)=>{setPhone(e.target.value)}}  />
                    </div>
                    <br/>
                    <p style={{ textAlign: 'left', margin: '5px 100px' }}> <small> By clicking Sign Up/Register, you agree to <span style={{ color: 'black' }}> our Terms and Conditions, Data Policy</span> and acknowledge you read the <span style={{color:'black'}}> Privacy Policy.</span> </small> </p>
                    
                    <button style={{width:'55%',alignItems:'center'}} onClick={submitForm}> Register</button>
                    <br/>
                    <div className='links' style={{display:'inline-flex', marginTop:'45px', fontSize:'18px'}}>
                        <li style={{marginLeft:'50px',listStyle:'none',padding:'0 30px'}}> <a style={{color:'#000'}} href='/Login'>Customer Login</a> </li>
                        <li style={{listStyle:'none'}}> <a style={{color:'#000'}} href='/CreateAccount'>Register Membership</a></li>
                    </div>
                </form>


            </div>
        </div>
    );
}
 
export default Register;