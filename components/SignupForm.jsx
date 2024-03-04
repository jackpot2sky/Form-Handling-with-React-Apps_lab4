import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignupForm = () => {
    const formSchema = yup.object({
        firstName: yup.string().required('First name is Required').max(15, 'Must be 15 characters or less'),
        lastName: yup.string().required('Last name is Required').max(20, 'Must be 20 characters or less'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" {...register('firstName')} />
                    <p>{errors.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" {...register('lastName')} />
                    <p>{errors.lastName?.message}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignupForm;