import { useParams } from "../../../router";

export default function Biz() {
  const params = useParams("/biz/:subdomain");
  return <h1>Biz: {params.subdomain}</h1>;
}
