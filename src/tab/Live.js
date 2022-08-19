import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";
import LiveVideo from "../live/LiveVideo";

export default function Live() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/live"]}</title>
      </Helmet>
      <LiveVideo></LiveVideo>
    </HelmetProvider>
  )
}