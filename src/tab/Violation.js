import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Violation() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/"]}</title>
      </Helmet>
      <h2>
        違規記錄內容...
      </h2>
    </HelmetProvider>
  )
}