import { Montserrat, Lusitana } from 'next/font/google';
 
export const montserrat = Montserrat({ 
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'], // Pesos que necesitas
    style: ['normal', 'italic'], // Estilos necesarios
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
  
