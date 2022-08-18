import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Tab3() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/tab3"]}</title>
      </Helmet>
      <h2>
        分頁三內容
      </h2>
    </HelmetProvider>
  )
}