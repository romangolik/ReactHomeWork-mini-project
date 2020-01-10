import React, { useState } from "react";
import './Form.scss'

function FormComponent() {
    const [valid, setValid] = useState({
        check: {
            username: null,
            email: null,
            password: null,
            phone: null,
            confirmPassword: null
        },
        errors: {
            username: '',
            email: '',
            password: '',
            phone: '',
            confirmPassword: '',
        }
    });

    function handleChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = valid.errors;
        let check = valid.check;
        const validEmailRegex =
            RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        const validPhoneRegex =
            RegExp(/^\+380\d{3}\d{2}\d{2}\d{2}$/i);

        switch (name) {
            case 'username':
                errors.username = value.length < 3 ? 'Username must be 3 characters long!' : '';
                check.username = value;
                break;
            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                check.email = value;
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
                errors.confirmPassword = (valid.check.confirmPassword === value) ? '' : 'Passwords do not match!'
                check.password = value;
                break;
            case 'phone':
                errors.phone = validPhoneRegex.test(value) ? '' : 'Phone is not valid!';
                check.phone = value;
                break;
            case 'confirmPassword':
                errors.confirmPassword = (valid.check.password === value && value.length >= 8) ? '' : 'Passwords do not match!';
                check.confirmPassword = value;
                break;
            default:
                break;
        }
        setValid({errors, check});
    }

    function handleSubmit(event) {
        const validateForm = (errors) => {
            let validate = true;
            Object.values(errors).forEach(
                (val) => val.length > 0 && (validate = false)
            );
            return validate;
        };

        event.preventDefault();
        if (validateForm(valid.errors)) {
            alert('Valid Form')
        } else {
            alert('Invalid Form')
        }
    };

    const {errors} = valid;
    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <div className="form-group">
                    <p className="text"><label htmlFor="username">Username</label></p>
                    <input
                        type="text"
                        className={errors.username ? "form-control error" : "form-control"}
                        name="username"
                        id="username"
                    />
                    {errors.username.length > 0 &&
                    <p className='error'>{errors.username}</p>}
                </div>
                <div className="form-group">
                    <p className="text"><label htmlFor="email">Email address</label></p>
                    <input
                        type="email"
                        className={errors.email ? "form-control error" : "form-control"}
                        name="email"
                        id="email"
                    />
                    {errors.email.length > 0 &&
                    <p className='error'>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <p className="text"><label htmlFor="password">Password</label></p>
                    <input
                        type="password"
                        className={errors.password ? "form-control error" : "form-control"}
                        name="password"
                        id="password"
                    />
                    {errors.password.length > 0 &&
                    <p className='error'>{errors.password}</p>}
                </div>
                <div className="form-group">
                    <p className="text"><label htmlFor="confirmPassword">Confirm Password</label></p>
                    <input
                        type="password"
                        className={errors.confirmPassword ? "form-control error" : "form-control"}
                        name="confirmPassword"
                        id="confirmPassword"
                    />
                    {errors.confirmPassword.length > 0 &&
                    <p className='error'>{errors.confirmPassword}</p>}
                </div>
                <div className="form-group">
                    <p className="text"><label htmlFor="phone">Phone number</label></p>
                    <input
                        type="tel"
                        className={errors.phone ? "form-control error" : "form-control"}
                        name="phone"
                        id="phone"
                    />
                    {errors.phone.length > 0 &&
                    <p className='error'>{errors.phone}</p>}
                </div>
                <button type="submit" className="submit">
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default FormComponent;