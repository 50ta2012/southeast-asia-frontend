import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Tab2() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/tab2"]}</title>
      </Helmet>
      <h2>
        分頁二內容
      </h2>
    </HelmetProvider>
  )
}