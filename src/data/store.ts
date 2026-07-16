const WHATSAPP_NUMBER = '5527999287923';

/** Dados de contato e localização da loja — fonte única para Footer, VisitCta e páginas de produto. */
export const store = {
  name: 'Landa',
  instagramHandle: '@_landaloja',
  instagramUrl: 'https://instagram.com/_landaloja',
  whatsappDisplay: `(${WHATSAPP_NUMBER.slice(2, 4)}) ${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`,
  addressStreet: 'Av. Rui Barbosa, 594',
  addressDistrict: 'Centro, Linhares — ES',
  hours: [
    { days: 'Segunda a sexta', time: '8h30 às 18h30' },
    { days: 'Sábado', time: '8h30 às 13h' },
  ],
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Av.+Rui+Barbosa,+594+-+Centro,+Linhares+-+ES',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Av.+Rui+Barbosa,+594,+Centro,+Linhares+-+ES&output=embed',
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
