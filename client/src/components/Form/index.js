// import { useState } from 'react'
import { Loader } from "components";

import { Field } from "./Field";
import { Button } from "./Button";
import { Result } from "./Result";
import { Error } from "./Error";

import { defaultValidators, errorMessagesClient } from "./validators";

import useSimpleForm, { simpleFetch } from "simple-form-react";
simpleFetch.baseUrl = "http://localhost:5000/api/auth";

export const Form = (props) => {
  // const [data, setData] = useState(null)

  const {
    children,
    inputs,
    validators,
    messages,
    submitLabel,
    ...rest
  } = props;

  const hookProps = {
    ...rest,
    validators: { ...defaultValidators, ...validators },
    messages: { ...errorMessagesClient, ...messages }
  };

  /*
  hookProps.fetchOptions = {
      handlers: {
        onSuccess: (response) => {
          setData(response.data)
        }
      }
    }
  */

  /*
  hookProps.onSubmit = async (fields) => {
    const response = await simpleFetch.post(rest.url, fields)
    setData(response.data)
  }
  */

  const {
    fields,
    change,
    submit,
    reset,
    disabled,
    loading,
    response,
    errors
  } = useSimpleForm(hookProps);

  if (loading) return <Loader />;
  if (response?.data) return <Result result={response.data} />;
  // if (data) return <Result result={data} />

  return (
    <form onSubmit={submit} onReset={reset}>
      {inputs.map((input, index) => (
        <Field
          key={index}
          value={fields[input.name]}
          onChange={change}
          error={errors[input.name]}
          {...input}
        />
      ))}
      {children}
      {response?.error && <Error status={response.info.status} />}
      <div>
        <Button label={submitLabel} variant="success" disabled={disabled} />
        <Button label="Reset" type="reset" variant="warning" />
      </div>
    </form>
  );
};
