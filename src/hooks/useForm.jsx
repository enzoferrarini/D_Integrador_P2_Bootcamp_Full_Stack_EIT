import { useState } from "react";

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
      // console.log(values);
    };
  
    const validateForm = (inputProps) => {
      const newErrors = {};
      let isValid = true;
      Object.keys(inputProps).forEach((key) => {
        const value = values[key];
        const validation = inputProps[key].validation;
        if (validation) {
          const result = validation(value);
          if (!result.valid) {           
            newErrors[key] = result.msg;
            isValid = false;
          }
        }
      });
      setErrors(newErrors);
      return isValid;
    };
  
    const resetForm = () => {
      setValues(initialState);
      setErrors({});
    };
  
    return {
      values,
      handleInputChange,
      validateForm,
      resetForm,
      errors,
    };
  };
  
  export default useForm;