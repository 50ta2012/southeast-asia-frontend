import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Tab1() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/"]}</title>
      </Helmet>
      <h2>
        分頁一內容
      </h2>
    </HelmetProvider>
  )
}