import React from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, error, loading, handleGoogleSignIn, loginWithEmail } = useAuth();

    const { register, handleSubmit } = useForm();

    const history = useNavigate();
    const location = useLocation();

    const onSubmit = data => {
        console.log(data);
        loginWithEmail(data.email, data.password, location, history);
    };
    return (
        <div>
            <div className="login text-center">
                <h2 className="login-heading">Please Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder='Your Email' required="required" /> <br />
                    <input {...register("password")} type='password' placeholder='Your Password' required="required" /> <br />
                    <Link to='/register'>New User? Please Register</Link> <br />
                    <Button className="login-btn m-3" variant='contained' type="submit" >Login</Button>
                </form>
                {loading && <div>
                    <Spinner /> <br />
                </div>}
                {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                {error && <Alert variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>}
                <Button onClick={handleGoogleSignIn} variant='contained'>Google sign In</Button>
            </div>

        </div>
    );
};

export default Login;