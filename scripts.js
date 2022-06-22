const clients = [
  {
    name: "Biuro Księgowe Barbara Skowrońska",
    phone: "607 981 911",
    site: null,
    email: "biuro.skowronska@wp.pl",
    contact: "",
  },
  {
    name: "BUR Doradztwo Podatkowe Sp.z o.o.",
    phone: "(22) 781 88 82",
    site: "http://www.bur.pl",
    email: "bur@bur.pl",
    contact: "",
  },
  {
    name: "Plus Biuro rachunkowe-księgowe Wioletta Wojciech",
    phone: "(32) 257 08 60",
    site: "http://www.plus.katowice.pl",
    email: "biuro.plus.katowice1@gmail.com",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe AJ-TAX - Pełne Usługi Księgowe",
    phone: "790 210 021",
    site: "http://www.ajtax.pl",
    email: "biuro@ajtax.pl",
    contact: "",
  },
  {
    name: "KZ Expert Katarzyna Znojek",
    phone: "607 838 455",
    site: "https://kzexpert.pl/",
    email: "biuro@kzexpert.ppl",
    contact: "",
  },
  {
    name: "Maja Biuro Rachunkowe Agnieszka Pęciak",
    phone: "(76) 728 63 81",
    site: "http://www.biuro-rachunkowe.glogow.pl",
    email: "info@biuro-rachunkowe.glogow.pl",
    contact: "",
  },
  {
    name: "Maja Biuro Rachunkowe Agnieszka Pęciak",
    phone: "(76) 728 63 81",
    site: "http://www.biuro-rachunkowe.glogow.pl",
    email: "info@biuro-rachunkowe.glogow.pl",
    contact: "",
  },
  {
    name: "Marta Mendyk Usługi księgowo-kadrowe",
    phone: "697 509 987",
    site: "https://www.mendyk.com.pl/",
    email: "ksiegowosc@mendyk.com.pl",
    contact: "",
  },
  {
    name: "Cracow Union Spółka z ograniczoną odpowiedzialnością",
    phone: "(12) 632 57 32",
    site: "http://www.cracowunion.com",
    email: "krystyna@cracowunion.com",
    contact: "",
  },
  {
    name: "A.D.F. Biuro rachunkowe. Obsługa podmiotów gospodarczych w zakresie księgowości",
    phone: "(16) 670 65 04",
    site: "http://www.adf.przemysl.pl",
    email: "biuro@adf.przemysl.pl",
    contact: "",
  },
  {
    name: "Abacus Jadwiga Adamus",
    phone: "512 488 221",
    site: "https://www.adamus.net.pl/",
    email: "adamus@adamus.net.pl",
    contact: "",
  },
  {
    name: "Abacus Jadwiga Adamus",
    phone: "(22) 649 43 05",
    site: "https://www.adamus.net.pl/",
    email: "adamus@adamus.net.pl",
    contact: "",
  },
  {
    name: "Abicus Małgorzata Szulejewska",
    phone: "(22) 620 72 35",
    site: "https://www.abicus.org.pl/",
    email: "biuro@abicus.eu",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Sp. z o.o.",
    phone: "(12) 411 97 53",
    site: "http://rachunkowosckrakow.com.pl/",
    email: "tialowska@onet.pl",
    contact: "",
  },
  {
    name: "Braw Consulting Anna Wysocka",
    phone: "505 080 179",
    site: "http://www.brawconsulting.pl/",
    email: "biuro@brawconsulting.pl",
    contact: "",
  },
  {
    name: "Duet s.c.",
    phone: "691 401 036",
    site: "http://www.biuro-duet.pl",
    email: "gf@biuro-duet.pl",
    contact: "",
  },
  {
    name: "Global Accounting sp. z o.o.",
    phone: "882 053 576",
    site: "http://global-accounting.pl",
    email: "biuro@global-accounting.pl",
    contact: "",
  },
  {
    name: "Jarosław Widenka Centrum informatyki i księgowości",
    phone: "(32) 451 44 34",
    site: "http://www.biurorachunkowewodzislawslaski.pl/",
    email: "biuro@cik.pl",
    contact: "",
  },
  {
    name: "Kancelaria Finansowo-Księgowa Saldo Sp. z o.o. Biuro rachunkowe Saldo",
    phone: "(32) 260 27 27",
    site: "https://www.biurorachunkowe-saldo.pl/",
    email: "saldo@kancelariasaldo.pl",
    contact: "",
  },
  {
    name: "Księgowa Bogusława Lewandowska",
    phone: "(59) 842 36 89",
    site: "http://ksiegowa-sc.pl/",
    email: "ksiegowa_sc@wp.pl",
    contact: "",
  },
  {
    name: "Mgr Beata Pieczonka-Maziarka doradca podatkowy",
    phone: "(14) 676 95 50",
    site: null,
    email: "maziarka@poczta.onet.pl",
    contact: "",
  },
  {
    name: "Status Biuro Rachunkowe Magdalena Sobiecka-Kowalczyk",
    phone: "(22) 879 53 20",
    site: "http://www.status.waw.pl",
    email: "status@status.waw.pl",
    contact: "",
  },
  {
    name: "Wiebro Usługi księgowe Wiesława Brokan",
    phone: "608 111 908",
    site: "https://www.biurorachunkowewiebro.pl/",
    email: "wiebro@op.pl",
    contact: "",
  },
  {
    name: "Dora Biuro usług rachunkowych Dorota Jarząb",
    phone: "501 007 126",
    site: "https://www.biurorachunkowedora.com.pl/",
    email: "dorota.jarzab@biurorachunkowedora.com.pl",
    contact: "",
  },
  {
    name: "Wag-Soft s.c. Władysław Grabarski Ewa Grabarska",
    phone: "(44) 645 20 50",
    site: "https://www.biurorachunkowe-piotrkow.pl/",
    email: "wag@home.pl",
    contact: "",
  },
  {
    name: "Biuro rachunkowe Helena Siębor",
    phone: "(32) 454 70 87",
    site: "http://www.siebor.pl",
    email: "a.skora@siebor.pl",
    contact: "",
  },
  {
    name: "Bilans Biuro Rachunkowe Marta Jabłońska",
    phone: "604 918 007",
    site: "http://www.biuro-bilans.net.pl",
    email: "bilans@biuro-bilans.net.pl",
    contact: "",
  },
  {
    name: "Atoran Biuro Rachunkowe Monika Liberkowska-Słomińska",
    phone: "502 546 806",
    site: "https://atoran.pl/",
    email: "liberkowska@atoran.pl",
    contact: "",
  },
  {
    name: "Abm Consulting Adam Mularczyk",
    phone: "(42) 635 39 16",
    site: "http://www.abmconsulting.com.pl",
    email: "biuro@abmconsulting.com.pl",
    contact: "",
  },
  {
    name: "MBJ Biznes sp. z o.o. Biuro rachunkowe",
    phone: "(61) 662 87 90",
    site: "https://mbjbiznes.pl/",
    email: "biuro@mbjbiznes.pl",
    contact: "",
  },
  {
    name: "eF-Ka Biuro Rachunkowe Bogumiła Romanowicz, Ewa Marszał",
    phone: "(22) 675 83 00",
    site: "http://efkasc.pl/",
    email: "biuro@efkasc.pl",
    contact: "",
  },
  {
    name: "Kancelaria podatkowa doradca podatkowy Grzegorz Pawelec",
    phone: "608 018 018",
    site: "https://podatki.krakow.pl/pl/",
    email: "sekretariat@kancelaria.krakow.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Provider Sp. z o.o.",
    phone: "(33) 822 06 74",
    site: "http://provideras.pl/",
    email: "provider@pro.onet.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Silesia Sp. z o.o.",
    phone: "(32) 421 83 33",
    site: "http://www.e-biurosilesia.pl",
    email: "biuro@e-biurosilesia.pl",
    contact: "",
  },
  {
    name: "Kancelaria Biegłych Rewidentów Księga",
    phone: "(32) 782 91 47",
    site: "http://www.kbrksiega.pl",
    email: "biuro@kbr-ksiega.pl",
    contact: "",
  },
  {
    name: "LH Polonia Consulting Henryk Matczak",
    phone: "505 279 396",
    site: "https://lh-polonia-consulting.business.site/#posts",
    email: "polonia.matczak@gmail.com",
    contact: "",
  },
  {
    name: "Elżbieta Kołodziej Mgr. Biuro Rachunkowo-Podatkowe",
    phone: "(14) 627 59 59",
    site: "http://www.ksiegowaela.pl",
    email: "ela.kolodziej7@wp.pl",
    contact: "",
  },
  {
    name: "Agnieszka Gunerka Biuro rachunkowe i doradcze",
    phone: "513 187 047",
    site: "http://www.gunerka.pl",
    email: "gunerkaaga@wp.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Dorota Roszkowska-Galant",
    phone: "(91) 485 03 78",
    site: "http://biurogalant.pl/",
    email: "biuro@biurogalant.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Optima s.c. Agnieszka Krygier Andrzej Bentkowski",
    phone: "601 785 330",
    site: null,
    email: "optimakolo@wp.pl",
    contact: "",
  },
  {
    name: "Kancelaria Auditingu i Podatków ALFA sp. z o.o.",
    phone: "(48) 664 27 81",
    site: "http://www.biuro-alfa.com.pl",
    email: "alfa@biuro-alfa.com.pl",
    contact: "",
  },
  {
    name: "Spectrum Magdalena Gubała",
    phone: "(12) 292 76 18",
    site: "http://www.espectrum.pl",
    email: "biuro@espectrum.pl",
    contact: "",
  },
  {
    name: "Enigma Kancelaria doradcy podatkowego biuro rachunkowe Grażyna Burchardt",
    phone: "501 290 290",
    site: "http://www.biuroenigma.pl/",
    email: "gburchardt@biuroenigma.pl",
    contact: "",
  },
  {
    name: "Mal-Tax Biuro Rachunkowe Urszula Stec",
    phone: "781 343 204",
    site: "http://mal-tax.pl",
    email: "mal-tax@o2.pl",
    contact: "",
  },
  {
    name: "In-Plus Biuro rachunkowe Zdzisława Kolibaba",
    phone: "(77) 461 04 30",
    site: "http://www.biurorachunkowe-strzelce.com.pl",
    email: "inplus.strzelce@gmail.com",
    contact: "",
  },
  {
    name: "Biuro Księgowe z Pasją Anna Kaczmarczyk",
    phone: "509 737 579",
    site: "http://www.agkzpasja.pl",
    email: "biuro@agzpasja.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe eBuchalter s.c. JW Hołubowscy",
    phone: "(91) 578 16 13",
    site: "https://ebuchalter.pl/",
    email: "biuro@ebuchalter.pl",
    contact: "",
  },
  {
    name: "Zysk-Profit Biuro rachunkowe Maria Magdalena Skwiercz",
    phone: "501 791 662",
    site: "http://zysk-profit.pl/",
    email: "biuro@zysk-profit.pl",
    contact: "",
  },
  {
    name: "Biuro Usług Rachunkowych i Audytu Wynik Mariola Piątkowska",
    phone: "721 808 357",
    site: "http://www.biuro-wynik.com.pl",
    email: "mariola@biuro-wynik.com.pl",
    contact: "",
  },
  {
    name: "Lukan Biuro Rachunkowe Sp. z o.o.",
    phone: "(22) 610 50 20",
    site: "http://www.lukan-ksiegowosc.pl",
    email: "lukan.grochowska@gmail.com",
    contact: "",
  },
  {
    name: "Robert Maziarka Biuro Rachunkowe FHU",
    phone: "602 559 391",
    site: "http://ksiegowosc-maziarka-robert.business.site",
    email: "biuro.robert.maziarka@gmail.com",
    contact: "",
  },
  {
    name: "Omnibus Kancelaria Doradztwa Podatkowego Barbara Marciniak-Marecka",
    phone: "(91) 484 05 17",
    site: "http://www.omnibusbp.pl",
    email: "biuro@omnibusbp.pl",
    contact: "",
  },
  {
    name: "Elnet s.c. Biuro rachunkowe Elżbieta Nawotka, Jacek Nawotka",
    phone: "(89) 642 02 79",
    site: "https://elnet.net.pl/",
    email: "elka@elnet.net.pl",
    contact: "",
  },
  {
    name: "Stando Biuro rachunkowe Adam Kopera",
    phone: "668 717 004",
    site: "http://www.standorachunkowosc.pl",
    email: "cy4@interia.pl",
    contact: "",
  },
  {
    name: "BUK Biuro Rachunkowe Izabela Rygiel",
    phone: "798 240 830",
    site: "http://www.uslugiksiegoweszczecin.pl",
    email: "biuro@uslugiksiegoweszczecin.pl",
    contact: "",
  },
  {
    name: "Plus-Minus s.c.",
    phone: "(12) 266 03 83",
    site: "http://www.plus-minus.com.pl",
    email: "plus-minus@plus-minus.com.pl",
    contact: "",
  },
  {
    name: "Centrum księgowe Joanna Braumann",
    phone: "(74) 645 62 12",
    site: "https://www.centrum-ksiegowe.com/",
    email: "biuro@centrum-ksiegowe.com",
    contact: "",
  },
  {
    name: "Ams Consult Sp. z o.o.",
    phone: "508 137 085",
    site: "https://www.amsconsult.pl/",
    email: "marzenasawczenko@amsconsult.pl",
    contact: "",
  },
  {
    name: "Kancelaria Rachunkowa All-An sp. z o.o.",
    phone: "600 293 577",
    site: "http://www.all-an.pl/",
    email: "aleksandra@all-an.pl",
    contact: "",
  },
  {
    name: "Emikol Group Sp. z o.o.",
    phone: "695 413 697",
    site: "http://www.biuroemikol.eu/",
    email: "ela@biuroemikol.eu",
    contact: "",
  },
  {
    name: "Biuro Usług Księgowych Adamis Aneta Adamczyk",
    phone: "(95) 783 55 90",
    site: "http://www.adamis.pl",
    email: "sekretariat@adamis.pl",
    contact: "",
  },
  {
    name: "Fortunata Biuro rachunkowo-usługowe Halina Ostrowska-Sawicka",
    phone: "600 550 799",
    site: "http://www.fortunata.waw.pl/",
    email: "fortunata1955@onet.pl",
    contact: "",
  },
  {
    name: "Ekspert Sp. z o.o.",
    phone: "(18) 444 99 30",
    site: null,
    email: "ekspertnowysacz@interia.pl",
    contact: "",
  },
  {
    name: "Acc Sp. z o.o.",
    phone: "662 699 061",
    site: "https://policzone.pl/",
    email: "kontakt@policzone.pl",
    contact: "",
  },
  {
    name: "Ewa Sarwa Biuro rachunkowe",
    phone: "668 831 472",
    site: "https://www.ksiegowoscsarwa.pl/",
    email: "biuro@ksiegowoscsarwa.pl",
    contact: "",
  },
  {
    name: "Pimag Wanda Bomba",
    phone: "(71) 723 48 39",
    site: "http://www.pimag.pl",
    email: "biuro@pimag.pl",
    contact: "",
  },
  {
    name: "Kancelaria Podatkowa Tax",
    phone: "577 835 333",
    site: "https://biuropodatkowe.slupsk.pl/",
    email: "biuro@tax.slupsk.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Beata Imiołek",
    phone: "(22) 397 22 82",
    site: "http://www.beatex.com.pl",
    email: "beatex@beatex.com.pl",
    contact: "",
  },
  {
    name: "Toobeeco Sp. z o.o.",
    phone: "510 982 944",
    site: "https://www.toobeeco.com.pl/",
    email: "biuro@toobeeco.com.pl",
    contact: "",
  },
  {
    name: "Katarzyna Muras",
    phone: "506 605 229",
    site: "https://biuro-rachunkowe-katarzyna-muras.business.site/",
    email: "swirach109@gmail.com",
    contact: "",
  },
  {
    name: "Acla Sp. z o.o. Usługi księgowe online",
    phone: "513 902 703",
    site: "https://acla.pl/",
    email: "kontakt@acla.pl",
    contact: "",
  },
  {
    name: "Br Napora Biuro rachunkowe Anna Napora",
    phone: "(81) 749 86 56",
    site: "http://br-napora.pl/",
    email: "anna.napora@br-napora.pl",
    contact: "",
  },
  {
    name: "Atut Usługi rachunkowo audytorskie Jolanta Orłowska",
    phone: "(58) 341 80 13",
    site: "http://www.atut.biz/",
    email: "biuro@atut.biz",
    contact: "",
  },
  {
    name: "Edyta Matusik Biuro Rachunkowe Koniczynka",
    phone: "692 598 575",
    site: null,
    email: "edytamatusik@gmail.com",
    contact: "",
  },
  {
    name: "Profi Imr Sp. z o.o. Sp.k.",
    phone: "(22) 757 07 19",
    site: "http://www.biurorachunkowepiaseczno.pl",
    email: "biuroprofi@onet.eu",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Eleonora Jaroń",
    phone: "603 767 208",
    site: "https://www.eleonorajaron.pl/",
    email: "biuro@eleonorajaron.pl",
    contact: "",
  },
  {
    name: "Centrum Wsparcia Biznesu Agnieszka Czerepko Biuro Rachunkowe",
    phone: "(55) 234 86 40",
    site: "https://biurorachunkoweelblag.com.pl/",
    email: "c.w.b.czerepko@gmail.com",
    contact: "",
  },
  {
    name: "FINANS Biuro Usług Finansowych Iwona Biniek",
    phone: "692 976 706",
    site: "http://www.finans.biz.pl",
    email: "biuro@finans.biz.pl",
    contact: "",
  },
  {
    name: "Global Krystyna Gut",
    phone: "698 835 445",
    site: "http://www.global-jaroslaw.pl",
    email: "glob-gut@wp.pl",
    contact: "",
  },
  {
    name: "Biuro rachunkowe Global Marcin Gut",
    phone: "698 835 445",
    site: "https://biurorachunkoweglobal.pl/#",
    email: "gut.m@wp.pl",
    contact: "",
  },
  {
    name: "Usługi Księgowe Anna Stanisławska",
    phone: "692 926 897",
    site: null,
    email: "annastanislawska01@gmail.com",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Komfort Plus s.c. Mariusz Gonera i Jolanta Gonera",
    phone: "662 047 663",
    site: "http://www.komfort-plus.pl",
    email: "biuro.komfortplus@gmail.com",
    contact: "",
  },
  {
    name: "ENTER Biuro Rachunkowe Barbara Przywara",
    phone: "(33) 851 28 01",
    site: "http://www.biuroenter.pl",
    email: "biuro@biuroenter.pl",
    contact: "",
  },
  {
    name: "Horizon Finance Nina Jędrzejczak-Klimek sp.j.",
    phone: "604 967 777",
    site: "http://horizonfinance.pl/",
    email: "biuro@horizonfinance.pl",
    contact: "",
  },
  {
    name: "Marta Cierlik Biuro Rachunkowe",
    phone: "(76) 849 12 38",
    site: "http://www.ksiegowa-lubin.pl",
    email: "martacierlik@wp.pl",
    contact: "",
  },
  {
    name: "Marta Cierlik Biuro Rachunkowe",
    phone: "(76) 849 12 38",
    site: "http://www.ksiegowa-lubin.pl",
    email: "martacierlik@wp.pl",
    contact: "",
  },
  {
    name: "Krystyna Wylegała Biuro Rachunkowe",
    phone: "510 278 963",
    site: null,
    email: "biurach156@tlen.pl",
    contact: "",
  },
  {
    name: "Saldo Maria Kukawka Biuro Rachunkowe",
    phone: "(12) 638 88 10",
    site: "http://mksaldokrakow.pl/",
    email: "biuro@mksaldo.pl",
    contact: "",
  },
  {
    name: "Duo-Tax s.c. Biuro rachunkowe",
    phone: "790 290 832",
    site: "http://www.duo-tax.pl",
    email: "dorota@duo-tax.pl",
    contact: "",
  },
  {
    name: "Duo-Tax s.c. Biuro Rachunkowe",
    phone: "790 290 832",
    site: "http://www.duo-tax.pl",
    email: "dorota@duo-tax.pl",
    contact: "",
  },
  {
    name: "Krystyna Lasok Biuro Prawno-Rachunkowe",
    phone: "(32) 230 60 00",
    site: "https://biuro-prawno-rachunkowe-gliwice.business.site/",
    email: "bpr.lasok@gmail.com",
    contact: "",
  },
  {
    name: "Adam Śniatkowski BRAS 7.PL Biuro Rachunkowe",
    phone: "(61) 852 00 77",
    site: "http://www.bras7.pl",
    email: "biurobras@wp.pl",
    contact: "",
  },
  {
    name: "Markom Marcin Kozikowski",
    phone: "509 060 288",
    site: "http://www.ksiegowybytow.pl",
    email: "markom.bytow@interia.pl",
    contact: "",
  },
  {
    name: "Wega Biuro Rachunkowe Renata Zamorowska",
    phone: "(32) 608 46 60",
    site: "http://www.biurowega.katowice.pl",
    email: "brwega@gmail.com",
    contact: "",
  },
  {
    name: "Adiutor Biuro rachunkowe Elżbieta Lejman-Kałęka",
    phone: "514 678 044",
    site: "http://biuro-rachunkowe-adiutor-elzbieta-lejman-kaeka.business.site",
    email: "ela-pisz@wp.pl",
    contact: "",
  },
  {
    name: "Bilans Biuro rachunkowe Barbara Gawęda",
    phone: "791 791 156",
    site: "http://www.miechow-bilans.com.pl",
    email: "biuroks.bilans@gmail.com",
    contact: "",
  },
  {
    name: "Ancoba sp. z o.o.",
    phone: "662 116 216",
    site: "http://ancoba.pl/",
    email: "ancoba@ancoba.pl",
    contact: "",
  },
  {
    name: "One Tax Sp. z o.o.",
    phone: "(89) 526 63 10",
    site: "http://www.onetax.pl",
    email: "biuro@onetax.pl",
    contact: "",
  },
  {
    name: "Atut Sp. z o.o. Biuro rachunkowe. Usługi księgowe. Usługi rachunkowe",
    phone: "509 361 229",
    site: "http://www.biurorachunkowebielsko-biala.pl/",
    email: "atutbr@gmail.com",
    contact: "",
  },
  {
    name: "BIT S.C. Biuro Rachunkowe",
    phone: "506 550 897",
    site: "http://www.bitsc.pl",
    email: "bitsc@op.pl",
    contact: "",
  },
  {
    name: "Libella. Sp. z o.o.",
    phone: "601 159 996",
    site: "http://www.rachunkowosc-krakow.com",
    email: "libella@vp.pl",
    contact: "",
  },
  {
    name: "Ekspres Pit Biuro rachunkowe Bożena Chrzanowska",
    phone: "666 372 755",
    site: null,
    email: "ekspres.pit@interia.pl",
    contact: "",
  },
  {
    name: "Wanat Grażyna Wanat",
    phone: "(22) 773 27 53",
    site: "https://biurorachunkowe-wesola.pl/",
    email: "biurograzyna@op.pl",
    contact: "",
  },
  {
    name: "Mika Consulting Sp.j.",
    phone: "(32) 785 96 97",
    site: "http://www.mikaconsulting.eu",
    email: "biuro@mikaconsulting.eu",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Debet Doradztwo Podatkowe Mgr Lucyna Bendyk",
    phone: "(55) 234 34 81",
    site: null,
    email: "bendyk@interia.pl",
    contact: "",
  },
  {
    name: "Alba Alicja Badecka",
    phone: "607 031 303",
    site: "http://biurorachunkoweprzemysl.pl",
    email: "ab.biuro@op.pl",
    contact: "",
  },
  {
    name: "Maliszewska Marianna, Koprowska Joanna. Biuro rachunkowe s.c.",
    phone: "(48) 382 04 77",
    site: null,
    email: "biuro600@wp.pl",
    contact: "",
  },
  {
    name: "Abak Biuro Rachunkowo-Konsultacyjne",
    phone: "(42) 617 46 30",
    site: "https://biurorachunkoweabak.pl/",
    email: "abak@finn.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Statera Joanna Wiśniewska",
    phone: "502 574 501",
    site: null,
    email: "wisniewskajoanna03@gmail.com",
    contact: "",
  },
  {
    name: "Sarnecka Lidia. Biuro doradztwa podatkowego",
    phone: "605 598 129",
    site: "http://www.ksiegowosc-torun.pl/",
    email: "biuro@ksiegowosc-torun.pl",
    contact: "",
  },
  {
    name: "Taxxa Przyjazna Księgowa Centrum Plac Kaszubski Biuro Rachunkowe",
    phone: "(58) 380 04 04",
    site: "https://taxxa.pl/",
    email: "kontakt@taxxa.pl",
    contact: "",
  },
  {
    name: "Taxxa Przyjazna Księgowa Morska Biuro Rachunkowe",
    phone: "(58) 380 08 08",
    site: "https://taxxa.pl/",
    email: "kontakt@taxxa.pl",
    contact: "",
  },
  {
    name: "Taxxa Przyjazna Księgowa Orłowo Zwycięstwa Biuro Rachunkowe",
    phone: "(58) 380 48 48",
    site: "https://taxxa.pl/",
    email: "kontakt@taxxa.pl",
    contact: "",
  },
  {
    name: "Biuro Księgowo - Podatkowe Sp. z o.o.",
    phone: "609 535 828",
    site: "http://www.biuroksiegowe.szczecin.pl/",
    email: "biuroksiegowe@poczta.onet.pl",
    contact: "",
  },
  {
    name: "Zysk Biuro Rachunkowe Joanna Krajewska",
    phone: "518 938 502",
    site: "https://www.zysk-gorzow.pl/",
    email: "zyskgorzow@gmail.com",
    contact: "",
  },
  {
    name: "Avarus Sp. z o.o.",
    phone: "(76) 835 72 00",
    site: "https://www.biurorachunkoweavarus.pl/",
    email: "avarus.spolka@gmail.com",
    contact: "",
  },
  {
    name: "Kietrys i Lesiewicz sp. z o.o. sp.k.",
    phone: "(42) 637 39 90",
    site: "http://kietrysilesiewicz.pl/",
    email: "biuro@kietrysilesiewicz.pl",
    contact: "",
  },
  {
    name: "Pokrzywnicka Barbara Doradztwo, marketing, biuro rachunkowe",
    phone: "605 574 913",
    site: "http://www.ksiegowa-bytow.pl",
    email: "b.pokrzywnicka@vp.pl",
    contact: "",
  },
  {
    name: "Akro Biuro rachunkowe",
    phone: "(22) 502 31 62",
    site: "http://akro.waw.pl",
    email: "akro@akro.waw.pl",
    contact: "",
  },
  {
    name: "Renata Pempera Biuro Rachunkowe",
    phone: "663 705 354",
    site: "https://pempera.pl/",
    email: "biuro@pempera.pl",
    contact: "",
  },
  {
    name: "Biuro Rachunkowe Tributum s.c. Anna Wysocka Marcin Wysocki",
    phone: "515 266 354",
    site: "http://www.tribut.pl",
    email: "r.biuro@o2.pl",
    contact: "",
  },
  {
    name: "Anna Jeżyna Biuro rachunkowe",
    phone: "887 406 634",
    site: "https://www.rachunkowosclublin.pl/",
    email: "anna.biuro.rach@gmail.com",
    contact: "",
  },
  {
    name: "Optima Kancelaria podatkowa Justyna Grzywaczewska",
    phone: "(56) 623 26 74",
    site: "http://www.kancelariaoptima.pl/",
    email: "kancelariaoptima@wp.pl",
    contact: "",
  },
  {
    name: "Fimar Anna Rydlewska",
    phone: "515 474 223",
    site: null,
    email: "fimar.ksiega@gmail.com",
    contact: "",
  },
];

if (localStorage.clients === undefined) {
  localStorage.setItem("clients", JSON.stringify(clients));
}
const editNoteForm = (e) => {
  const editForm = document.createElement("form");
  editForm.style =
    "position: fixed; top: 50%; left: 50%; z-index: 999; display: flex; flex-direction: column; background-color: #fff; padding: 25px 30px 60px; border-radius: 10px; box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px; transform: translate(-50%, -50%);";

  editForm.id = "editForm";

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "client");
  noteLabel.textContent = "Kontakt -> był?";
  noteLabel.style = "font-weight: bold;font-size: 15px;";

  const noteInput = document.createElement("input");
  noteInput.setAttribute(
    "placeholder",
    "Wpisz tutaj czy był kontakt, lub kiedy był"
  );
  noteInput.setAttribute("type", "text");
  noteInput.setAttribute("id", "note");
  noteInput.style = "padding: 5px; margin: 0 0 10px; width: 200px;";

  const submitNote = document.createElement("input");
  submitNote.setAttribute("type", "submit");
  submitNote.setAttribute("id", "addNote");
  submitNote.value = "Zapisz";

  const closeNote = document.createElement("button");
  closeNote.id = "closeNote";
  closeNote.textContent = "Zamknij";
  closeNote.style = "margin-top: 10px;";

  editForm.appendChild(noteLabel);
  editForm.appendChild(noteInput);
  editForm.appendChild(submitNote);
  editForm.appendChild(closeNote);
  document.body.appendChild(editForm);

  const index = e.target.getAttribute("data-task");
  document
    .querySelector("#addNote")
    .addEventListener("click", (e) => editFormFunc(e, index));
};

const editFormFunc = (e, index) => {
  e.preventDefault();
  const clients = JSON.parse(localStorage.getItem("clients"));
  clients[index].contact = document.querySelector("#note").value;
  localStorage.setItem("clients", JSON.stringify(clients));
  window.location.reload(true);
};

const displayTask = () => {
  if (localStorage.getItem("clients") !== null) {
    const clients = JSON.parse(localStorage.getItem("clients"));
    const tBody = document.querySelector("tbody");
    clients.forEach(({ name, phone, email, contact }, index) => {
      const newRowTask = `<tr> <td>${name}</td> <td>${phone}</td> <td>${email}</td><td>${contact}</td> <td><button  data-task=${index} id="editNotes">Edytuj</button></td> </tr>`;

      tBody.innerHTML += newRowTask;
    });

    const editNotes = document.querySelectorAll("#editNotes");

    editNotes.forEach((button) =>
      button.addEventListener("click", editNoteForm)
    );
  }
};

displayTask();
