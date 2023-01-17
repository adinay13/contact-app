import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Box, Button } from "@mui/material";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../../redux/actions";

const BoxElem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 27,
  label: {
    fontFamily: "Ubuntu",
    fontSize: 16,
    fontWeight: 400,
    color: "rgba(33, 33, 33, 0.75)",
  },
}));
const BoxError = styled(Box)(() => ({
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontSize: "12px",
  color: "red",
}));

const Input = styled.input(() => ({
  padding: "10px 0 10px 8px",
  width: 289,
  background: "#FFFFFF",
  border: "1px solid rgba(33, 33, 33, 0.35)",
  borderRadius: "2px",
  fontFamily: "Ubuntu",
  fontSize: 16,
  fontWeight: 400,
  "::placeholder": {},
}));

const StyledButton = styled(Button)(() => ({
  background: "#212121",
  color: "#fff",
  "&:hover": {
    background: "#414042",
  },
}));

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Должна быть строка")
    .required("Это поле обязательно к заполнению"),
  lastName: Yup.string()
    .typeError("Должна быть строка")
    .required("Это поле обязательно к заполнению"),
  city: Yup.string()
    .typeError("Должна быть строка")
    .required("Это поле обязательно к заполнению"),
  country: Yup.string()
    .typeError("Должна быть строка")
    .required("Это поле обязательно к заполнению"),
  phoneNumber: Yup.string()
    .required("Это поле обязательно к заполнению")
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      "Пожалуйста, введите правильный номер телефона"
    ),
  email: Yup.string()
    .email("Неверный адрес электронной почты")
    .required("Это поле обязательно к заполнению"),
  website: Yup.string()
    .required("Это поле обязательно к заполнению")
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Пожалуйста, введите правильный URL"
    ),
});

const ContactForm = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const submit = async (values) => {
    await dispatch(updateContact(values));
    navigate("/");
  };

  return state.data
    .filter((contact) => contact.id === +id.slice(1))
    .map((contact) => (
      <Formik
        key={contact.id}
        initialValues={{
          id: contact.id,
          firstName: contact.firstName,
          lastName: contact.lastName,
          city: contact.city,
          country: contact.country,
          phoneNumber: contact.phoneNumber,
          email: contact.email,
          website: contact.website,
          image: contact.image,
        }}
        validateOnBlur
        onSubmit={submit}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className="form">
            <Box sx={{ width: 621 }}>
              <BoxElem>
                <p>
                  <label htmlFor="firstName">First name:</label>
                  <br />
                  <Input
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName ? (
                    <BoxError>{errors.firstName}</BoxError>
                  ) : null}
                </p>
                <p>
                  <label htmlFor="lastName">Last name:</label>
                  <br />
                  <Input
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName ? (
                    <BoxError>{errors.lastName}</BoxError>
                  ) : null}
                </p>
              </BoxElem>
              <BoxElem>
                <p>
                  <label htmlFor="city">City:</label>
                  <br />
                  <Input
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city ? (
                    <BoxError>{errors.city}</BoxError>
                  ) : null}
                </p>
                <p>
                  <label htmlFor="country">Country:</label>
                  <br />
                  <Input
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.country && errors.country ? (
                    <BoxError>{errors.country}</BoxError>
                  ) : null}
                </p>
              </BoxElem>
              <BoxElem>
                <p>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <br />
                  <Input
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <BoxError>{errors.phoneNumber}</BoxError>
                  ) : null}
                </p>
                <p>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <Input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <BoxError>{errors.email}</BoxError>
                  ) : null}
                </p>
              </BoxElem>
              <BoxElem>
                <p>
                  <label htmlFor="website">Website:</label>
                  <br />
                  <Input
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.website && errors.website ? (
                    <BoxError>{errors.website}</BoxError>
                  ) : null}
                </p>
                <Box>
                  <Button
                    sx={{
                      background: "#212121",
                      color: "#fff",
                      width: "289px",
                      padding: "7px 0 6px 8px",
                      fontSize: 16,
                      fontWeight: 400,
                      marginTop: "19px",
                      "&:hover": {
                        background: "#414042",
                      },
                    }}
                    onClick={() => handleSubmit()}
                    type="submit"
                  >
                    Save Contact
                  </Button>
                </Box>
              </BoxElem>
            </Box>
          </Form>
        )}
      </Formik>
    ));
};

export default ContactForm;
