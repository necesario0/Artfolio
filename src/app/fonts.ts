import localFont from 'next/font/local';

export const adleryPro = localFont({
  src: '../../public/Adlery-Pro-trial.ttf',
  variable: '--font-adlery-pro',
});

export const adlerySwash = localFont({
  src: '../../public/Adlery-Swash-trial.ttf',
  variable: '--font-adlery-swash',
});

export const theSeasons = localFont({
  src: [
    {
      path: '../../public/The.Seasons/The Seasons Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/The.Seasons/The Seasons Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/The Seasons Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-the-seasons',
});
