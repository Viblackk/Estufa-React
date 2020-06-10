import { useState } from "react";
import axios from "axios"; 

const useForm = (callback) => {
  const [values, setValues] = useState({ });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
    
  };

  const handleSubmit = callback => event => {
    axios
    .post("http://localhost:3001/api/lamps", values)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };
  return [{ values, loading }, handleChange, handleSubmit];
};

export default useForm;