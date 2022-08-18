import titleMap from "../web/title.json"
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function UserProfile() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{titleMap["/profile"]}</title>
      </Helmet>
      <h2>
        個人資料內容
      </h2>
    </HelmetProvider>
  )
}