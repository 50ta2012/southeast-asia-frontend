import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";
import LiveVideo from "../live/LiveVideo";

export default function Live() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/live"]}</title>
      </Helmet>
      <h2>
        即時影像內容...
      </h2>
      <LiveVideo></LiveVideo>
    </HelmetProvider>
  )
}