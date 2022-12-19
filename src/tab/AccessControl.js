import { HelmetProvider, Helmet } from "react-helmet-async";
import AccessControlDemo from "../accesscontrol/AccessControlDemo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function ThaiPlate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "access_control"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="access_control"></FormattedMessage>
      </div>
      <AccessControlDemo/>

    </HelmetProvider>
  )
}