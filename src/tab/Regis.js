import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';
import RegisPage from "../regis/RegisPage.js";

export default function Regis(){
  return(
    
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "regis-title" })}
        </title>
      </Helmet>

      <RegisPage />
    </HelmetProvider>
  );
}