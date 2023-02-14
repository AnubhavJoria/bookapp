import { Button, Paper, Grid, TextField, Box, Typography } from "@mui/material";
import { Form, useFormik } from "formik";
import React from "react";
import { userSchema } from "./Schema";

const initialValues = {
  name: "",
  email: "",
  book: "",
  price: "",
};

function FormValidation() {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: (values,actions) => {
      alert("Form submitted successfully");
      actions.resetForm({
        values:{
          name: "",
          email:"",
          book : "",
          price:""
        }

      });
    },
  });
  console.log(Formik.handleBlur);

  return (
    <>
      <Box
        // container={true}
        sx={{ boxShadow: 3, width: "40%", mx: "auto" }}
        // spacing={3}
        paddingX={5}
        paddingY={8}
        marginY={2}
      >
        <Typography variant="h5" marginBottom={4}>
          Enter details
        </Typography>

        <form onSubmit={Formik.handleSubmit} >
          
          <Grid container spacing={2}>
          {/* Name */}
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  name="name"
                  value={Formik.values.name}
                  label="Name"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid>
                {Formik.errors.name && Formik.touched.name ? (
                  <Typography sx={{ color: "red" }} >
                    {Formik.errors.name}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

                  {/* Email */}
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Age"
                  value={Formik.values.email}
                  name="email"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.email && Formik.touched.email ? (
                  <Typography sx={{ color: "red" }} >
                    {Formik.errors.email}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

            {/* Book */}
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Book"
                  value={Formik.values.book}
                  name="book"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.book && Formik.touched.book ? (
                  <Typography sx={{ color: "red" }} >
                    {" "}
                    {Formik.errors.book}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Company"
                  value={Formik.values.price}
                  name="price"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.price && Formik.touched.price ? (
                  <Typography sx={{ color: "red" }} >
                    {" "}
                    {Formik.errors.price}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

            
           


          </Grid>
          <Grid marginY={3}>
            <Button type="submit" variant="contained" >
              Confirm
            </Button>
          </Grid>
        </form>
        <Grid container></Grid>
      </Box>
    </>
  );
}

export default FormValidation;