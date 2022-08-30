import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';
import LPR from '../lpr/LPR'

export default function Lpr() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "lpr-title" })}
        </title>
      </Helmet>
      <div className="main-title">
        <FormattedMessage id="lpr-title"></FormattedMessage>
      </div>

     <LPR></LPR>
    </HelmetProvider>
  )
}