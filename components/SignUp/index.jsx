import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormSelect,
  FormButton,
  Text,
} from "./Singup-styled-component";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const countryData = require("../CountryData.json");
    //console.log(countryData);
    setCountries(countryData);
  }, []);

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormH1>Sign up for your free trail</FormH1>
              <FormLabel htmlFor="for">Name (Required)</FormLabel>
              <FormInput
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 40,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              <FormLabel htmlFor="for">Email (Required)</FormLabel>
              <FormInput
                type="email"
                {...register("email", { required: true, maxLength: 40 })}
                required
              />
              <FormLabel htmlFor="for">Phone (Required)</FormLabel>
              <FormInput
                type="text"
                {...register("phone", { required: true, maxLength: 10 })}
              />
              <FormLabel htmlFor="for">Country (Required)</FormLabel>
              <FormSelect
                {...register("country", { required: "Country is required" })}
              >
                <option value="">--Select Country--</option>
                {countries.map((item) => {
                  return <option key={item.country}>{item.country}</option>;
                })}
              </FormSelect>
              <FormButton type="submit">Sign Up</FormButton>
              <Text>
                <Link href="/">
                  <a>Back to Home</a>
                </Link>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
