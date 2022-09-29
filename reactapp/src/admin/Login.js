import React,{Component} from 'react';
import "./Login.css";

export class Login extends Component{
    render(){
        return(
            <div>
                <form action="/admin/Movies" method="Get">
                <h6>Admin Login:</h6>
                    <label for="email">Email:</label>
                    <input type="email" name="email" required min="2" max="12" placeholder="Enter Your Email..."/>
                    <br></br>
                    <label for="password">Password:</label>
                    <input type="password" name="password" required min="2" max="5" placeholder="Enter Your Password"/>
                    <br></br><br></br>
                <button name="submit" id="submit" >Submit</button>
                    <button name="reset" id="reset">Reset</button>
                </form>
            </div>
        )
    }
}