import React from 'react';
import HeaderComponent from "./componentsOfForm/Header/HeaderComponent";
import FormComponent from "./componentsOfForm/Form/FormComponent";
import './Form.scss'

function Form() {
    return (
        <div className='Form'>
            <HeaderComponent />
            <FormComponent/>
        </div>
    );
}

export default Form;