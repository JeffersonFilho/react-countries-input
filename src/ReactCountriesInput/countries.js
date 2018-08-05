const countries = [
  {
    flag: 'https://restcountries.eu/data/afg.svg',
    name: 'Afghanistan',
    callingCodes: '93'
  },
  {
    flag: 'https://restcountries.eu/data/ala.svg',
    name: 'Åland Islands',
    callingCodes: '358'
  },
  {
    flag: 'https://restcountries.eu/data/alb.svg',
    name: 'Albania',
    callingCodes: '355'
  },
  {
    flag: 'https://restcountries.eu/data/dza.svg',
    name: 'Algeria',
    callingCodes: '213'
  },
  {
    flag: 'https://restcountries.eu/data/asm.svg',
    name: 'American Samoa',
    callingCodes: '1684'
  },
  {
    flag: 'https://restcountries.eu/data/and.svg',
    name: 'Andorra',
    callingCodes: '376'
  },
  {
    flag: 'https://restcountries.eu/data/ago.svg',
    name: 'Angola',
    callingCodes: '244'
  },
  {
    flag: 'https://restcountries.eu/data/aia.svg',
    name: 'Anguilla',
    callingCodes: '1264'
  },
  {
    flag: 'https://restcountries.eu/data/ata.svg',
    name: 'Antarctica',
    callingCodes: '672'
  },
  {
    flag: 'https://restcountries.eu/data/atg.svg',
    name: 'Antigua and Barbuda',
    callingCodes: '1268'
  },
  {
    flag: 'https://restcountries.eu/data/arg.svg',
    name: 'Argentina',
    callingCodes: '54'
  },
  {
    flag: 'https://restcountries.eu/data/arm.svg',
    name: 'Armenia',
    callingCodes: '374'
  },
  {
    flag: 'https://restcountries.eu/data/abw.svg',
    name: 'Aruba',
    callingCodes: '297'
  },
  {
    flag: 'https://restcountries.eu/data/aus.svg',
    name: 'Australia',
    callingCodes: '61'
  },
  {
    flag: 'https://restcountries.eu/data/aut.svg',
    name: 'Austria',
    callingCodes: '43'
  },
  {
    flag: 'https://restcountries.eu/data/aze.svg',
    name: 'Azerbaijan',
    callingCodes: '994'
  },
  {
    flag: 'https://restcountries.eu/data/bhs.svg',
    name: 'Bahamas',
    callingCodes: '1242'
  },
  {
    flag: 'https://restcountries.eu/data/bhr.svg',
    name: 'Bahrain',
    callingCodes: '973'
  },
  {
    flag: 'https://restcountries.eu/data/bgd.svg',
    name: 'Bangladesh',
    callingCodes: '880'
  },
  {
    flag: 'https://restcountries.eu/data/brb.svg',
    name: 'Barbados',
    callingCodes: '1246'
  },
  {
    flag: 'https://restcountries.eu/data/blr.svg',
    name: 'Belarus',
    callingCodes: '375'
  },
  {
    flag: 'https://restcountries.eu/data/bel.svg',
    name: 'Belgium',
    callingCodes: '32'
  },
  {
    flag: 'https://restcountries.eu/data/blz.svg',
    name: 'Belize',
    callingCodes: '501'
  },
  {
    flag: 'https://restcountries.eu/data/ben.svg',
    name: 'Benin',
    callingCodes: '229'
  },
  {
    flag: 'https://restcountries.eu/data/bmu.svg',
    name: 'Bermuda',
    callingCodes: '1441'
  },
  {
    flag: 'https://restcountries.eu/data/btn.svg',
    name: 'Bhutan',
    callingCodes: '975'
  },
  {
    flag: 'https://restcountries.eu/data/bol.svg',
    name: 'Bolivia',
    callingCodes: '591'
  },
  {
    flag: 'https://restcountries.eu/data/bes.svg',
    name: 'Bonaire  ',
    callingCodes: '5997'
  },
  {
    flag: 'https://restcountries.eu/data/bih.svg',
    name: 'Bosnia and Herzegovina',
    callingCodes: '387'
  },
  {
    flag: 'https://restcountries.eu/data/bwa.svg',
    name: 'Botswana',
    callingCodes: '267'
  },
  {
    flag: 'https://restcountries.eu/data/bra.svg',
    name: 'Brazil',
    callingCodes: '55'
  },
  {
    flag: 'https://restcountries.eu/data/iot.svg',
    name: 'British Indian Ocean Territory',
    callingCodes: '246'
  },
  {
    flag: 'https://restcountries.eu/data/vgb.svg',
    name: 'Virgin Islands (British)',
    callingCodes: '1284'
  },
  {
    flag: 'https://restcountries.eu/data/vir.svg',
    name: 'Virgin Islands (U.S.)',
    callingCodes: '1 340'
  },
  {
    flag: 'https://restcountries.eu/data/brn.svg',
    name: 'Brunei Darussalam',
    callingCodes: '673'
  },
  {
    flag: 'https://restcountries.eu/data/bgr.svg',
    name: 'Bulgaria',
    callingCodes: '359'
  },
  {
    flag: 'https://restcountries.eu/data/bfa.svg',
    name: 'Burkina Faso',
    callingCodes: '226'
  },
  {
    flag: 'https://restcountries.eu/data/bdi.svg',
    name: 'Burundi',
    callingCodes: '257'
  },
  {
    flag: 'https://restcountries.eu/data/khm.svg',
    name: 'Cambodia',
    callingCodes: '855'
  },
  {
    flag: 'https://restcountries.eu/data/cmr.svg',
    name: 'Cameroon',
    callingCodes: '237'
  },
  {
    flag: 'https://restcountries.eu/data/can.svg',
    name: 'Canada',
    callingCodes: '1'
  },
  {
    flag: 'https://restcountries.eu/data/cpv.svg',
    name: 'Cabo Verde',
    callingCodes: '238'
  },
  {
    flag: 'https://restcountries.eu/data/cym.svg',
    name: 'Cayman Islands',
    callingCodes: '1345'
  },
  {
    flag: 'https://restcountries.eu/data/caf.svg',
    name: 'Central African Republic',
    callingCodes: '236'
  },
  {
    flag: 'https://restcountries.eu/data/tcd.svg',
    name: 'Chad',
    callingCodes: '235'
  },
  {
    flag: 'https://restcountries.eu/data/chl.svg',
    name: 'Chile',
    callingCodes: '56'
  },
  {
    flag: 'https://restcountries.eu/data/chn.svg',
    name: 'China',
    callingCodes: '86'
  },
  {
    flag: 'https://restcountries.eu/data/cxr.svg',
    name: 'Christmas Island',
    callingCodes: '61'
  },
  {
    flag: 'https://restcountries.eu/data/cck.svg',
    name: 'Cocos (Keeling) Islands',
    callingCodes: '61'
  },
  {
    flag: 'https://restcountries.eu/data/col.svg',
    name: 'Colombia',
    callingCodes: '57'
  },
  {
    flag: 'https://restcountries.eu/data/com.svg',
    name: 'Comoros',
    callingCodes: '269'
  },
  {
    flag: 'https://restcountries.eu/data/cog.svg',
    name: 'Congo',
    callingCodes: '242'
  },
  {
    flag: 'https://restcountries.eu/data/cod.svg',
    name: 'Congo (Democratic Republic of the)',
    callingCodes: '243'
  },
  {
    flag: 'https://restcountries.eu/data/cok.svg',
    name: 'Cook Islands',
    callingCodes: '682'
  },
  {
    flag: 'https://restcountries.eu/data/cri.svg',
    name: 'Costa Rica',
    callingCodes: '506'
  },
  {
    flag: 'https://restcountries.eu/data/hrv.svg',
    name: 'Croatia',
    callingCodes: '385'
  },
  {
    flag: 'https://restcountries.eu/data/cub.svg',
    name: 'Cuba',
    callingCodes: '53'
  },
  {
    flag: 'https://restcountries.eu/data/cuw.svg',
    name: 'Curaçao',
    callingCodes: '599'
  },
  {
    flag: 'https://restcountries.eu/data/cyp.svg',
    name: 'Cyprus',
    callingCodes: '357'
  },
  {
    flag: 'https://restcountries.eu/data/cze.svg',
    name: 'Czech Republic',
    callingCodes: '420'
  },
  {
    flag: 'https://restcountries.eu/data/dnk.svg',
    name: 'Denmark',
    callingCodes: '45'
  },
  {
    flag: 'https://restcountries.eu/data/dji.svg',
    name: 'Djibouti',
    callingCodes: '253'
  },
  {
    flag: 'https://restcountries.eu/data/dma.svg',
    name: 'Dominica',
    callingCodes: '1767'
  },
  {
    flag: 'https://restcountries.eu/data/dom.svg',
    name: 'Dominican Republic',
    callingCodes: '1809'
  },
  {
    flag: 'https://restcountries.eu/data/ecu.svg',
    name: 'Ecuador',
    callingCodes: '593'
  },
  {
    flag: 'https://restcountries.eu/data/egy.svg',
    name: 'Egypt',
    callingCodes: '20'
  },
  {
    flag: 'https://restcountries.eu/data/slv.svg',
    name: 'El Salvador',
    callingCodes: '503'
  },
  {
    flag: 'https://restcountries.eu/data/gnq.svg',
    name: 'Equatorial Guinea',
    callingCodes: '240'
  },
  {
    flag: 'https://restcountries.eu/data/eri.svg',
    name: 'Eritrea',
    callingCodes: '291'
  },
  {
    flag: 'https://restcountries.eu/data/est.svg',
    name: 'Estonia',
    callingCodes: '372'
  },
  {
    flag: 'https://restcountries.eu/data/eth.svg',
    name: 'Ethiopia',
    callingCodes: '251'
  },
  {
    flag: 'https://restcountries.eu/data/flk.svg',
    name: 'Falkland Islands (Malvinas)',
    callingCodes: '500'
  },
  {
    flag: 'https://restcountries.eu/data/fro.svg',
    name: 'Faroe Islands',
    callingCodes: '298'
  },
  {
    flag: 'https://restcountries.eu/data/fji.svg',
    name: 'Fiji',
    callingCodes: '679'
  },
  {
    flag: 'https://restcountries.eu/data/fin.svg',
    name: 'Finland',
    callingCodes: '358'
  },
  {
    flag: 'https://restcountries.eu/data/fra.svg',
    name: 'France',
    callingCodes: '33'
  },
  {
    flag: 'https://restcountries.eu/data/guf.svg',
    name: 'French Guiana',
    callingCodes: '594'
  },
  {
    flag: 'https://restcountries.eu/data/pyf.svg',
    name: 'French Polynesia',
    callingCodes: '689'
  },
  {
    flag: 'https://restcountries.eu/data/atf.svg',
    name: 'French Southern Territories',
    callingCodes: ''
  },
  {
    flag: 'https://restcountries.eu/data/gab.svg',
    name: 'Gabon',
    callingCodes: '241'
  },
  {
    flag: 'https://restcountries.eu/data/gmb.svg',
    name: 'Gambia',
    callingCodes: '220'
  },
  {
    flag: 'https://restcountries.eu/data/geo.svg',
    name: 'Georgia',
    callingCodes: '995'
  },
  {
    flag: 'https://restcountries.eu/data/deu.svg',
    name: 'Germany',
    callingCodes: '49'
  },
  {
    flag: 'https://restcountries.eu/data/gha.svg',
    name: 'Ghana',
    callingCodes: '233'
  },
  {
    flag: 'https://restcountries.eu/data/gib.svg',
    name: 'Gibraltar',
    callingCodes: '350'
  },
  {
    flag: 'https://restcountries.eu/data/grc.svg',
    name: 'Greece',
    callingCodes: '30'
  },
  {
    flag: 'https://restcountries.eu/data/grl.svg',
    name: 'Greenland',
    callingCodes: '299'
  },
  {
    flag: 'https://restcountries.eu/data/grd.svg',
    name: 'Grenada',
    callingCodes: '1473'
  },
  {
    flag: 'https://restcountries.eu/data/glp.svg',
    name: 'Guadeloupe',
    callingCodes: '590'
  },
  {
    flag: 'https://restcountries.eu/data/gum.svg',
    name: 'Guam',
    callingCodes: '1671'
  },
  {
    flag: 'https://restcountries.eu/data/gtm.svg',
    name: 'Guatemala',
    callingCodes: '502'
  },
  {
    flag: 'https://restcountries.eu/data/ggy.svg',
    name: 'Guernsey',
    callingCodes: '44'
  },
  {
    flag: 'https://restcountries.eu/data/gin.svg',
    name: 'Guinea',
    callingCodes: '224'
  },
  {
    flag: 'https://restcountries.eu/data/gnb.svg',
    name: 'Guinea-Bissau',
    callingCodes: '245'
  },
  {
    flag: 'https://restcountries.eu/data/guy.svg',
    name: 'Guyana',
    callingCodes: '592'
  },
  {
    flag: 'https://restcountries.eu/data/hti.svg',
    name: 'Haiti',
    callingCodes: '509'
  },
  {
    flag: 'https://restcountries.eu/data/vat.svg',
    name: 'Holy See',
    callingCodes: '379'
  },
  {
    flag: 'https://restcountries.eu/data/hnd.svg',
    name: 'Honduras',
    callingCodes: '504'
  },
  {
    flag: 'https://restcountries.eu/data/hkg.svg',
    name: 'Hong Kong',
    callingCodes: '852'
  },
  {
    flag: 'https://restcountries.eu/data/hun.svg',
    name: 'Hungary',
    callingCodes: '36'
  },
  {
    flag: 'https://restcountries.eu/data/isl.svg',
    name: 'Iceland',
    callingCodes: '354'
  },
  {
    flag: 'https://restcountries.eu/data/ind.svg',
    name: 'India',
    callingCodes: '91'
  },
  {
    flag: 'https://restcountries.eu/data/idn.svg',
    name: 'Indonesia',
    callingCodes: '62'
  },
  {
    flag: 'https://restcountries.eu/data/civ.svg',
    name: "Côte d'Ivoire",
    callingCodes: '225'
  },
  {
    flag: 'https://restcountries.eu/data/irn.svg',
    name: 'Iran',
    callingCodes: '98'
  },
  {
    flag: 'https://restcountries.eu/data/irq.svg',
    name: 'Iraq',
    callingCodes: '964'
  },
  {
    flag: 'https://restcountries.eu/data/irl.svg',
    name: 'Ireland',
    callingCodes: '353'
  },
  {
    flag: 'https://restcountries.eu/data/imn.svg',
    name: 'Isle of Man',
    callingCodes: '44'
  },
  {
    flag: 'https://restcountries.eu/data/isr.svg',
    name: 'Israel',
    callingCodes: '972'
  },
  {
    flag: 'https://restcountries.eu/data/ita.svg',
    name: 'Italy',
    callingCodes: '39'
  },
  {
    flag: 'https://restcountries.eu/data/jam.svg',
    name: 'Jamaica',
    callingCodes: '1876'
  },
  {
    flag: 'https://restcountries.eu/data/jpn.svg',
    name: 'Japan',
    callingCodes: '81'
  },
  {
    flag: 'https://restcountries.eu/data/jey.svg',
    name: 'Jersey',
    callingCodes: '44'
  },
  {
    flag: 'https://restcountries.eu/data/jor.svg',
    name: 'Jordan',
    callingCodes: '962'
  },
  {
    flag: 'https://restcountries.eu/data/kaz.svg',
    name: 'Kazakhstan',
    callingCodes: '76'
  },
  {
    flag: 'https://restcountries.eu/data/ken.svg',
    name: 'Kenya',
    callingCodes: '254'
  },
  {
    flag: 'https://restcountries.eu/data/kir.svg',
    name: 'Kiribati',
    callingCodes: '686'
  },
  {
    flag: 'https://restcountries.eu/data/kwt.svg',
    name: 'Kuwait',
    callingCodes: '965'
  },
  {
    flag: 'https://restcountries.eu/data/kgz.svg',
    name: 'Kyrgyzstan',
    callingCodes: '996'
  },
  {
    flag: 'https://restcountries.eu/data/lao.svg',
    name: 'Laos',
    callingCodes: '856'
  },
  {
    flag: 'https://restcountries.eu/data/lva.svg',
    name: 'Latvia',
    callingCodes: '371'
  },
  {
    flag: 'https://restcountries.eu/data/lbn.svg',
    name: 'Lebanon',
    callingCodes: '961'
  },
  {
    flag: 'https://restcountries.eu/data/lso.svg',
    name: 'Lesotho',
    callingCodes: '266'
  },
  {
    flag: 'https://restcountries.eu/data/lbr.svg',
    name: 'Liberia',
    callingCodes: '231'
  },
  {
    flag: 'https://restcountries.eu/data/lby.svg',
    name: 'Libya',
    callingCodes: '218'
  },
  {
    flag: 'https://restcountries.eu/data/lie.svg',
    name: 'Liechtenstein',
    callingCodes: '423'
  },
  {
    flag: 'https://restcountries.eu/data/ltu.svg',
    name: 'Lithuania',
    callingCodes: '370'
  },
  {
    flag: 'https://restcountries.eu/data/lux.svg',
    name: 'Luxembourg',
    callingCodes: '352'
  },
  {
    flag: 'https://restcountries.eu/data/mac.svg',
    name: 'Macao',
    callingCodes: '853'
  },
  {
    flag: 'https://restcountries.eu/data/mkd.svg',
    name: 'Macedonia',
    callingCodes: '389'
  },
  {
    flag: 'https://restcountries.eu/data/mdg.svg',
    name: 'Madagascar',
    callingCodes: '261'
  },
  {
    flag: 'https://restcountries.eu/data/mwi.svg',
    name: 'Malawi',
    callingCodes: '265'
  },
  {
    flag: 'https://restcountries.eu/data/mys.svg',
    name: 'Malaysia',
    callingCodes: '60'
  },
  {
    flag: 'https://restcountries.eu/data/mdv.svg',
    name: 'Maldives',
    callingCodes: '960'
  },
  {
    flag: 'https://restcountries.eu/data/mli.svg',
    name: 'Mali',
    callingCodes: '223'
  },
  {
    flag: 'https://restcountries.eu/data/mlt.svg',
    name: 'Malta',
    callingCodes: '356'
  },
  {
    flag: 'https://restcountries.eu/data/mhl.svg',
    name: 'Marshall Islands',
    callingCodes: '692'
  },
  {
    flag: 'https://restcountries.eu/data/mtq.svg',
    name: 'Martinique',
    callingCodes: '596'
  },
  {
    flag: 'https://restcountries.eu/data/mrt.svg',
    name: 'Mauritania',
    callingCodes: '222'
  },
  {
    flag: 'https://restcountries.eu/data/mus.svg',
    name: 'Mauritius',
    callingCodes: '230'
  },
  {
    flag: 'https://restcountries.eu/data/myt.svg',
    name: 'Mayotte',
    callingCodes: '262'
  },
  {
    flag: 'https://restcountries.eu/data/mex.svg',
    name: 'Mexico',
    callingCodes: '52'
  },
  {
    flag: 'https://restcountries.eu/data/fsm.svg',
    name: 'Micronesia (Federated States of)',
    callingCodes: '691'
  },
  {
    flag: 'https://restcountries.eu/data/mda.svg',
    name: 'Moldova',
    callingCodes: '373'
  },
  {
    flag: 'https://restcountries.eu/data/mco.svg',
    name: 'Monaco',
    callingCodes: '377'
  },
  {
    flag: 'https://restcountries.eu/data/mng.svg',
    name: 'Mongolia',
    callingCodes: '976'
  },
  {
    flag: 'https://restcountries.eu/data/mne.svg',
    name: 'Montenegro',
    callingCodes: '382'
  },
  {
    flag: 'https://restcountries.eu/data/msr.svg',
    name: 'Montserrat',
    callingCodes: '1664'
  },
  {
    flag: 'https://restcountries.eu/data/mar.svg',
    name: 'Morocco',
    callingCodes: '212'
  },
  {
    flag: 'https://restcountries.eu/data/moz.svg',
    name: 'Mozambique',
    callingCodes: '258'
  },
  {
    flag: 'https://restcountries.eu/data/mmr.svg',
    name: 'Myanmar',
    callingCodes: '95'
  },
  {
    flag: 'https://restcountries.eu/data/nam.svg',
    name: 'Namibia',
    callingCodes: '264'
  },
  {
    flag: 'https://restcountries.eu/data/nru.svg',
    name: 'Nauru',
    callingCodes: '674'
  },
  {
    flag: 'https://restcountries.eu/data/npl.svg',
    name: 'Nepal',
    callingCodes: '977'
  },
  {
    flag: 'https://restcountries.eu/data/nld.svg',
    name: 'Netherlands',
    callingCodes: '31'
  },
  {
    flag: 'https://restcountries.eu/data/ncl.svg',
    name: 'New Caledonia',
    callingCodes: '687'
  },
  {
    flag: 'https://restcountries.eu/data/nzl.svg',
    name: 'New Zealand',
    callingCodes: '64'
  },
  {
    flag: 'https://restcountries.eu/data/nic.svg',
    name: 'Nicaragua',
    callingCodes: '505'
  },
  {
    flag: 'https://restcountries.eu/data/ner.svg',
    name: 'Niger',
    callingCodes: '227'
  },
  {
    flag: 'https://restcountries.eu/data/nga.svg',
    name: 'Nigeria',
    callingCodes: '234'
  },
  {
    flag: 'https://restcountries.eu/data/niu.svg',
    name: 'Niue',
    callingCodes: '683'
  },
  {
    flag: 'https://restcountries.eu/data/nfk.svg',
    name: 'Norfolk Island',
    callingCodes: '672'
  },
  {
    flag: 'https://restcountries.eu/data/prk.svg',
    name: 'North Korean',
    callingCodes: '850'
  },
  {
    flag: 'https://restcountries.eu/data/mnp.svg',
    name: 'Northern Mariana Islands',
    callingCodes: '1670'
  },
  {
    flag: 'https://restcountries.eu/data/nor.svg',
    name: 'Norway',
    callingCodes: '47'
  },
  {
    flag: 'https://restcountries.eu/data/omn.svg',
    name: 'Oman',
    callingCodes: '968'
  },
  {
    flag: 'https://restcountries.eu/data/pak.svg',
    name: 'Pakistan',
    callingCodes: '92'
  },
  {
    flag: 'https://restcountries.eu/data/plw.svg',
    name: 'Palau',
    callingCodes: '680'
  },
  {
    flag: 'https://restcountries.eu/data/pse.svg',
    name: 'Palestine',
    callingCodes: '970'
  },
  {
    flag: 'https://restcountries.eu/data/pan.svg',
    name: 'Panama',
    callingCodes: '507'
  },
  {
    flag: 'https://restcountries.eu/data/png.svg',
    name: 'Papua New Guinea',
    callingCodes: '675'
  },
  {
    flag: 'https://restcountries.eu/data/pry.svg',
    name: 'Paraguay',
    callingCodes: '595'
  },
  {
    flag: 'https://restcountries.eu/data/per.svg',
    name: 'Peru',
    callingCodes: '51'
  },
  {
    flag: 'https://restcountries.eu/data/phl.svg',
    name: 'Philippines',
    callingCodes: '63'
  },
  {
    flag: 'https://restcountries.eu/data/pcn.svg',
    name: 'Pitcairn',
    callingCodes: '64'
  },
  {
    flag: 'https://restcountries.eu/data/pol.svg',
    name: 'Poland',
    callingCodes: '48'
  },
  {
    flag: 'https://restcountries.eu/data/prt.svg',
    name: 'Portugal',
    callingCodes: '351'
  },
  {
    flag: 'https://restcountries.eu/data/pri.svg',
    name: 'Puerto Rico',
    callingCodes: '1787'
  },
  {
    flag: 'https://restcountries.eu/data/qat.svg',
    name: 'Qatar',
    callingCodes: '974'
  },
  {
    flag: 'https://restcountries.eu/data/kos.svg',
    name: 'Republic of Kosovo',
    callingCodes: '383'
  },
  {
    flag: 'https://restcountries.eu/data/reu.svg',
    name: 'Réunion',
    callingCodes: '262'
  },
  {
    flag: 'https://restcountries.eu/data/rou.svg',
    name: 'Romania',
    callingCodes: '40'
  },
  {
    flag: 'https://restcountries.eu/data/rus.svg',
    name: 'Russian Federation',
    callingCodes: '7'
  },
  {
    flag: 'https://restcountries.eu/data/rwa.svg',
    name: 'Rwanda',
    callingCodes: '250'
  },
  {
    flag: 'https://restcountries.eu/data/blm.svg',
    name: 'Saint Barthélemy',
    callingCodes: '590'
  },
  {
    flag: 'https://restcountries.eu/data/shn.svg',
    name: 'Saint Helena',
    callingCodes: '290'
  },
  {
    flag: 'https://restcountries.eu/data/kna.svg',
    name: 'Saint Kitts and Nevis',
    callingCodes: '1869'
  },
  {
    flag: 'https://restcountries.eu/data/lca.svg',
    name: 'Saint Lucia',
    callingCodes: '1758'
  },
  {
    flag: 'https://restcountries.eu/data/maf.svg',
    name: 'Saint Martin',
    callingCodes: '590'
  },
  {
    flag: 'https://restcountries.eu/data/spm.svg',
    name: 'Saint Pierre and Miquelon',
    callingCodes: '508'
  },
  {
    flag: 'https://restcountries.eu/data/vct.svg',
    name: 'Saint Vincent and the Grenadines',
    callingCodes: '1784'
  },
  {
    flag: 'https://restcountries.eu/data/wsm.svg',
    name: 'Samoa',
    callingCodes: '685'
  },
  {
    flag: 'https://restcountries.eu/data/smr.svg',
    name: 'San Marino',
    callingCodes: '378'
  },
  {
    flag: 'https://restcountries.eu/data/stp.svg',
    name: 'Sao Tome and Principe',
    callingCodes: '239'
  },
  {
    flag: 'https://restcountries.eu/data/sau.svg',
    name: 'Saudi Arabia',
    callingCodes: '966'
  },
  {
    flag: 'https://restcountries.eu/data/sen.svg',
    name: 'Senegal',
    callingCodes: '221'
  },
  {
    flag: 'https://restcountries.eu/data/srb.svg',
    name: 'Serbia',
    callingCodes: '381'
  },
  {
    flag: 'https://restcountries.eu/data/syc.svg',
    name: 'Seychelles',
    callingCodes: '248'
  },
  {
    flag: 'https://restcountries.eu/data/sle.svg',
    name: 'Sierra Leone',
    callingCodes: '232'
  },
  {
    flag: 'https://restcountries.eu/data/sgp.svg',
    name: 'Singapore',
    callingCodes: '65'
  },
  {
    flag: 'https://restcountries.eu/data/sxm.svg',
    name: 'Sint Maarten',
    callingCodes: '1721'
  },
  {
    flag: 'https://restcountries.eu/data/svk.svg',
    name: 'Slovakia',
    callingCodes: '421'
  },
  {
    flag: 'https://restcountries.eu/data/svn.svg',
    name: 'Slovenia',
    callingCodes: '386'
  },
  {
    flag: 'https://restcountries.eu/data/slb.svg',
    name: 'Solomon Islands',
    callingCodes: '677'
  },
  {
    flag: 'https://restcountries.eu/data/som.svg',
    name: 'Somalia',
    callingCodes: '252'
  },
  {
    flag: 'https://restcountries.eu/data/zaf.svg',
    name: 'South Africa',
    callingCodes: '27'
  },
  {
    flag: 'https://restcountries.eu/data/sgs.svg',
    name: 'South Georgia and the South Sandwich Islands',
    callingCodes: '500'
  },
  {
    flag: 'https://restcountries.eu/data/kor.svg',
    name: 'Korea',
    callingCodes: '82'
  },
  {
    flag: 'https://restcountries.eu/data/ssd.svg',
    name: 'South Sudan',
    callingCodes: '211'
  },
  {
    flag: 'https://restcountries.eu/data/esp.svg',
    name: 'Spain',
    callingCodes: '34'
  },
  {
    flag: 'https://restcountries.eu/data/lka.svg',
    name: 'Sri Lanka',
    callingCodes: '94'
  },
  {
    flag: 'https://restcountries.eu/data/sdn.svg',
    name: 'Sudan',
    callingCodes: '249'
  },
  {
    flag: 'https://restcountries.eu/data/sur.svg',
    name: 'Suriname',
    callingCodes: '597'
  },
  {
    flag: 'https://restcountries.eu/data/sjm.svg',
    name: 'Svalbard and Jan Mayen',
    callingCodes: '4779'
  },
  {
    flag: 'https://restcountries.eu/data/swz.svg',
    name: 'Swaziland',
    callingCodes: '268'
  },
  {
    flag: 'https://restcountries.eu/data/swe.svg',
    name: 'Sweden',
    callingCodes: '46'
  },
  {
    flag: 'https://restcountries.eu/data/che.svg',
    name: 'Switzerland',
    callingCodes: '41'
  },
  {
    flag: 'https://restcountries.eu/data/syr.svg',
    name: 'Syrian Arab Republic',
    callingCodes: '963'
  },
  {
    flag: 'https://restcountries.eu/data/twn.svg',
    name: 'Taiwan',
    callingCodes: '886'
  },
  {
    flag: 'https://restcountries.eu/data/tjk.svg',
    name: 'Tajikistan',
    callingCodes: '992'
  },
  {
    flag: 'https://restcountries.eu/data/tza.svg',
    name: 'Tanzania',
    callingCodes: '255'
  },
  {
    flag: 'https://restcountries.eu/data/tha.svg',
    name: 'Thailand',
    callingCodes: '66'
  },
  {
    flag: 'https://restcountries.eu/data/tls.svg',
    name: 'Timor-Leste',
    callingCodes: '670'
  },
  {
    flag: 'https://restcountries.eu/data/tgo.svg',
    name: 'Togo',
    callingCodes: '228'
  },
  {
    flag: 'https://restcountries.eu/data/tkl.svg',
    name: 'Tokelau',
    callingCodes: '690'
  },
  {
    flag: 'https://restcountries.eu/data/ton.svg',
    name: 'Tonga',
    callingCodes: '676'
  },
  {
    flag: 'https://restcountries.eu/data/tto.svg',
    name: 'Trinidad and Tobago',
    callingCodes: '1868'
  },
  {
    flag: 'https://restcountries.eu/data/tun.svg',
    name: 'Tunisia',
    callingCodes: '216'
  },
  {
    flag: 'https://restcountries.eu/data/tur.svg',
    name: 'Turkey',
    callingCodes: '90'
  },
  {
    flag: 'https://restcountries.eu/data/tkm.svg',
    name: 'Turkmenistan',
    callingCodes: '993'
  },
  {
    flag: 'https://restcountries.eu/data/tca.svg',
    name: 'Turks and Caicos Islands',
    callingCodes: '1649'
  },
  {
    flag: 'https://restcountries.eu/data/tuv.svg',
    name: 'Tuvalu',
    callingCodes: '688'
  },
  {
    flag: 'https://restcountries.eu/data/uga.svg',
    name: 'Uganda',
    callingCodes: '256'
  },
  {
    flag: 'https://restcountries.eu/data/ukr.svg',
    name: 'Ukraine',
    callingCodes: '380'
  },
  {
    flag: 'https://restcountries.eu/data/are.svg',
    name: 'United Arab Emirates',
    callingCodes: '971'
  },
  {
    flag: 'https://restcountries.eu/data/gbr.svg',
    name: 'United Kingdom',
    callingCodes: '44'
  },
  {
    flag: 'https://restcountries.eu/data/usa.svg',
    name: 'United States',
    callingCodes: '1'
  },
  {
    flag: 'https://restcountries.eu/data/ury.svg',
    name: 'Uruguay',
    callingCodes: '598'
  },
  {
    flag: 'https://restcountries.eu/data/uzb.svg',
    name: 'Uzbekistan',
    callingCodes: '998'
  },
  {
    flag: 'https://restcountries.eu/data/vut.svg',
    name: 'Vanuatu',
    callingCodes: '678'
  },
  {
    flag: 'https://restcountries.eu/data/ven.svg',
    name: 'Venezuela',
    callingCodes: '58'
  },
  {
    flag: 'https://restcountries.eu/data/vnm.svg',
    name: 'Viet Nam',
    callingCodes: '84'
  },
  {
    flag: 'https://restcountries.eu/data/wlf.svg',
    name: 'Wallis and Futuna',
    callingCodes: '681'
  },
  {
    flag: 'https://restcountries.eu/data/esh.svg',
    name: 'Western Sahara',
    callingCodes: '212'
  },
  {
    flag: 'https://restcountries.eu/data/yem.svg',
    name: 'Yemen',
    callingCodes: '967'
  },
  {
    flag: 'https://restcountries.eu/data/zmb.svg',
    name: 'Zambia',
    callingCodes: '260'
  },
  {
    flag: 'https://restcountries.eu/data/zwe.svg',
    name: 'Zimbabwe',
    callingCodes: '263'
  }
]

export default countries
