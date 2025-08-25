// app/resources/lang/dictionary.js

// Usamos um objeto para mapear os locais aos seus imports dinâmicos.
// Isso facilita adicionar novos idiomas no futuro.
const dictionaries = {
  '/pt-br': () => import('./pt-br/content.js').then(module => module.content),
  'default': () => import('./pt-br/content.js').then(module => module.content),
};

// Esta é a única função que você precisará usar.
export const getDictionary = async (locale) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    const dictKeyMatch = Object.keys(dictionaries).find(k => locale.startsWith(k));
    if (dictKeyMatch) locale = dictKeyMatch
  }
  
  let existingDictionary = dictionaries[locale];
  
  // Se o locale solicitado não existir no nosso mapa, usamos 'default'.
  const chosenLocale = existingDictionary ? locale : 'default';
  return dictionaries[chosenLocale]();
};
