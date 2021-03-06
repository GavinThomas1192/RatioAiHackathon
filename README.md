# RatioAiHackathon
AI Hackathon hosted by Ratio

Team Members include.

* Izzy Baer   
* Aaron McPeek
* Megan Flood
* Robert Reed
* Gavin Thomas

## To get up and running...
  * Client Side

    ``` npm install ```
    ``` npm run watch ```

  * Server Side
    ``` cd ~./src ```
    ``` node server.js ```


* navigate to localhost:xxxx

* Setup a .dev.env file inside /src folder
*      AZURE_CLIENT_SECRET = xxxxxxxxxxxxxxxxxxxxxxxxxxxx 
*       NODE_ENV = 'notproduction' 

# Microsoft Text Translator possible languages..
 { name: 'Afrikaans', code: 'af' },
  { name: 'Allemand',
    code: 'de',
    voices: 
     [ 'Allemagne (Hedda female)',
       'Allemagne (Katja female)',
       'Allemagne (Stefan male)',
       'Autriche (Michael male)',
       'Suisse (Karsten male)' ],
    speech: { name: 'Allemand', code: 'de-DE' } },
  { name: 'Anglais',
    code: 'en',
    voices: 
     [ 'Australie (Catherine female)',
       'Australie (James male)',
       'Canada (Linda female)',
       'Canada (Richard male)',
       'États-Unis (BenjaminRUS male)',
       'États-Unis (JessaRUS female)',
       'États-Unis (Mark male)',
       'États-Unis (Zira female)',
       'États-Unis (ZiraRUS female)',
       'Inde (Heera female)',
       'Inde (Ravi male)',
       'Royaume-Uni (George male)',
       'Royaume-Uni (Susan female)' ],
    speech: { name: 'Anglais', code: 'en-US' } },
  { name: 'Arabe',
    code: 'ar',
    voices: [ 'Arabie Saoudite (Naayf male)', 'Égypte (Hoda female)' ],
    speech: { name: 'Arabe', code: 'ar-EG' } },
  { name: 'Bangla', code: 'bn' },
  { name: 'Bosniaque', code: 'bs' },
  { name: 'Bulgare', code: 'bg' },
  { name: 'Cantonais (traditionnel)',
    code: 'yue',
    voices: 
     [ 'Hong Kong, RAS (Danny male)',
       'Hong Kong, RAS (Tracy female)' ] },
  { name: 'Catalan',
    code: 'ca',
    voices: [ 'Espagne (Herena female)' ] },
  { name: 'Chinois simplifié',
    code: 'zh-Hans',
    voices: 
     [ 'République populaire de Chine (Kangkang male)',
       'République populaire de Chine (Yaoyao female)' ],
    speech: { name: 'Chinois simplifié', code: 'zh-CN' } },
  { name: 'Chinois traditionnel',
    code: 'zh-Hant',
    voices: [ 'Taiwan (Yating female)', 'Taiwan (Zhiwei male)' ],
    speech: { name: 'Chinois traditionnel', code: 'zh-TW' } },
  { name: 'Coréen',
    code: 'ko',
    voices: [ 'Corée (Minjoon male)', 'Corée (Seohyun female)' ] },
  { name: 'Croate', code: 'hr' },
  { name: 'Danois',
    code: 'da',
    voices: [ 'Danemark (Helle female)' ] },
  { name: 'Espagnol',
    code: 'es',
    voices: 
     [ 'Espagne (Laura female)',
       'Espagne (Pablo male)',
       'Mexique (Raul male)',
       'Mexique (Sabina female)' ],
    speech: { name: 'Espagnol', code: 'es-ES' } },
  { name: 'Estonien', code: 'et' },
  { name: 'Fijian', code: 'fj' },
  { name: 'Filipino', code: 'fil' },
  { name: 'Finnois',
    code: 'fi',
    voices: [ 'Finlande (Heidi female)' ] },
  { name: 'Français',
    code: 'fr',
    voices: 
     [ 'Canada (Caroline female)',
       'Canada (Claude male)',
       'France (Julie female)',
       'France (Paul male)' ],
    speech: { name: 'Français', code: 'fr-FR' } },
  { name: 'Gallois', code: 'cy' },
  { name: 'Grec', code: 'el', voices: [ 'Grèce (Stefanos male)' ] },
  { name: 'Haïtien', code: 'ht' },
  { name: 'Hébreu', code: 'he', voices: [ 'Israël (Asaf male)' ] },
  { name: 'Hindi',
    code: 'hi',
    voices: [ 'Inde (Hemant male)', 'Inde (Kalpana female)' ] },
  { name: 'Hmong daw', code: 'mww' },
  { name: 'Hongrois',
    code: 'hu',
    voices: [ 'Hongrie (Szabolcs male)' ] },
  { name: 'Indonésien',
    code: 'id',
    voices: [ 'Indonésie (Andika male)' ] },
  { name: 'Italien',
    code: 'it',
    voices: [ 'Italie (Cosimo male)', 'Italie (Elsa female)' ],
    speech: { name: 'Italien', code: 'it-IT' } },
  { name: 'Japonais',
    code: 'ja',
    voices: 
     [ 'Japon (Ayumi female)',
       'Japon (Ichiro male)',
       'Japon (Watanabe female)' ],
    speech: { name: 'Japonais', code: 'ja-JP' } },
  { name: 'Klingon', code: 'tlh' },
  { name: 'Letton', code: 'lv' },
  { name: 'Lituanien', code: 'lt' },
  { name: 'Malagasy', code: 'mg' },
  { name: 'Malaisien', code: 'ms' },
  { name: 'Maltais', code: 'mt' },
  { name: 'Néerlandais',
    code: 'nl',
    voices: [ 'Pays-Bas (Frank male)', 'Pays-Bas (Marijke female)' ] },
  { name: 'Norvégien',
    code: 'nb',
    voices: [ 'Norvège (Jon male)', 'Norvège (Nina female)' ] },
  { name: 'Perse', code: 'fa' },
  { name: 'Polonais',
    code: 'pl',
    voices: [ 'Pologne (Adam male)', 'Pologne (Paulina female)' ] },
  { name: 'Portugais',
    code: 'pt',
    voices: 
     [ 'Brésil (Daniel male)',
       'Brésil (Maria female)',
       'Portugal (Helia female)' ],
    speech: { name: 'Portugais', code: 'pt-BR' } },
  { name: 'Querétaro Otomi', code: 'otq' },
  { name: 'Roumain',
    code: 'ro',
    voices: [ 'Roumanie (Andrei male)' ] },
  { name: 'Russe',
    code: 'ru',
    voices: [ 'Russie (Irina female)', 'Russie (Pavel male)' ],
    speech: { name: 'Russe', code: 'ru-RU' } },
  { name: 'Samoan', code: 'sm' },
  { name: 'Serbe (cyrillique)', code: 'sr-Cyrl' },
  { name: 'Serbe (latin)', code: 'sr-Latn' },
  { name: 'Slovaque',
    code: 'sk',
    voices: [ 'Slovaquie (Filip male)' ] },
  { name: 'Slovène', code: 'sl' },
  { name: 'Suédois',
    code: 'sv',
    voices: [ 'Suède (Bengt male)', 'Suède (Karin female)' ] },
  { name: 'Swahili', code: 'sw' },
  { name: 'Tahitian', code: 'ty' },
  { name: 'Tamil', code: 'ta' },
  { name: 'Tchèque',
    code: 'cs',
    voices: [ 'République tchèque (Vit male)' ] },
  { name: 'Thaï',
    code: 'th',
    voices: [ 'Thaïlande (Pattara male)' ] },
  { name: 'Tongan', code: 'to' },
  { name: 'Turc',
    code: 'tr',
    voices: [ 'Turquie (Seda female)', 'Turquie (Tolga male)' ] },
  { name: 'Ukrainien', code: 'uk' },
  { name: 'Urdu', code: 'ur' },
  { name: 'Vietnamien', code: 'vi' },
  { name: 'Yucatec Maya', code: 'yua' } ]
