export function formatPrice(valueInCents: number) {
  const valueinReais = valueInCents / 100;
  return valueinReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}