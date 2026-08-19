type BaseProfile = {
  id: number;
  username: string;
};

type ContactInfo = {
  email: string;
  phone?: string;
  telegram?: string;
};

type Theme = "light" | "dark";
type Language = "ru" | "en";

type Preferences = {
  readonly theme: Theme;
  readonly language: Language;
};

type FullProfile = BaseProfile & ContactInfo & Preferences;

function getContactLine(profile: FullProfile): string {
  if (profile.phone !== undefined) {
    return `Телефон: ${profile.phone}`;
  }
  if (profile.telegram !== undefined) {
    return `Telegram: ${profile.telegram}`;
  }
  return `Email: ${profile.email}`;
}

function formatProfile(profile: FullProfile): string {
  return `${profile.username} [${profile.theme}/${profile.language}] - ${getContactLine(profile)}`;
}

const profileAll: FullProfile = {
  id: 12,
  username: "Nik",
  email: "nikemail@gmail.com",
  phone: "+493331234567",
  telegram: "@nik",
  theme: "light",
  language: "en",
};

const profileEmail: FullProfile = {
  id: 12,
  username: "Nik",
  email: "nikemail@gmail.com",
  theme: "light",
  language: "en",
};

const contactLineAll = getContactLine(profileAll);
const formatProfileAll = formatProfile(profileAll);

const contactLineEmail = getContactLine(profileEmail);
const formatProfileEmail = formatProfile(profileEmail);

console.log(contactLineAll);
console.log(formatProfileAll);
console.log(contactLineEmail);
console.log(formatProfileEmail);

// В данном случае TS выдаст ошибку 2540, потому что theme - readonly. readonly не является runtime защитой, а действует только на этапе компиляции. Также readonly не участвует в проверке совместимости типов. Тип с ним свободно присваивается типу без него
// profileAll.theme = "light";
//TS2540: Cannot assign to 'theme' because it is a read-only property.

export {};
