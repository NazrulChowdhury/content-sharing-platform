import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";

interface IFormInput {
  userName: string;
  email: string;
  password : string;
}

const Signup = () => {
  const {register, formState: { errors }, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
      console.log('form submitted :)')
    console.log(data)
  };
console.log('errors ---->>>', errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="userName"
          label="Username"
          variant="standard"
          error = {errors.userName ? true : false}
          helperText={errors.userName? errors.userName.message : null}
          {...register("userName", { 
              required: {value : true, message : "please enter a Username"},
              maxLength: {value: 3, message : "Username has to be between 3-16 characters"},
              minLength: {value: 16, message : "Username has to be between 3-16 characters"}
          })}

        />
        <TextField
          id="email"
          label="email"
          variant="standard"
          error = {errors.email ? true : false}
          helperText={errors.email? errors.email.message : null}
          {...register("email", { 
              required: {value : true, message : "please enter email"},
              
          })}

        />
        <TextField
          id="password"
          label="password"
          variant="standard"
          error = {errors.password ? true : false}
          helperText={errors.password? errors.password.message : null}
          {...register("email", { 
              required: {value : true, message : "please enter password"},
              minLength: {value: 8, message : 'password must be 8 character long'}              
          })}

        />
        <Button variant="contained" type = "submit">Sign up</Button>
    </form>
  );
};

export default Signup