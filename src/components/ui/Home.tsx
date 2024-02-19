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
    <section className="home text-center">
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
            <Form className="mt-4 d-flex justify-content-between gap-2 gap-md-4 flex-column flex-md-row">
              <Input
                name="url"
                placeholder="Enter url to generate QR code"
                onChange={handleChange}
                error={errors?.url}
                isTouched={touched?.url}
                className="w-100"
              />

              <Button
                disabled={!isValid}
                className="mt-2 m-md-0 mx-auto px-5 px-md-4"
              >
                Generate
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Home;
