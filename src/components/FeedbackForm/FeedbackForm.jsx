// import InputMask from "react-input-mask";
import useForm from "../../hooks/useForm";
import useEmail from "../../hooks/useEmail";
import logo from "../../images/logo.png";
import {
  Container,
  Input,
  Textarea,
  Subtitle,
  Form,
  Button,
  Wrap,
  Wrapper,
  StyledInputMask,
  Img,
} from "./FeedbackForm.styled";
import toast from "react-hot-toast";
import ToastContainer from "../../utilities/Toast";
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const FeedbackForm = () => {
  const { formData, handleInputChange, clearFormData } = useForm();
  const { sendEmail } = useEmail();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendEmail(formData);
      toast.success("Letter sent successfully!");
      clearFormData();
    } catch (error) {
      console.error(error);
      toast.error("Error when sending the letter");
    }
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <section className="section_form">
          <Wrap>
            <Wrapper>
              <Img src={logo} width="70px" height="70px" alt="logo" />
              <Subtitle>
                Dreaming
                <br />
                team
              </Subtitle>
            </Wrapper>
            <Form onSubmit={handleFormSubmit}>
              <label></label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Name"
                type="text"
                maxlength="30"
                title="Name up to 30 characters"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label></label>
              <Input
                id="email"
                name="email"
                required
                placeholder="E-mail"
                type="email"
                title="Your e-mail"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label></label>
              <StyledInputMask
                mask="+380 (99) 999-99-99"
                id="phone"
                name="phone"
                required
                placeholder="Number phone"
                type="tel"
                title="Your telephone number"
                // pattern="\+380 \([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {/* </InputMask> */}
              <label></label>
              <Textarea
                id="message"
                name="message"
                rows="10"
                cols="60"
                placeholder="Message"
                title="Email us"
                minlength="10"
                maxlength="500"
                required
                value={formData.message}
                onChange={handleInputChange}
              ></Textarea>
              <Button type="submit" title="Press">SEND</Button>
            </Form>
          </Wrap>
        </section>
      </Container>
    </>
  );
};

export default FeedbackForm;
