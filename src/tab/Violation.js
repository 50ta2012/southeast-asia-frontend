import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";
import ViolationDemo from "../violation/ViolationDemo";

export default function Violation() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/"]}</title>
      </Helmet>
      <ViolationDemo/>

    </HelmetProvider>
  )
}