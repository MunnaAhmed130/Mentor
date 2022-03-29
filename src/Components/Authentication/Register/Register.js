import React from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { user, error, loading, registerWithEmail } = useAuth();
    const history = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.password2) {
            alert('your password did not match')
            return
        }
        registerWithEmail(data.email, data.password, data.name, history);
        console.log(user)
    };
    return (
        <div>
            <h2 className="register-heading text-center">Please Register</h2>
            {!loading &&
                <form className="register-form text-center" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })} placeholder="Your name" required="required" /> <br />
                    <input {...register("email", { required: true })} placeholder="Your email" required="required" /> <br />
                    <input type="password" {...register("password", { required: true })} placeholder="Your password" required="required" /> <br />
                    <input type="password" {...register("password2", { required: true })} placeholder="Confirm your password" required="required" /> <br />
                    <Link to='/login'>Already Registered? Login</Link> <br />
                    <Button className="mb-3" variant="contained" type="submit">Register</Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </form>}
            {loading && <div className='circle'>
                <Spinner /> <br />
            </div>}
            {user?.email && <div className='circle'>
                <Alert severity="success" >This is a success alert — check it out!</Alert>
            </div>}
        </div>
    );
};

export default Register;