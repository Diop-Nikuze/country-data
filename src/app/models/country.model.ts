export interface Country {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };

  borders: string;

  tld: string;
  capital: string[];
  population: number;
  region: string;
  subregion: string;
  flags: { svg: string; alt: string };

  languages?: {
    [key: string]: string;
  };

  currencies?: {
    [key: string]: string;
  };
}
