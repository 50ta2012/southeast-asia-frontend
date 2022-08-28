import { HelmetProvider, Helmet } from "react-helmet-async";
import LiveVideo from "../live/LiveVideo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function Live() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "live-title" })}
        </title>
      </Helmet>
      <div className="main-title">
        <FormattedMessage id="live-title"></FormattedMessage>
      </div>

      <LiveVideo></LiveVideo>
    </HelmetProvider>
  )
}