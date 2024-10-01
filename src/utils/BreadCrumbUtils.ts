export function getBreadCrumbTextFields(
  params: Record<string, any> = {}
): Array<{ link: string; label: string }> {
  let previousLink = ""; // Variable to store the previous link value

  const breadCrumbTextFieldsArray = Object.values(params).map((param) => {
    // Update the link by concatenating previousLink with the current param
    const link = previousLink ? `${previousLink}/${param}` : param;

    // Update previousLink for the next iteration
    previousLink = link;

    return {
      link: link,
      label: param.charAt(0).toUpperCase() + param.slice(1),
    };
  });

  return breadCrumbTextFieldsArray;
}
