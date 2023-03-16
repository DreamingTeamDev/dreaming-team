import { useCallback } from 'react';
import sendEmail from '../services/emailService';

const useEmail = () => {
  const sendEmailCallback = useCallback(async (data) => {
    await sendEmail(data);
  }, []);

  return { sendEmail: sendEmailCallback };
};

export default useEmail;
