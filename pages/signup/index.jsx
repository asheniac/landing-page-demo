import React from "react";
import Head from "next/head";
import SignUp from "../../components/SignUp";
const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up Quickbook</title>
        <meta
          name="description"
          content="Quick Book is a professional accounting software which will reduce your time on accounting matter,and let you focus on running your business.This is sign up page for quick book"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
};

export default SignUpPage;
