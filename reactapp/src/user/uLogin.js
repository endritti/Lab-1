import React,{Component} from 'react';
import "./uLogin.css";
export class uLogin extends Component{
    render(){
        return(
            <div>
                <form action="/user/uMovies" method="Get">
                    <h6>User Login:</h6>
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