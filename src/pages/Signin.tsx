import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signin } from '../api/auth';
import { authenticated } from '../utils/localStorage';

type TypeInputs = {
    email: string,
    password: string
}
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const { data: user } = await signin(data);
        console.log(user);
        authenticated(user, () => {
            navigate('/');
        })


    }

    return (
        <div>
            <form className="container my-5">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" placeholder="Email" {...register('email')} />
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <br />

                <br />
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Signin