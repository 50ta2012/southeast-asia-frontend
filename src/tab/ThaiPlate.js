import { HelmetProvider, Helmet } from "react-helmet-async";
import ThaiPlateDemo from "../thaiPlate/ThaiPlateDemo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function ThaiPlate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "thai_plate"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="thai_plate"></FormattedMessage>
      </div>
      <ThaiPlateDemo/>

    </HelmetProvider>
  )
}