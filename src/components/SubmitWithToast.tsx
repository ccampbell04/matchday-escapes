import { cilPaperPlane } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CToast,
  CToastBody,
  CToaster,
  CToastHeader,
} from "@coreui/react";
import { ReactElement, useRef, useState } from "react";

export function SubmitWithToast({
  textFields,
}: {
  textFields: Record<string, any>;
}) {
  const [toast, addToast] = useState(0);
  const toaster = useRef();

  const exampleToast = (
    <CToast color="info">
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill="#007aff"></rect>
        </svg>
        <div className="fw-bold me-auto">{textFields.toast.heading}</div>
        <small>{textFields.toast.time}</small>
      </CToastHeader>
      <CToastBody>{textFields.toast.message}</CToastBody>
    </CToast>
  );
  return (
    <>
      <CButton
        color="info"
        type="submit"
        onClick={() => addToast(exampleToast as unknown as number)}
      >
        {textFields.submit} <CIcon icon={cilPaperPlane}/>
      </CButton>
      <CToaster
        className="p-3"
        placement="top-end"
        push={toast as unknown as ReactElement}
        ref={toaster as unknown as React.RefObject<HTMLDivElement>}
      />
    </>
  );
}
