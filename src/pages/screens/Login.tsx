import axios from 'axios'
import { Formik } from 'formik'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as yup from 'yup'

import logo from '../../assets/logo/logo-fundo-branco.svg'
import { authUser, axiosError } from '../../Atoms'
import { Icon, InputBlock, RegisterSubmitButton } from '../../components'

const validationSchema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Preencha seu email'),
  password: yup.string().required('Preencha sua senha'),
})

export const Login = () => {
  const [axiosErr, setAxiosErr] = useRecoilState(axiosError)
  const userAuth = useRecoilValue(authUser)
  const [auth, setAuth] = useLocalStorage('natrave-login', userAuth)

  if (auth) {
    return (
      <Navigate
        to='/dashboard'
        replace={true}
      />
    )
  }

  return (
    <section className='min-h-screen bg-silver'>
      <header className='flex justify-center items-center py-6 border-b border-red-300'>
        <img
          src={logo}
          alt='logotipo na trave'
        />
      </header>

      <main className='w-11/12 max-w-[600px] mx-auto'>
        <div className='w-full py-6 lg:py-[72px] flex flex-col justify-center items-center gap-2'>
          <header className='w-full flex justify-start items-center'>
            <a href='/'>
              <Icon title='backarrow' />
            </a>
            <h2 className='ml-5 text-red-700 font-bold text-xl'>Entre na sua conta</h2>
          </header>

          <Formik
            //validationSchema
            validationSchema={validationSchema}
            //loging the user and sending to the home page
            onSubmit={async (values) => {
              const result = await axios({
                method: 'GET',
                baseURL: 'http://localhost:3000',
                url: '/login',
                //the auth prop manage the creation of the token64 for the login
                auth: {
                  username: values.email, //username is the prop name that the backend expects
                  password: values.password,
                },
              }).catch(() => setAxiosErr(true))

              // saving the token into the local storage
              if (result) {
                setAuth(result.data)
              }
            }}
            initialValues={{
              email: '',
              password: '',
            }}>
            {(props) => (
              <form
                onSubmit={props.handleSubmit}
                className='w-full mt-8 flex flex-col gap-4'>
                <InputBlock
                  label='Seu email'
                  type='email'
                  name='email'
                  id='email'
                  formikErr={props.touched.email && props.errors.email}
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder='Digite seu email'
                  isPassword={false}
                />
                <InputBlock
                  label='Sua senha'
                  type='password'
                  name='password'
                  id='password'
                  formikErr={props.touched.password && props.errors.password}
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder='Digite sua senha'
                  isPassword
                />

                <RegisterSubmitButton
                  disabled={!props.isValid || props.isSubmitting}
                  route='/dashboard'
                  isSubmitting={props.isSubmitting}
                />
                {axiosErr ? (
                  <span className='text-center text-red-500 ml-1'>Usuário ou senha incorretos</span>
                ) : null}
              </form>
            )}
          </Formik>
        </div>
      </main>
    </section>
  )
}
