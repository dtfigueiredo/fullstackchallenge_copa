import axios from 'axios'
import { Formik } from 'formik'
import { useLocalStorage } from 'react-use'
import { useRecoilValue } from 'recoil'
import * as yup from 'yup'

import { authUser } from '../../Atoms'

interface CardProps {
  gameId: string
  teamA: string
  teamB: string
  match: string
}

export const Card = ({ gameId, teamA, teamB, match }: CardProps) => {
  const userAuth = useRecoilValue(authUser)
  const [auth] = useLocalStorage('natrave-login', userAuth)
  //
  const validationSchema = yup.object().shape({
    teamAScore: yup.string().required(),
    teamBScore: yup.string().required(),
  })

  return (
    <div className='w-full flex flex-col justify-center items-center p-4 border border-grey-700 rounded-2xl'>
      <span className='text-grey-700 text-sm lg:text-base pb-4'>{match}</span>

      <Formik
        //validationSchema
        validationSchema={validationSchema}
        //submit
        onSubmit={(values) => {
          axios({
            method: 'POST',
            baseURL: 'http://localhost:3000',
            url: '/hunches',
            //passing the accessToken from the localstorage
            headers: {
              authorization: `Bearer ${auth?.accessToken}`,
            },
            //passing all the values from the form and the gameId to be updated
            data: {
              ...values,
              gameId,
            },
          })
          // .catch(() => setAxiosErr(true))
        }}
        initialValues={{
          teamAScore: '',
          teamBScore: '',
        }}>
        {(props) => (
          <form className='flex flex-col justify-center items-center gap-4'>
            <div className='flex justify-center items-center space-x-2 lg:space-x-4'>
              <span className='uppercase hidden xs:block'>{teamA}</span>
              <img
                className='w-14 h-14'
                src={`./flags/${teamA}.png`}
                alt='bandeira da suíça'
              />
              <input
                type='number'
                name='teamAScore'
                value={props.values.teamAScore}
                onChange={props.handleChange}
                onBlur={props.handleSubmit}
                formikerr={props.touched.teamAScore && props.errors.teamAScore}
                className={`w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700 outline-none ${
                  !props.isValid && 'border-2 border-red-300'
                }`}
              />

              <span className='uppercase text-red-700 lg:text-xl font-bold'>x</span>

              <input
                type='number'
                name='teamBScore'
                value={props.values.teamBScore}
                onChange={props.handleChange}
                onBlur={props.handleSubmit}
                formikerr={props.touched.teamBScore && props.errors.teamBScore}
                className={`w-[60px] h-[60px] p-1 rounded-2xl bg-red-300/[0.2] text-lg text-center text-red-700 outline-none ${
                  !props.isValid && 'border-2 border-red-300'
                }`}
              />
              <img
                className='w-14 h-14'
                src={`./flags/${teamB}.png`}
                alt='bandeira de camarões'
              />
              <span className='uppercase hidden xs:block'>{teamB}</span>
            </div>

            {!props.isValid ? (
              <div className='text-sm text-red-500 ml-1'>Preencha os dois campos do placar</div>
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  )
}
