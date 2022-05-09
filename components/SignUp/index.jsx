import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
  };
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      setFormSubmit(true);
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
                <ErrorMessage
                  errors={errors}
                  name="firstName"
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
                <FormInput
                  type="text"
                  {...register("firstName", {
                    required: "Frist Name is required",
                    maxLength: 40,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />

                <FormLabel htmlFor="lastname">Last Name (Required)</FormLabel>
                <ErrorMessage
                  errors={errors}
                  name="lastName"
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
                <FormInput
                  type="text"
                  {...register("lastName", {
                    required: "Last Name is required",
                    maxLength: 40,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />

                <FormLabel htmlFor="email">Email (Required)</FormLabel>
                <FormInput
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    maxLength: { value: 40, message: "Max Length is 40 char" },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email is invalid",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
                <FormLabel htmlFor="phone">Phone (Required)</FormLabel>
                <ErrorMessage
                  errors={errors}
                  name="phone"
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
                <FormInput
                  type="text"
                  {...register("phone", {
                    required: "Phone Number is required",
                    maxLength: {
                      value: 10,
                      message: "Max number is 10 digital char",
                    },
                  })}
                />

                <FormLabel htmlFor="for">Country (Required)</FormLabel>
                <ErrorMessage
                  errors={errors}
                  name="country"
                  render={({ message }) => (
                    <p className="text-red-600">{message}</p>
                  )}
                />
                <FormSelect
                  {...register("country", {
                    required: "You must select country",
                  })}
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
