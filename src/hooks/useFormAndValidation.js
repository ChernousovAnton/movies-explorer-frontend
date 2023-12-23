
import {useState, useCallback} from 'react';

export default function useFormAndValidation() {
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    if (name === 'name') {
      if (!/^[a-zA-Z а-яА-Я- ]+$/.test(value)) {
        setErrors({...errors, [name]: "поле name содержит только латиницу, кириллицу, пробел или дефис"});
        setIsValid(false);
        return;
      } 
    }
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({...errors, [name]: "поле email не соответствует шаблону электронной почты"});
        setIsValid(false);
        return;
      }
    }
    if (name === "searchText") {
      if (value === '') {
        setErrors({...errors, [name]: "Нужно ввести ключевое слово"});
        setIsValid(false);
        return;
      }
    }
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return {values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors};
}


