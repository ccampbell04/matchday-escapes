"use client";

import { cibFacebook, cibInstagram, cibTiktok } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CFooter, CLink, CRow } from "@coreui/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Footer(footerTextFields: Record<string, any>) {
  return (
    <div className="anchorFooter">
      <CFooter>
        <CRow xs={{ cols: "auto" }}>
          <CLink href="https://coreui.io">
            <CIcon icon={cibFacebook} size="xl" />
          </CLink>
          <CLink href="https://coreui.io">
            <CIcon icon={cibInstagram} size="xl" />
          </CLink>
          <CLink href="https://coreui.io">
            <CIcon icon={cibTiktok} size="xl" />
          </CLink>
        </CRow>
        <CRow xs={{ cols: "auto" }}>
          <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2024 creativeLabs.</span>
          </div>
        </CRow>

        <CRow xs={{ cols: "auto" }}>
          <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2024 creativeLabs.</span>
          </div>
        </CRow>
      </CFooter>
    </div>
  );
}
