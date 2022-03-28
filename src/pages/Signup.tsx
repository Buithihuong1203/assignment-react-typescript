import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signup } from '../api/auth';

type TypeInputs = {
    name: string,
    email: string,
    password: string

}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const nvigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div>
            <form className="container my-5">
                <div className="form-group row">
                    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Name" {...register('name')} />
                    </div>
                </div>
                <br />
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
                        <input type="password" className="form-control" placeholder="Password" {...register('password')} />
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
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

export default Signup