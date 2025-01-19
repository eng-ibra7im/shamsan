import i18n from "../i18n";

// Function To Set Title of Page
export default function PageTitle(titleAr, titleEn) {
  return (document.title =
    i18n.locale == "ar"
      ? "مؤسسة   شمسان | " + titleAr
      : "Shamsan | " + titleEn);
}
