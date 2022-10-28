import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form} from './Form'

function SignUp({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, email, password, password_confirmation} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            password_confirmation
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => { res.json().then(user => {
                updateUser(user)
                history.push(`/users/${user.id}`)
                })}
            // }else {
            //     res.json().then(json => setErrors(this.entries(json.errors)))
            // }
        )
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <> 
        <form onSubmit={onSubmit}>
        <label>
          Username
          </label>  
          <input type='text' name='name' value={name} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
         <label>
         Password Confirmation
         </label>
        <input type='password' name='password_confirmation' value={password_confirmation} onChange={handleChange} />
       
        <input type='submit' value='Sign up!' />
      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp