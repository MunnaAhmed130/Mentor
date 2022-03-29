import React from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../../SharedComponents/Footer/Footer';

const Login = () => {
    const { user, error, loading, signInWithGoogle, signInWithEmail } = useAuth();

    const { register, handleSubmit } = useForm();

    const history = useNavigate();
    const location = useLocation();

    const onSubmit = data => {
        console.log(data);
        signInWithEmail(data.email, data.password, location, history);
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <div className="login text-center ">
                <h2 className="login-heading">Please Login</h2>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder='Your Email' required="required" /> <br />
                    <input {...register("password")} type='password' placeholder='Your Password' required="required" /> <br />
                    <Link to='/register'>New User? Please Register</Link> <br />
                    <Button className="login-btn m-3" type="submit" >Login</Button>
                </form>
                {loading && <div>
                    <Spinner /> <br />
                </div>}
                {user?.email && <Alert variant='success'>Successfully log in</Alert>}
                {error && <Alert variant="danger" dismissible>
                    <Alert.Heading>{error}</Alert.Heading>

                </Alert>}
                <Button onClick={handleSignInWithGoogle} className="login-btn">Google sign In</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;