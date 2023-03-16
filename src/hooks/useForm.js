import { useState } from 'react';

const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const clearFormData = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return { formData, handleInputChange, handleSubmit, clearFormData };
};

export default useForm;
