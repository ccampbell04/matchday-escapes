import logger from "./loggerUtils";

export function getBreadCrumbTextFields(
  params: Record<string, any> = {}
): Array<{ link: string; label: string }> {
  let previousLink = "";

  const breadCrumbTextFieldsArray = Object.values(params).map((param) => {
    const link = previousLink ? `${previousLink}/${param}` : param;
    previousLink = link;

    const label = param
      .split("-")
      .map((word: string) => {
        return word.length <= 3
          ? word.toUpperCase()
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return {
      link: link,
      label: label,
    };
  });

  logger.silly("BreadCrumbTextFields - ", {
    textFields: breadCrumbTextFieldsArray,
  });
  return breadCrumbTextFieldsArray;
}
