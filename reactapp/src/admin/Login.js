import React,{Component} from 'react';
import "../user/uLogin.css";

export class Login extends Component{
    render(){
        return(
            <div>
                <center>
                <form action="/admin/Movies" method="Get" id="form">
                <center><h6>Admin Login:</h6></center>
                    <label for="email" id="label">Email:</label>
                    <input type="email" name="email" required min="2" max="12" placeholder="Enter Your Email..." id="input" />
                    <br></br>
                    <label for="password" id="label">Password:</label>
                    <input type="password" name="password" required min="2" max="5" placeholder="Enter Your Password" id="input"/>
                    <br></br><br></br>
                    <button name="submit" id="submit" class="button" >Submit</button>
                    <button name="reset" id="reset" class="button">Reset</button>
                </form>
                </center>
            </div>
        )
    }
}