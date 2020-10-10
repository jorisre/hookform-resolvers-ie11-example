import React from "react";
import { useForm } from "react-hook-form/dist/index.ie11";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/dist/ie11/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().min(3).max(30).required(),
  email: yup.string().email(),
  password: yup.string().matches(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: yup.ref("password"),
});

const App = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))}>
      <label htmlFor='username'>Username :</label>
      <input name='username' ref={register} id='username' placeholder='John' />
      <ErrorMessage
        errors={errors}
        name='username'
        render={({ message }) => <p>{message}</p>}
      />

      <label htmlFor='email'>Email address :</label>
      <input
        name='email'
        ref={register}
        id='email'
        placeholder='johndoe@mail.com'
      />
      <ErrorMessage
        errors={errors}
        name='email'
        render={({ message }) => <p>{message}</p>}
      />

      <label htmlFor='password'>Password :</label>
      <input name='password' ref={register} id='password' type='password' />
      <ErrorMessage
        errors={errors}
        name='password'
        render={({ message }) => <p>{message}</p>}
      />

      <label htmlFor='confirmPassword'>Confirm password :</label>
      <input
        name='confirmPassword'
        ref={register}
        id='confirmPassword'
        type='password'
      />
      <ErrorMessage
        errors={errors}
        name='confirmPassword'
        render={({ message }) => <p>{message}</p>}
      />
      <input type='submit' />
    </form>
  );
};

export default App;
