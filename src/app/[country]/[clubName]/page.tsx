import { BreadCrumbs } from "@/components/BreadCrumbs";
import { Carousel } from "@/components/Carousel";
import { ContactUsForm } from "@/components/ContactUsForm";
import { getBreadCrumbTextFields } from "@/utils/breadCrumbUtils";
import { isValidClub } from "@/utils/entryUtils";
import logger from "@/utils/loggerUtils";
import {
  getClubPageTitle,
  getTextFieldsForClubPage,
} from "@/utils/textFieldUtils";
import { CCard, CCardBody, CCol } from "@coreui/react";
import { Metadata } from "next";

type Props = {
  params: { clubName: string; country: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const clubName = params.clubName;

  if (!isValidClub(params.country, clubName)) {
    return {
      title: "Whoops, page not found",
    };
  }

  return {
    title: getClubPageTitle(clubName),
  };
}

export default function Page({
  params,
}: {
  params: { country: string; clubName: string };
}) {
  if (!isValidClub(params.country, params.clubName)) {
    logger.error("Invalid Page - ", {
      country: params.country,
      club: params.clubName,
    });
    return (
      <>
        <h1>Whoops, page not found</h1>
      </>
    );
  }

  const textFields = getTextFieldsForClubPage(params.clubName);
  const breadCrumbTextFields = getBreadCrumbTextFields(params);
  return (
    <div className={params.clubName}>
      <BreadCrumbs
        breadCrumbTextFields={breadCrumbTextFields}
        activePage={params.clubName}
      />
      <center>
        <h1 className="display-1">{textFields.heading}</h1>
      </center>

      <Carousel
        clubName={params.clubName}
        carouselTextProps={textFields.carousel}
      />

      <CCol sm={12} className="marginContainer">
        <CCard className="clubParagraph">
          <CCardBody>{textFields.paragraph}</CCardBody>
          {textFields.additionalInfo && (
            <CCardBody>{textFields.additionalInfo}</CCardBody>
          )}
        </CCard>
      </CCol>

      <ContactUsForm textFields={textFields} />
    </div>
  );
}
