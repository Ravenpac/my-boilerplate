import { parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const unMask = (value: string) => {
  return value?.replace(/\D/g, '');
};

export const maskCNPJ = (value: string) => {
  return value
    ?.replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

export const maskCEP = (cep: string) => {
  cep = cep.replace(/\D/g, '');
  const match = cep.match(/^(\d{1,5})(\d{0,3})$/);
  if (match) {
    cep = `${match[1]}${match[2] ? '-' : ''}${match[2]}`;
    return cep;
  }
  return cep;
};

export const maskPhone = (value: string) => {
  if (value.length > 10) {
    return value
      ?.replace(/[^0-9]/g, '')
      .replace(/^(\d{2})(\d{5})(\d{4})$.*/, '($1) $2-$3');
  }

  return value
    ?.replace(/[^0-9]/g, '')
    .replace(/^(\d{2})(\d{4})(\d{4})$.*/, '($1) $2-$3');
};

export const maskCPF = (value: string) => {
  return value
    ?.replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3}).(\d{3})(\d)/, '$1.$2.$3')
    .replace(/.(\d{3})(\d)/, '.$1-$2');
};

export const currencyMask = (value: number) => {
  const masked = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
  return masked;
};

export const cardDateMask = (value: string) => {
  return value?.replace(/^(\d{2})(\d)/, '$1/$2');
};

export const cardNumberMask = (value: string) => {
  return value
    ?.replace(/^(\d{4})(\d)/, '$1 $2')
    .replace(/^(\d{4})\s(\d{4})(\d)/, '$1 $2 $3')
    .replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/, '$1 $2 $3 $4');
};

export const timeZone = (date: string) => {
  const timezoned = utcToZonedTime(date, 'America/Sao_Paulo');
  return timezoned;
};

export const forceTimeZone = (date: string) => {
  const timezoned = date.split('Z')[0];
  const parsedISO = parseISO(timezoned);
  return parsedISO;
};

export const CPForCNPJMask = (value: string) => {
  const unmasked = unMask(value);

  if (unmasked.length === 11) {
    return value
      ?.replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3}).(\d{3})(\d)/, '$1.$2.$3')
      .replace(/.(\d{3})(\d)/, '.$1-$2');
  }
  if (unmasked.length === 14) {
    return value
      ?.replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }

  return unmasked;
};
