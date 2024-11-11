import { Montserrat, Permanent_Marker, Pacifico } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: ['400'],
});

export const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });
