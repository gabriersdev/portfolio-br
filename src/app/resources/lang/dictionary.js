// app/resources/lang/dictionary.js

// Usamos um objeto para mapear os locais aos seus imports dinâmicos.
// Isso facilita adicionar novos idiomas no futuro.
const dictionaries = {
  '/pt-br': () => import('./pt-br/content.js').then(module => module.content),
  'default': () => import('./default/content.js').then(module => module.content),
};

// Esta é a única função que você precisará usar.
export const getDictionary = async (locale) => {
  console.log("locale", locale);
  
  // Se o locale solicitado não existir no nosso mapa, usamos 'default'.
  const chosenLocale = dictionaries[locale] ? locale : 'default';
  return dictionaries[chosenLocale]();
};