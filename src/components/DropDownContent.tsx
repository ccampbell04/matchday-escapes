import {
  CDropdownDivider,
  CDropdownItem
} from "@coreui/react";
import React from "react";


export function DropDownContent({
  dropDownTextFields,
  requestATeam,
}: {
  dropDownTextFields: Record<string, any>;
  requestATeam: Record<string, any>;
}): JSX.Element {
  return (
    <ul>
      {Object.keys(dropDownTextFields).map((country) => (
        <React.Fragment key={country}>
          <CDropdownItem href={dropDownTextFields[country].link}>
            {country}
          </CDropdownItem>
          <CDropdownDivider />
          {dropDownTextFields[country].content.map(
            (team: { label: string; link: string }) => (
              <CDropdownItem key={team.link} href={team.link}>
                {team.label}
              </CDropdownItem>
            )
          )}
          <CDropdownDivider />
        </React.Fragment>
      ))}
      <CDropdownItem href={requestATeam.link}>
        {requestATeam.label}
      </CDropdownItem>
    </ul>
  );
}
