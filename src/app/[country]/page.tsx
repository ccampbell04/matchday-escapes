import { isValidCountry } from "@/utils/entryUtils";

export default function Page({ params }: { params: { country: string } }) {
  if (!isValidCountry(params.country)) {
    return <h1>Whoops, page not found</h1>;
  }
  return <h1>{params.country}</h1>;
}
