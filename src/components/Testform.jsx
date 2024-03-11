import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";

const Testform = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [error, setError] = useState("");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json(addUser);

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);

      setError("");
      setName("");
      setEmail("");
      setAge(0);
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <div>{error && <div class="alert alert-danger">{error}</div>}</div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              sx={{ gridColumn: "span 2" }}
              required
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{ gridColumn: "span 2" }}
              required
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              sx={{ gridColumn: "span 4" }}
              required
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create New Employee
            </Button>
          </Box>
        </form>
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  age: yup
    .number()
    .lessThan(100, "invalid age")
    .moreThan(16, "invalid age")
    .required("required"),
});
const initialValues = {
  name: "",
  email: "",
  age: null,
};

export default Testform;
