import { BreadCrumbs } from "@/components/BreadCrumbs";
import { CountryClubCard } from "@/components/CountryClubCard";
import { getBreadCrumbTextFields } from "@/utils/breadCrumbUtils";
import { isValidCountry } from "@/utils/entryUtils";
import logger from "@/utils/loggerUtils";
import {
  getCountryPageTitle,
  getTextFieldsForCountryPage,
} from "@/utils/textFieldUtils";
import { CCol, CRow } from "@coreui/react";

interface Card {
  title: string;
  description: string;
}

export async function generateMetadata({
  params,
}: {
  params: { country: string };
}) {
  if (!isValidCountry(params.country)) {
    logger.error("Invalid Page - ", { country: params.country });
    return {
      title: "Whoops, page not found",
    };
  }
  return {
    title: getCountryPageTitle(params.country),
  };
}

export default function Page({ params }: { params: { country: string } }) {
  if (!isValidCountry(params.country)) {
    return <h1>Whoops, page not found</h1>;
  }

  const textFields = getTextFieldsForCountryPage(params.country);
  const breadCrumbTextFields = getBreadCrumbTextFields(params);
  return (
    <div className={params.country}>
      <BreadCrumbs
        breadCrumbTextFields={breadCrumbTextFields}
        activePage={params.country}
      />
      <center>
        <h1 className="display-1">{textFields.heading}</h1>
      </center>

      <CRow className={"countryCardContainer"}>
        {textFields.cards.map((card: Card, index: number) => {
          const isLastOdd =
            index === textFields.cards.length - 1 &&
            textFields.cards.length % 2 !== 0;

          return isLastOdd ? (
            <CCol
              key={index}
              md={{ span: 6, offset: 3 }}
              className="countryCardPadding"
            >
              <CountryClubCard
                cardTextFields={card}
                labelTextFields={textFields.labels}
                currentPage={params.country}
              />
            </CCol>
          ) : (
            <CCol key={index} md={6} className="countryCardPadding">
              <CountryClubCard
                cardTextFields={card}
                labelTextFields={textFields.labels}
                currentPage={params.country}
              />
            </CCol>
          );
        })}
      </CRow>
    </div>
  );
}
