export const PHONE_DISPLAY = "054-239-4551";
export const PHONE_TEL = "0542394551";
export const WHATSAPP_URL = "https://wa.me/972542394551";

export const BRAND_HE = "סימון תקשורת";
export const BRAND_EN = "Simon Communication";
export const CTA_LABEL = "לייעוץ והצעת מחיר";

export type ServiceId =
  | "fiber"
  | "data"
  | "cameras"
  | "security"
  | "fire"
  | "smart";

export type ServiceCategory = {
  id: ServiceId;
  label: string;
  options: string[];
};

export const services: ServiceCategory[] = [
  {
    id: "fiber",
    label: "סיבים אופטיים",
    options: [
      "השחלת סיבים",
      "ריתוך סיבים",
      "בדיקות OTDR",
      "תכנון והקמת תוואי",
      "תיקונים ותחזוקה",
    ],
  },
  {
    id: "data",
    label: "תשתיות נתונים",
    options: [
      "כבלי רשת CAT6 / CAT7",
      "ארונות תקשורת",
      "Switches וציוד קצה",
      "ארגון וכבילה מסודרת",
      "בדיקות רשת ואפיון",
    ],
  },
  {
    id: "cameras",
    label: "מצלמות ואינטרקום",
    options: [
      "מצלמות אבטחה IP",
      "מערכות DVR / NVR",
      "אינטרקום וידאו",
      "אינטרקום לדלת / שער",
      "צפייה מרחוק באפליקציה",
    ],
  },
  {
    id: "security",
    label: "מתח נמוך ואבטחה",
    options: [
      "בקרת כניסה",
      "קוראי קרבה / קודן",
      "מערכות אזעקה",
      "חיישנים וגלאי תנועה",
      "אינטגרציה עם אבטחה",
    ],
  },
  {
    id: "fire",
    label: "גילוי וכיבוי אש",
    options: [
      "גלאים וסנסורים",
      "לוחות בקרה",
      "לחצני חירום",
      "מערכות התראה",
      "התקנה לפי תקן",
    ],
  },
  {
    id: "smart",
    label: "בית חכם",
    options: [
      "שליטה בתאורה",
      "מיזוג חכם",
      "וילונות ותריסים",
      "שליטה מרחוק",
      "אינטגרציית מערכות מבנה",
    ],
  },
];
