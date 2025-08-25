'use client';

import NextLink, {type LinkProps} from 'next/link';
import {useSearchParams} from 'next/navigation';
import {type ReactNode} from 'react';

type PersistentLinkProps = LinkProps & {
  children: ReactNode;
  // Opcional: uma lista de parâmetros que você NÃO quer manter
  excludeParams?: string[];
};

export function PersistentLink({children, href, excludeParams = [], ...props}: PersistentLinkProps) {
  const searchParams = useSearchParams();
  
  // Cria uma cópia mutável dos parâmetros atuais
  const persistentParams = new URLSearchParams(searchParams.toString());
  
  // Remove os parâmetros que foram explicitamente excluídos
  excludeParams.forEach(param => persistentParams.delete(param));
  
  const queryString = persistentParams.toString();
  
  // Garante que o href seja uma string para facilitar a manipulação
  const hrefAsString = typeof href === 'object' ? href.pathname || '' : href;
  
  // Monta o novo href
  // 1. Pega o caminho base (antes de qualquer '?')
  const [pathname] = hrefAsString.split('?');
  
  // 2. Adiciona os parâmetros persistentes
  const newHref = `${pathname}${queryString ? `?${queryString}` : ''}`;
  
  return (
    <NextLink href={newHref} {...props}>
      {children}
    </NextLink>
  );
}
