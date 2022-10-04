import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FormattedMessage, useIntl } from 'react-intl';

export default function UserProfile() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      // const serverUrl = "https://twowayiot.com";
      const serverUrl = window.location.origin;
      try {
        const res = await fetch(`${serverUrl}/account/name`);

        if (res.status === 200) {
          setName(await res.text());
        }
      }catch(err){
        console.log(err)
      }
    })();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({ id: "profile-title" })}
        </title>
      </Helmet>
      <div className="main-title">
        <FormattedMessage id="profile-title"></FormattedMessage>
      </div>

      <h2>
        名稱：{name}
      </h2>
    </HelmetProvider>
  )
}