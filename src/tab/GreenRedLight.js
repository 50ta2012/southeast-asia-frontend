import { HelmetProvider, Helmet } from "react-helmet-async";
import GreenRedLightDemo from "../greenredlight/GreenRedLightDemo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function ThaiPlate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "green_red_light"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="green_red_light"></FormattedMessage>
      </div>
      <GreenRedLightDemo/>

    </HelmetProvider>
  )
}