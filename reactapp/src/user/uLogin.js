import React,{Component} from 'react';
import "./uLogin.css";
export class uLogin extends Component{
    render(){
        return(
            <div>
                <center>
                <form action="/user/uMovies" method="GET" id="form">
                    <center><h6>User Login:</h6></center>
                    <label for="email" id="label">Email:</label>
                    <input type="email" name="email" required min="2" max="12" placeholder="Enter Your Email..." id="input"/>
                    <br></br>
                    <label for="password" id="label" title="If you dont remember your password please go to our offices for a reset!">Password:</label>
                    <input type="password" name="password" required min="2" max="5" placeholder="Enter Your Password" id="input"/>
                    <br></br><br></br>
                    <button name="submit" id="submit" class="button" >Submit</button>
                    <button name="reset" id="reset" class="button">Reset</button>
                    <br></br>
                    
                </form>
                </center>
                <div className="acc">
                    <center>
                    <p id="noAcc">No Account?<a href="">Click Here to Create One</a></p>
                    </center>
                    </div>
            </div>
        )
    }
}