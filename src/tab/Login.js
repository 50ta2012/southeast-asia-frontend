import { HelmetProvider, Helmet } from "react-helmet-async";
import { useIntl } from 'react-intl';
import LoginPage from "../login/LoginPage";

export default function Login(){
  return(
    
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "login-title" })}
        </title>
      </Helmet>

      <LoginPage />
    </HelmetProvider>
  );
}