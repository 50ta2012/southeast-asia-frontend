import { HelmetProvider, Helmet } from "react-helmet-async";
import ParkingRecordDemo from "../parkingRecord/ParkingRecordDemo";
import { FormattedMessage, useIntl } from 'react-intl';

export default function ThaiPlate() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {useIntl().formatMessage({id: "parking_record"})}
        </title>
      </Helmet>
      <div className="main-title">
       <FormattedMessage id="parking_record"></FormattedMessage>
      </div>
      <ParkingRecordDemo/>

    </HelmetProvider>
  )
}