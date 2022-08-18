import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Lpr() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/lpr"]}</title>
      </Helmet>
      <h2>
        車牌辨識內容...
      </h2>
    </HelmetProvider>
  )
}