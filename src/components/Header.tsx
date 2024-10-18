"use client";

import {
  CContainer,
  CDropdown,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink
} from "@coreui/react";
import { DropDownContent } from "./DropDownContent";

export function Header({
  textFields,
}: {
  textFields: Record<string, any>;
}): JSX.Element {
  return (
    <>
      <CHeader>
        <CContainer fluid>
          <CHeaderBrand href={textFields.heading.link}>
            {textFields.heading.label}
          </CHeaderBrand>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href={textFields.home.link} active>
                {textFields.home.label}
              </CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">
                {textFields.viewTrips}
              </CDropdownToggle>
              <CDropdownMenu>
                <DropDownContent
                  dropDownTextFields={textFields.dropDown}
                  requestATeam={textFields.request}
                />
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
        </CContainer>
      </CHeader>
    </>
  );
}
