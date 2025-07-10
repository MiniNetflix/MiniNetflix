const users = {
  "Alessio": "1234",
  "Marco": "pelopelo",
  "Alessia": "oceani",
  "Anna": "1234",
  "Alfonso": "1234",
  "Chiara": "iii"
};
let currentUser = null;

const seriesData = {
  "Ginny e Georgia": {
    img: "https://i.imgur.com/CScKmEZ.jpeg",
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" }
      ],
      2: [
        { episode: 1, title: "Bentornati str**zetti", src: "https://drive.google.com/file/d/13hz6WDbRZN0iN000HEjvPNVrhhO1f75p/preview" },
        { episode: 2, title: "Perchè tutto deve diventare cosi terribile, ogni volta, sempre?", src: "https://drive.google.com/file/d/1rstuICrKjXthkzgbm_dIYXPeM-updvTK/preview" },
        { episode: 3, title: "Che cosa hai in mente, ragazzina?", src: "https://drive.google.com/file/d/1OHwtpnbItdGgEzPnc-eT7xDjD5__2c_2/preview" },
        { episode: 4, title: "Buon mio compleanno a voi", src: "https://drive.google.com/file/d/1FJFa-iI6Q0uSc7IFPKI9R-a_xjaWdK5w/preview" },
        { episode: 5, title: "I latkes sono eccellenti", src: "https://drive.google.com/file/d/1CXzJxprhWFgAfYFsVRxmwjcEM76coGhY/preview" },
        { episode: 6, title: "Questo è lo speciale Natale di Ginny & Georgia", src: "https://drive.google.com/file/d/1iWx2hEi-H7BcVC4W-S84mxED2kk-D6NY/preview" },
        { episode: 7, title: "Lascia fare a noi tutto il resto", src: "https://drive.google.com/file/d/1YISd0u7tw9DY38-RQdji_6Mt_SNTBQqQ/preview" },
        { episode: 8, title: "Ascolta! L'oscurità scende...", src: "https://drive.google.com/file/d/19_nawVSd7rWaVffpUJSPd_97XAgGYtIp/preview" },
        { episode: 9, title: "Prima o poi lo uccido", src: "https://drive.google.com/file/d/1SYAA10m4LjxaAItsbypN_eK7K9i7IyGl/preview" },
        { episode: 10, title: "Non sono Cenerentola", src: "https://drive.google.com/file/d/1z6ea1hdBPUG3NqaEVv3TE5-YlrAU_lA-/preview" }
      ],
      3: [
        { episode: 1, title: "Non sarebbe un buon podcast", src: "https://drive.google.com/file/d/1UuRAg2JStiRt-X2Q63NH6vN3NADVcInX/preview" },
        { episode: 2, title: "Maledetto bip, bip", src: "https://drive.google.com/file/d/10ipOz6ugcE4hI9JtHyQZJu1azsLuFHgk/preview" },
        { episode: 3, title: "Gli amici ballano", src: "https://drive.google.com/file/d/1pjbdrEG9mpSxP1vvtSlKoqzbPLW7fb6n/preview" },
        { episode: 4, title: "E' tornata la str***a", src: "https://drive.google.com/file/d/18LgMYOeJoMJ9N101H1DOkKnxwQzurj3p/preview" },
        { episode: 5, title: "La dinamite fa bum", src: "https://drive.google.com/file/d/1lYcyzTPVuqTdC5yDG2E_gQyXOOFeHNvX/preview" },
        { episode: 6, title: "Almeno non può andare peggio", src: "https://drive.google.com/file/d/1F-_xjgRZy4SLFgGB9EOOuUfrImfcXmoS/preview" },
        { episode: 7, title: "E' pazzesco", src: "https://drive.google.com/file/d/19T_zEO-PXZZl8uK3Wsu3eDfqQMF8qn5v/preview" },
        { episode: 8, title: "E' un pranzo al sacco?", src: "https://drive.google.com/file/d/1CxoJWegDyFbvtu2XsRZTE5tnVr3geM1x/preview" },
        { episode: 9, title: "E' il momento del mio assolo", src: "https://drive.google.com/file/d/1ZUnk12DxDTH3E36rx7sLH1Qyctwu-Rfv/preview" },
        { episode: 10, title: "Mostri", src: "https://drive.google.com/file/d/1UvEuk_dt2Fv2uwlB_X5NoQ6su4VavjB0/preview" }
      ]
    }
  },
  "The Vampire Diaries": {
    img: "https://i.imgur.com/oyXekYo.jpeg",
    seasons: {
      1: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      2: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      3: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      4: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 23, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      5: [
        { episode: 1, title: "So cosa hai fatto l’estate scorsa", src: "https://drive.google.com/file/d/1N6SaBr0RqZutVUVrYbFYVVF7AttMWe0P/preview" },
        { episode: 2, title: "Bugie", src: "https://drive.google.com/file/d/1aZDm2uxQF2htN8fffM3Z5W-B-UC_8O_l/preview" },
        { episode: 3, title: "Peccato originale", src: "https://drive.google.com/file/d/1eO7sbozXrsuGOYr8_liv7aNzJTBgc6EI/preview" },
        { episode: 4, title: "Per chi suona la campana", src: "https://drive.google.com/file/d/1aZZcU7tLcXc-Nf7ckuE1kgRFz-zNwrZ_/preview" },
        { episode: 5, title: "La festa dei mostri", src: "https://drive.google.com/file/d/1GGsTuyPr3C5IuCXjnAm4FLVQrjJLphUF/preview" },
        { episode: 6, title: "Maneggiare con cura", src: "https://drive.google.com/file/d/1hg5iH4bRtF_n9vK1p8T9FYccWw6Lx5sR/preview" },
        { episode: 7, title: "Morte e fanciulle", src: "https://drive.google.com/file/d/1Ab5g71bwv9XdIByP_AN2oKGTUmH38-W-/preview" },
        { episode: 8, title: "Il morto del campus", src: "https://drive.google.com/file/d/10djwOl2REFoOs_aoRXL9oWMBnIMBNEuj/preview" },
        { episode: 9, title: "La prigione", src: "https://drive.google.com/file/d/1Zi9rB3Lq54xWiyMgLbCyO-EBuZOb3e-s/preview" },
        { episode: 10, title: "Cinquanta sfumature di Grayson", src: "https://drive.google.com/file/d/1ltXNWcUo9shIKdGTfivLfy_NE-hNSX3w/preview" },
        { episode: 11, title: "500 anni da sola", src: "https://drive.google.com/file/d/1k5Z6YOJg3XXNWuNnsvo_1CAntV9YGd4S/preview" },
        { episode: 12, title: "Il diavolo dentro", src: "https://drive.google.com/file/d/18ANYmw1Qz-7p4_VonqBvWmLJzAVn8M47/preview" },
        { episode: 13, title: "Eclissi totale del cuore", src: "https://drive.google.com/file/d/1fFE-ER0ZTOoxi1aNUYUhU6EgZPpJxUKw/preview" },
        { episode: 14, title: "Nessuna via d’uscita", src: "https://drive.google.com/file/d/1ZEjlneRrwNc6dkRIAHaJCVBiH0iNhiGY/preview" },
        { episode: 15, title: "La ragazza scomparsa", src: "https://drive.google.com/file/d/1OawIrHSFSLiv3p8_5km97NJYQEBlQlgf/preview" },
        { episode: 16, title: "Mentre dormivi", src: "https://drive.google.com/file/d/1w7O1pf0URI7ZklMeO36IIvYF5G9kAYoC/preview" },
        { episode: 17, title: "Salvami", src: "https://drive.google.com/file/d/1JaYg3RuhQ7d7bVLDrgt5HpKqdDob1pOI/preview" },
        { episode: 18, title: "Resident Evil", src: "https://drive.google.com/file/d/11IX1Lm0qG9D5_poEj6_DVSo7d7FAkiiV/preview" },
        { episode: 19, title: "Uomo in fiamme", src: "https://drive.google.com/file/d/1rDVYyfZtLKTkvuxayIF7xdungWQ-Ji4Y/preview" },
        { episode: 20, title: "Verità sepolte", src: "https://drive.google.com/file/d/11ZX2nfc7Z-JnFuc_tzOI6Wz-MUEm5PiG/preview" },
        { episode: 21, title: "Terra promessa", src: "https://drive.google.com/file/d/1xqyaVQkkolsiCx6OkBuJmIoSEfQua29q/preview" },
        { episode: 22, title: "Casa", src: "https://drive.google.com/file/d/1mAA-ITKNXmLUfqT86pBzWDWSOzzfEqnj/preview" }
      ],
      6: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      7: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 19, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 20, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 21, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 22, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" }
      ],
      8: [
        { episode: 1, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 2, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 3, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 4, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 5, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 6, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 7, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 8, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" },
        { episode: 9, title: "Amare è difficile", src: "https://drive.google.com/file/d/1-1Au2tWQIj37QW_PFj3mG71i_k4YS3Rc/preview" },
        { episode: 10, title: "Il peggior tradimento dai tempi di Jordyn e Kylie", src: "https://drive.google.com/file/d/1jv_pet7AY2Yvrwa0-HmZc_GRGcEeu01o/preview" },
        { episode: 11, title: "Pilot", src: "https://drive.google.com/file/d/12Ew2SflLxJP6C6UuznxfX4ou-1e_1Xcq/preview" },
        { episode: 12, title: "E' un viso, non una maschera", src: "https://drive.google.com/file/d/13wB1kyWtuHqINWpBYsfRSgbOIQ8404UE/preview" },
        { episode: 13, title: "Cose che si addicono solo a gente ricca", src: "https://drive.google.com/file/d/1SagpLPK4OmTmeO0dr23xfeA1rfkmFFv4/preview" },
        { episode: 14, title: "Lydia Bennet è senza dubbio femminista", src: "https://drive.google.com/file/d/1uM6S1cUnBRT_wRLsxvX0VO5oZ6MAIbVU/preview" },
        { episode: 15, title: "Boo, brutta stron*a", src: "https://drive.google.com/file/d/1MFYR1es-2PzE40642-nuaMJQ7GE0QHOZ/preview" },
        { episode: 16, title: "Non mi capite", src: "https://drive.google.com/file/d/1Rfr4vh6xVEoG5f-WMeeQyoChIGInwQAt/preview" },
        { episode: 17, title: "Buon compleanno sciocca", src: "https://drive.google.com/file/d/1Kq7Fs06knX-6VOXQTs0hqphJ3Q3srCun/preview" },
        { episode: 18, title: "Croce su una parte, croce sull'altra", src: "https://drive.google.com/file/d/1kLJ29kNZnz_RF5NDSXVJvSdWUHe6TC5J/preview" }
      ]
    }
  },
  "Mercoledì": {
    img: "https://i.imgur.com/rZ8CYjh.jpeg",
    seasons: {
      1: [
        { episode: 1, title: "Chi nasce di Mercoledì è immensamente triste", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 2, title: "Un triste isolamento", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 3, title: "Tristemente amici o nemici", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 4, title: "Una triste serata", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 5, title: "Chi semina vento raccoglie tristezza", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 6, title: "Un triste compleanno", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 7, title: "E' triste che tu non mi conosca ancora", src: "https://www.youtube.com/embed/HhesaQXLuRY" },
        { episode: 8, title: "Triste da morire", src: "https://www.youtube.com/embed/HhesaQXLuRY" }
      ]
    }
  }
};

const moviesData = {
  "Il buco: Capitolo 2": {
    img: "https://i.imgur.com/dezd4Vb.jpeg",
    src: "https://drive.google.com/file/d/1WVhXNNE26fbIbweJ-Zk5RzBIQSSolr2t/preview"
  },
  "Harry Potter e i doni della morte: I parte": {
    img: "https://i.imgur.com/4q0eRaQ.jpeg",
    src: "https://drive.google.com/file/d/1PnyQvFvB1hd92DJYQQRSgElZc1BT77Li/preview"
  },
  "Harry Potter e la pietra filosofale": {
    img: "https://i.imgur.com/JzHMob8.jpeg",
    src: "https://drive.google.com/file/d/1PfbqvyS4U1yZHlQOIxjOmXfIpXqCg9OT/preview"
  },
  "Harry Potter e i doni della morte: II parte": {
    img: "https://i.imgur.com/YXzLUcr.jpeg",
    src: "https://drive.google.com/file/d/1PhofR-pNNOsI4pfu1bD2ItCqyRvR72Wm/preview"
  },
"Harry Potter e la camera dei segreti": {
    img: "https://i.imgur.com/DuO9Dy4.jpeg",
    src: "https://drive.google.com/file/d/1PeJ491bO1cDFfITDybQTNp7bE6lnb_E-/preview"
  },
"Harry Potter e il prigioniero di Azkaban": {
    img: "https://i.imgur.com/vKcT7Gr.jpeg",
    src: "https://drive.google.com/file/d/1PahBD4wsw1OPt0M1NXoH7LdOqngM2cyw/preview"
  },
"Harry Potter e il calice di fuoco": {
    img: "https://i.imgur.com/uhptsHY.jpeg",
    src: "https://drive.google.com/file/d/1VBaiSZAf8r_r67gXGJnaW-yjFDJBgdQ-/preview"
  },
"Harry Potter e l'Ordine della Fenice": {
    img: "https://i.imgur.com/4sNJs7t.jpeg",
    src: "https://drive.google.com/file/d/1kg0hZcXMIpd9sgmme_CsE4AUbuivNxiF/preview"
  },
"Harry Potter e il principe mezzosangue": {
    img: "https://i.imgur.com/nxUCLC7.jpeg",
    src: "https://drive.google.com/file/d/1OOteYUd-rrA8fnTEGT9jWLwc_WbmCETo/preview"
  },
  "Tartarughe all'infinito": {
    img: "https://i.imgur.com/zX8bM8z.jpeg",
    src: "https://drive.google.com/file/d/1a-AsEuFkWxaBzE3N5-4zjvc6AKvEJcuB/preview"
  },
  "Ziam": {
    img: "https://i.imgur.com/7yvRcln.jpeg",
    src: "https://drive.google.com/file/d/1QcbRXPjnRsIrhCDWRbtz9QnRnAi9ZcLA/preview"
  }
};

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (users[user] && users[user] === pass) {
    currentUser = user;
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    loadHome();
  } else {
    document.getElementById("login-error").innerText = "Credenziali errate";
  }
}

function logout() {
  currentUser = null;
  location.reload();
}

function loadHome() {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  const seriesDiv = document.getElementById("series-list-div");
  seriesDiv.innerHTML = "";
  let seriesCount = 0;
  for (const serie in seriesData) {
    if (seriesCount >= 24) break;
    const card = createCard(serie, seriesData[serie].img, () => showSeasons(serie));
    seriesDiv.appendChild(card);
    seriesCount++;
  }

  const moviesDiv = document.getElementById("movies-list-div");
  moviesDiv.innerHTML = "";
  let moviesCount = 0;
  for (const movie in moviesData) {
    if (moviesCount >= 24) break;
    const card = createCard(movie, moviesData[movie].img, () => showMovie(movie));
    moviesDiv.appendChild(card);
    moviesCount++;
  }
}

function createCard(title, imgUrl, onClick) {
  const div = document.createElement("div");
  div.className = "card";
  div.onclick = onClick;

  const img = document.createElement("img");
  img.src = imgUrl;
  const titleDiv = document.createElement("div");
  titleDiv.className = "card-title";
  titleDiv.textContent = title;

  div.appendChild(img);
  div.appendChild(titleDiv);
  return div;
}

function showAll(type) {
  hideAllViews();
  document.getElementById("home-view").style.display = "block";

  const container = type === "series" ? document.getElementById("series-list-div") : document.getElementById("movies-list-div");
  const data = type === "series" ? seriesData : moviesData;

  container.innerHTML = "";
  for (const key in data) {
    const card = createCard(key, data[key].img, () => {
      type === "series" ? showSeasons(key) : showMovie(key);
    });
    container.appendChild(card);
  }
}

function showSeasons(seriesName) {
  hideAllViews();
  document.getElementById("season-title").textContent = seriesName;
  const seasonsUl = document.getElementById("seasons-ul");
  seasonsUl.innerHTML = "";

  const seasons = seriesData[seriesName].seasons;
  for (const seasonNum in seasons) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Stagione ${seasonNum}`;
    btn.onclick = () => showEpisodes(seriesName, seasonNum);
    li.appendChild(btn);
    seasonsUl.appendChild(li);
  }

  document.getElementById("season-list").style.display = "block";
}

function showEpisodes(seriesName, seasonNum) {
  hideAllViews();
  document.getElementById("episode-title").textContent = `${seriesName} - Stagione ${seasonNum}`;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  const episodes = seriesData[seriesName].seasons[seasonNum];
  for (const ep of episodes) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.textContent = `Episodio ${ep.episode}: ${ep.title}`;
    const iframe = document.createElement("iframe");
    iframe.src = ep.src;
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";
    div.appendChild(h3);
    div.appendChild(iframe);
    container.appendChild(div);
  }

  document.getElementById("episode-list").style.display = "block";
}

function showMovie(movieName) {
  hideAllViews();
  document.getElementById("episode-title").textContent = movieName;
  const container = document.getElementById("episodes-container");
  container.innerHTML = "";

  const movie = moviesData[movieName];
  const iframe = document.createElement("iframe");
  iframe.src = movie.src;
  iframe.allowFullscreen = true;
  iframe.frameBorder = "0";
  container.appendChild(iframe);

  document.getElementById("episode-list").style.display = "block";
}

function hideAllViews() {
  document.querySelectorAll(".view").forEach(v => v.style.display = "none");
}

function backToHome() {
  loadHome();
}

function filterContent() {
  const query = document.getElementById("search-bar").value.trim().toLowerCase();
  if (!query) return loadHome();

  hideAllViews();
  const ul = document.getElementById("search-results-ul");
  ul.innerHTML = "";

  for (const serie in seriesData) {
    if (serie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Serie TV: ${serie}`;
      btn.onclick = () => showSeasons(serie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  for (const movie in moviesData) {
    if (movie.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = `Film: ${movie}`;
      btn.onclick = () => showMovie(movie);
      li.appendChild(btn);
      ul.appendChild(li);
    }
  }

  if (ul.children.length === 0) {
    ul.innerHTML = "<li>Nessun risultato trovato.</li>";
  }

  document.getElementById("search-results").style.display = "block";
}
