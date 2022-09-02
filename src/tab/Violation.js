import { HelmetProvider, Helmet } from "react-helmet-async";
import ViolationDemo from "../violation/ViolationDemo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function Violation() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "violation-title"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="violation-title"></FormattedMessage>
      </div>
      <ViolationDemo/>

    </HelmetProvider>
  )
}