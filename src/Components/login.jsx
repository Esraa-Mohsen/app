import { useState } from "react";

import styles from "./login.module.css" ;

import Image from "next/image"; 
import axios from "axios";
// import pics from "../../public/Images/images.jpg" ;




export default function Login() {

    // code here ... .

    const [user , setUSer] = useState({
        username: "" ,
        email : "" ,
        Password : "" ,
    })


    let getInputvalue=  (e)=>{
        let myuser = {...user};    //deep copy
        myuser[e.target.name]=e.target.value ;
        setUSer(myuser);
        console.log(myuser);
     }


    let handleSubmit = async(e) =>
    {
        e.preventDefault();
        console.log(e)
        validate() 

        let {data} = await axios.post 
        (
            "https://plus.premast.com/api/1.1/wf/sign-up" , user
        ) ;
      if (message.data == "success"){
        alert("go to login ")
      }
      else {
        alert (data.message)
      }
    } 



    function validate(){
        // console.log('validate')

      
//username

    if(username.value.trim()=== ""){
        onError(username,"User Name cannot be empty");
   
         }else{
             onSuccess(username);
         }

         //email

         if(email.value.trim()===""){
            onError(email,"Email cannot be empty");
        }else{
            if(!isValidEmail(email.value.trim())){
                onError(email,"Email is not valid");
            }else{
                onSuccess(email);
            }
        }
    
        //password
        if(password.value.trim()===""){
            onError(password,"password cannot be empty");
         } if(!isValidpass(password.value.trim())){
            onError(password,"PAssword is not valid");

        }else{
            onSuccess(password);
        }
         

    }


//onsuccess
    function onSuccess(input){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="hidden"; 
        parent.classList.remove("error");
        parent.classList.add("success");  
        
    }

    //onError
    function onError(input,message){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText=message;  
        parent.classList.add("error");
        parent.classList.remove("success");
    
    }
    //RegEXP
    
    function isValidEmail(email){
       return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    } 
    
    function isValidpass(password){    
        return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) ;
    }

   




 




 
    return (
       <>
       
       


       <div className={styles.container}>
  <div className="content">

  <img src='../../Images/pic2.png' width={500}
      height={500} alt="logo" />

  

   

  </div>
  <form id="form" onSubmit={handleSubmit}>
    <div className="social">
      <div>
        <div className={styles.header}>
        <img src='../../Images/image 1.jpg'  width={100}
      height={100}  alt="img"  />
        
        

          <h1>Bellefit</h1>
          <br /><br /><br />
          <label htmlFor="username" name="username" />
          <i className= "fas fa-user" />
          <input onChange={getInputvalue} id="username" type="text" name="username" placeholder="Full Name" />
          <i className="fas fa-exclamation-circle failure-icon" />
          <i className="far fa-check-circle success-icon" />
          <br />
          <small>Error Message</small>
        </div>
        <div>
          <label htmlFor="email" />
          <i className="far fa-envelope" />
          <input onChange={getInputvalue} id="email" type="email" name="email" placeholder="email" />
          <i className="fas fa-exclamation-circle failure-icon" />
          <i className="far fa-check-circle success-icon" />
          <br />
          <small>Error Message</small>
        </div>
        <div>
          <label htmlFor="password" />
          <i className="fas fa-lock" />
          <input  onChange={getInputvalue} id="password" type="password" name="password" placeholder="Password " />
          <i className="fas fa-exclamation-circle failure-icon" />
          <i className="far fa-check-circle success-icon" />
          <br />
          <small className="error">Error Message</small>
        </div>
        <div className="check">
          <input style={{width: 20, height: 20}} type="checkbox" required />
          <label htmlFor="scales">I'm agree with Terms and privacy </label>
        </div>
        <button type="submit" id="submit">Submit</button>
      </div>
      <br /><br />
      <div className="question">
        Already Have an Account? 
        <span>log in</span>
      </div>
    </div></form>
</div>

       
       
       
       
       
       </>
      
    );
 
 }