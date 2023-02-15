import { Button, Paper, Grid, TextField, Box, Typography } from "@mui/material";
import { Form, useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "./Schema";
import {add, edit} from '../../Redux/Actions/index'
import { useSelector,useDispatch } from 'react-redux'

type FormType = {
  editing : boolean,
  add : boolean,
  index : any,
  name: string,
  email : string,
  book : string,
  price : number
}


function FormValidation(props :FormType ) {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state : any) => state.reducerFunction );

  const Formik = useFormik({

    initialValues: {

      name: props.name,
      email: props.email,
      book: props.book,
      price: props.price,
    },
    validationSchema: userSchema,

    onSubmit: (values,actions) => {

      if(props.editing === true){
        const obj = {
          values,
          index : props.index
        }
        dispatch(edit({obj}));
      }
      if(props.add === true){
        dispatch(add(values))

      }
      
      navigate('/')
      actions.resetForm({
        values:{
          name: "",
          email:"",
          book : "",
          price:0
        }

      })
    },
  });


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
                  label="Email"
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
                  label="Price"
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