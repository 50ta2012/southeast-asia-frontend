import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';

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

      <h2>
        車牌辨識內容...
      </h2>
    </HelmetProvider>
  )
}