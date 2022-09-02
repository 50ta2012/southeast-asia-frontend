import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';

export default function UserProfile() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "profile-title"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="profile-title"></FormattedMessage>
      </div>

      <h2>
        個人資料內容...
      </h2>
    </HelmetProvider>
  )
}