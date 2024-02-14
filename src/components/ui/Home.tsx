"use client";

import { Form, Formik } from "formik";
import React from "react";
import Input from "../commons/Input";
import Button from "../commons/Button";

const Home = () => {
  return (
    <section className="home">
      <h1>
        Generate QR Codes <br /> Instantly
      </h1>
      <div>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ handleChange }) => (
            <Form>
              <Input
                placeholder="Enter text to generate QR code"
                onChange={handleChange}
              />
              <Button>Generate</Button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Home;
