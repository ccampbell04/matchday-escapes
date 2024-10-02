import { CCol, CFormInput, CFormSelect } from "@coreui/react";

interface DynamicNumberInputProps {
  stateComparison: string;
  inputState: string;
  md: number;
  name: string;
  id: string;
  selectOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  sevenPlusText: string;
}

export function DynamicNumberInput({
  stateComparison,
  inputState,
  md,
  name,
  id,
  selectOnChange,
  inputOnChange,
  labelText,
  sevenPlusText,
}: DynamicNumberInputProps) {
  return (
    <>
      {stateComparison !== "7+" ? (
        <CCol md={md}>
          <CFormSelect
            name={name}
            id={id}
            label={labelText}
            onChange={selectOnChange}
          >
            {Array.from({ length: 6 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
            <option>{sevenPlusText}</option>
          </CFormSelect>
        </CCol>
      ) : (
        <CCol md={md}>
          <CFormInput
            name={name}
            type="number"
            id={id}
            label={labelText}
            value={inputState}
            min={0}
            onChange={inputOnChange}
          />
        </CCol>
      )}
    </>
  );
}
