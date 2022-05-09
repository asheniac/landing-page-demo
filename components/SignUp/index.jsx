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
  const [formData, setFormData] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  useEffect(() => {
    const countryData = require("../CountryData.json");
    setCountries(countryData);
  }, []);

  const onSubmit = (data) => {
    setFormData(data);
    //console.log("this is form data", formData);
  };
  useEffect(() => {
    //console.log("so ok");
    if (Object.keys(formData).length > 0) {
      //console.log("2nd form data", formData);
      setFormSubmit(true);
      //console.log("this is formsubmit", formSubmit);
    }
  }, [formData, formSubmit]);

  const ShowData = () => {
    return (
      <>
        <div className="text-white">
          <FormH1>Thank you for sign up QUICK BOOK!</FormH1>
          <FormH1>First Name:{formData.firstName}</FormH1>
          <FormH1>Last Name:{formData.lastName}</FormH1>
          <FormH1>Email:{formData.email}</FormH1>
          <FormH1>Phone:{formData.phone}</FormH1>
          <FormH1>Country:{formData.country}</FormH1>
          <Link href="/">
            <FormH1>Back to Home</FormH1>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            {formSubmit ? (
              <ShowData />
            ) : (
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormH1>Sign up for your free trail</FormH1>

                <FormLabel htmlFor="firstname">First Name (Required)</FormLabel>
                <FormInput
                  type="text"
                  {...register("firstName", {
                    required: true,
                    maxLength: 40,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <FormLabel htmlFor="lastname">Last Name (Required)</FormLabel>
                <FormInput
                  type="text"
                  {...register("lastName", {
                    required: true,
                    maxLength: 40,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                <FormLabel htmlFor="email">Email (Required)</FormLabel>
                <FormInput
                  type="email"
                  {...register("email", { required: true, maxLength: 40 })}
                  required
                />
                <FormLabel htmlFor="phone">Phone (Required)</FormLabel>
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
            )}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
