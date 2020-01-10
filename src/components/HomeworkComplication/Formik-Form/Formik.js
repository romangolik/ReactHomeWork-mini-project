import React from 'react';
import Header from "./componentsOfFormikForm/Header/Header";
import FormikForm from "./componentsOfFormikForm/FormikForm/FormikForm";
import './Formik.scss'

function Formik() {
  return (
    <div className="formik">
        <Header />
        <FormikForm />
    </div>
  );
}

export default Formik;
