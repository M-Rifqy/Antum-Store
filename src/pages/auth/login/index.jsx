import React from 'react';
import './style.css';
import Header from '../../../components/header';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object().shape({
  email: yup.string()
            .required('[ ! ] Email is required')
            .email('[ ! ] Invalid email format'),

  password: yup.string()
               .min(8, '[ ! ] Password should more than 8 characters')
               .required('[ ! ] Password is required')
               .matches(/[a-z]/g, '[ ! ] Password should contain at least 1 lowercase')
               .matches(/[A-Z]/g, '[ ! ] Password should contain at least 1 uppercase')
               .matches(/[0-9]/g, '[ ! ] Password should contain at least 1 number')
               .matches(/^\S*$/, '[ ! ] Password should not contain spaces')
})

export default function Login() {

    const handleLogin = async () => {

      const data = formik.values

      await axios
        .post('http://localhost:8080/login', data)
        .then(res => {
            localStorage.setItem('access_token', res.data.accessToken);
            window.location = '/';
        })
        .catch(err => {
          console.err(err);
        });
    };

    const formik = useFormik({
      initialValues: {
      email: '',
      password: ''
      },
      
      validationSchema: validationSchema,
      onSubmit: () => handleLogin()

    });
    //console.log(formik);

    return ( 
      <>
      <Header/>
      <div className='login-page'>
        <Form className='login-container mb-5' onSubmit={formik.handleSubmit}>
          <h1 className='l-h1'>Welcome Back !</h1>
          <p className='l-p'>We're so excited to see you again !</p>

          <Form.Group>
            <FloatingLabel
              className='l-label'
              controlId='floatingInput'
              label='Email'
            >
              <Form.Control
                type='email'
                name='email'
                placeholder='Email'
                {...formik.getFieldProps('email')}
              />
            </FloatingLabel>

            {formik.touched.email && formik.errors.email && <div className='l-error'>{formik.errors.email}</div>}
          </Form.Group>

          <Form.Group>
            <FloatingLabel
              className='l-label'
              controlId='floatingPassword'
              label='Password'
            >
              <Form.Control
                type='password'
                name='password'
                autoComplete="on"
                placeholder='Password'
                {...formik.getFieldProps('password')}
              />
            </FloatingLabel>

            {formik.touched.password && formik.errors.password && <div className='l-error'>{formik.errors.password}</div>}
          </Form.Group>

          <Button className='l-btn' type="submit" disabled={formik.isSubmitting}>Login</Button>

          <div className='no-register'>
            <span>Need an account ?</span>{" "}
            <span><a href='/register'>Register</a></span>
          </div>

        </Form>
      </div>
      </>
     );
    }
