"use client";

import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react";

export function BreadCrumbs({
  breadCrumbTextFields,
  activePage,
}: {
  breadCrumbTextFields?: Array<{ link: string; label: string }>;
  activePage: string;
}): JSX.Element {
  return (
    <CBreadcrumb className="breadCrumbs">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadCrumbTextFields &&
        breadCrumbTextFields.map((page, index) => (
          <CBreadcrumbItem
            active={page.link === activePage}
            key={index}
            href={`/${page.link}`}
          >
            {page.label}
          </CBreadcrumbItem>
        ))}
    </CBreadcrumb>
  );
}
