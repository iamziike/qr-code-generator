"use client";

import * as yup from "yup";
import React from "react";
import Input from "../commons/Input";
import Button from "../commons/Button";
import validationSchema from "@/constants/yupValidation";
import { Form, Formik } from "formik";

const initialValues = {
  url: "",
};

const Home = () => {
  const handleSubmit = ({ url }: typeof initialValues) => {
    location.assign(`/url?id=${url}`);
  };

  return (
    <section className="home">
      <h1>
        Generate QR Codes <br /> Instantly
      </h1>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={yup.object({ url: validationSchema.url })}
        >
          {({ handleChange, touched, errors, isValid }) => (
            <Form className="mt-4">
              <Input
                name="url"
                placeholder="Enter url to generate QR code"
                onChange={handleChange}
                error={errors?.url}
                isTouched={touched?.url}
              />

              <Button disabled={!isValid}>Generate</Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Home;
