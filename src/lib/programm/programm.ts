//Import Images for automatic image optimization
import lionsDen from "$lib/assets/img/lions_den_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
import danubianDub from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
import wickedAndBonny from "$lib/assets/img/wckd-nd-bnny.png?width=320;480;640;768&format=webp;avif;jpg";
import peter from "$lib/assets/img/peter.jpeg?width=320;480;640;768&format=webp;avif;jpg";
import pia from "$lib/assets/img/pia.jpg?width=320;480;640;768&format=webp;avif;jpg";
import dave from "$lib/assets/img/dave.jpg?width=320;480;640;768&format=webp;avif;jpg";
import druck from "$lib/assets/img/siebdruck.jpg?width=320;480;640;768&format=webp;avif;jpg";

export type ProgrammItem = {
  title?: string;
  description?: string;
  startsAt?: string;
  slug?: string;
  thumbnail?: string[];
  longDesciption?: string;
};

export const programm: ProgrammItem[] = [
  {
    startsAt: "Now",
    title: "Early Dub Tickets",
    description: "Sicher dir dein Ticket bei Eventbrite.",
  },
  {
    title: "Feierliche Eröffnung 2023",
    startsAt: "Fr. 21. 7. - 14 Uhr",
  },
  {
    title: "Wicked and Bonny",
    description:
      "Sometimes Wicked - sometimes Bonny! Gegründet im Jahr 2015 - mit Studio Sitz in Silandro, Bozen.",
    startsAt: "***",
    slug: "wicked-bonny",
    thumbnail: wickedAndBonny,
    longDesciption: `Sometimes Wicked - sometimes Bonny! Two words representing their own style of music! Founded in 2015 - based in a Studio in Silandro, Bolzano. Roots Music, Rebel Music, Experimental Music. Straightbase Dubs in a digital and rough analog way, Rub-a-Dub Style, endless delays, sirens and live effects, produced for a hectic tour plan on the weekends on Soundsystem Sessions and Festival Stages! Since 2015 upon the road, playing more than 400 Club Shows, Soundsystem Sessions and Festival Stages in all over Europe. Wicked and Bonny crew built a Soundsystem called Botheration Hifi in spring time 2015. They are hosting a different regular Sessions and Festivals in Bolzano and keep pushing the local underground music scene since almost 10 years now... After releasing 2 Albums, a few Singles, EP's and different Label Collaborations. Wicked and Bonny Records was founded in 2021 that is not only label. The goal of Wicked And Bonny Records is to create a Label to promote music, art and work as a group of friends, looking for constant innovative ways of promotion and bringing people together. So the team got bigger and so Graphic, video, communication and musical distribution experts working on one mission: let's bother the system with music and love.`,
  },
  {
    title: "Lion`s Den",
    description:
      "Lion's Den ist ein Label, ein Soundsystem, ein Studio und eine Produktions- und Promotion-Kraft aus Berlin.",
    startsAt: "***",
    slug: "lions-den",
    thumbnail: lionsDen,
    longDesciption: `LION'S DEN [Berlin // GER]
    www.lionsdensound.de
    
    Lion’s Den is a label, a sound system, a studio and a production and promotion force from Berlin, Germany.
     
    Started by the musical activist Ras Lion a few years ago Lion’s Den has constantly been moving forward on all aspects of delivering finest in conscious music ever since – in the studio, on vinyl or at a dance.
    Always on a musical mission to merge creative energies – connecting different people, different influences and inspiration – Lion’s Den is working with various vocalists, musicians and producers from all over the world.
     
    The record label is specialized in Dub, Steppas, Reggae, and other music in the same terrain on vinyl and digitally.
    
    A fine selection of records, tuff dubs and conscious lyrics, some heavyweight speakerboxes and amplifiers and a deep love for the music combined provide for positive vibes and a special experience at any session near or far when Lion’s Den come with their sound – Ras Lion (selekta / operator / engineer), mostly joined on lyrical duties by the multilingual MCs/singers Kali Green and konTa or guests.
    The agenda: word, sound and power.
     
    Another strong force in the Lion’s Den is designer, selekta & producer Darkwing Dub from Austria with some great visual and musical artillery.
    
    Lion's Den is regularly organizing sound system sessions in Berlin and around and, other than Germany, has played in countries like Austria, Belgium, Croatia, Czech Republic, France, Italy, Mexico, Netherlands, Poland, Romania, Russia, Spain, Switzerland and the UK. Festival appearances include Fusion, Dub Camp, Dub Stone, Reggaebus, Dour, Reggae Jam, No Logo, One Love, Seasplash, Serendubity, and several others.
    On their journey Lion’s Den has had the possibility to work and share stages and controls with many of the ‘greats’ of the scene – united on the mission to spread music they love.
    
    list of releases we have been involved with:
    http://lionsdensound.de/?page_id=16
    
    
    further links:
    https://soundcloud.com/lionsdensound
    https://www.facebook.com/lionsdensound/
    https://www.youtube.com/user/LionsDenSound/
    https://www.instagram.com/lionsdensoundsystem/`,
  },
  {
    title: "Me Cultjah",
    description:
      " Veteran Selector & heavyweight Roots & Dub Collector, der bereits seit Anfang der 90er aktiv die Wiener Klubszene mitgestaltet. Hat eine Vorliebe für extra schwere Rhythmen und treibende hypnotische Grooves, gepaart mit conscious lyrics & sweet and catchy harmonies.",
    startsAt: "***",
    // slug: "peter",
    thumbnail: peter,
    longDesciption: ` Veteran Selector & heavyweight Roots & Dub Collector, der bereits seit Anfang der 90er aktiv die Wiener Klubszene mitgestaltet.
    Hat eine Vorliebe für extra schwere Rhythmen und treibende hypnotische Grooves, gepaart mit conscious lyrics & sweet
    and catchy harmonies. 
    Spielt aus dem Fundus seiner Sammlung Epochen und Genre übergreifend, stets sorgfältig ausgewählt, always deep &
    promising.
    `,
  },
  {
    title: "Danubian Dub",
    description:
      "Soundsystem, Produzent und Veranstalter der Eventreihe 'Vienna Dubwise' und des 'Dubstetten' Festivals.",
    startsAt: "***",
    // slug: "danubian-dub",
    thumbnail: danubianDub,
    longDesciption: `Soundsystem, producer & organizer of the event series „Vienna Dubwise“ and the „Dubstetten“ festival. Hosting local to international artists such as: Alpha Steppa, Sinai, Wicked & Bonny, Elemental Wave, Toroki & Isayah, Dubbing Sun, and many more.


 
    Building their first sound in 2017, they gathered experience and started exploring their style. After all they realized, a custom sound system was necessary to deliver the experience they were looking for.
    Fueled by their pursuit for sonic excellence, they embrace their passion of roots & dub music to create unifying and intense moments of musical experience.
    referring to the UK’s 70’s „Roots & Culture“  sound system style, the artists are playing in front of the sound system. In comparison to modern DJ’s, every tune is played for itself without transitioning between them. 
    
    
    Traditional in this sub-culture is the so called „Dubplate“. It is a music production, you only can experience on the event itself because it is not released yet. 
    
    After years of playing dubplates & productions from other artists, they decided to release their own music.
    `,
  },
  {
    title: "Gustl Blue",
    description: "Flow's Band",
    startsAt: "***",
    // thumbnail: pia,
  },

  {
    title: "Siebdruck Workshop",
    description:
      "Gestalte dein eigenes Dubstetten T-Shirt in unserem Siebdruck Workshop! Lerne, wie du Designs auf T-Shirts und andere Kleidungsstücke druckst. ",
    startsAt: "***",
    thumbnail: druck,
  },

  {
    title: "Pia's Yoga",
    description:
      "Entdecke die Welt des Yoga. Lerne, wie man Körper und Geist in Einklang bringt. Egal ob Anfänger oder Fortgeschrittene, jeder ist willkommen!",
    startsAt: "***",
    thumbnail: pia,
  },
  {
    title: "Marlene's Hoolahoop",
    description:
      "Erlebe den Spaß und die Fitness-Vorteile des Hula-Hoop mit Marelene! Lerne neue Tricks, verbessere deine Technik und trainiere deine Körpermitte. Für alle Fitness-Levels geeignet.",
    startsAt: "***",
    // thumbnail: pia,
  },
  {
    title: "Laura's Kinder- schminken",
    description:
      "Verwandle dich in eine Prinzessin, einen Superhelden oder ein Tier! Lass deiner Fantasie freien Lauf. ",
    startsAt: "***",
    // thumbnail: pia,
  },
  {
    title: "Marlene's Zirkus",
    description:
      "Beim  Mitmach Zirkus haben Kinder und Erwachsene die Möglichkeit sich in verschiedensten Zirkusdisziplinen auszuprobieren und sich selbst zu entdecken. Von Jonglage, Balance und Einrad fahren ist für jeden etwas dabei. Die individuelle Neugierde, sowie die Kreativität und das Körperbewusstsein werden dabei gestärkt und gefördert.",
    startsAt: "***",
    // thumbnail: pia,
  },
  {
    title: "Dave's Soundsystem Workshop",
    description: "Tauch ein und Verstehe die Hintergründe eines Soundsystems.",
    startsAt: "***",
    thumbnail: dave,
  },
  // {
  //   title: "Geo Popoff",
  //   description:
  //     "Flow's Band",
  //   startsAt: "Sa. 22. 7. - 17 Uhr",
  //   // thumbnail: pia,
  // },
];
