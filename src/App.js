import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
const items = [
  '@wealixss',
  '@eto_aliona',
  '@meow_sofi',
  '@oreshek_art',
  '@vo1tor',
  '@Mi1ker',
  '@Ne2PY',
  '@NikomuNeSkaju',
  '@anvoily',
  '@shubinarzhachnaya',
  '@gorobca',
  '@katezu29',
  '@sofya_bel',
  '@MentaL08',
  '@n31r0t0x1n',
  '@dashaskan',
  '@Xella159',
  '@lerylis',
  '@artinmartine',
  '@kkkeeeshaaa',
  '@Vladsssi',
  '@IHNfaml',
  '@puffustik7',
  '@mashka_eremina',
  '@korabl1na',
  '@vs_mary',
  '@Ksenik_Gol',
  '@lizabravo10',
  '@kukuruzinayana',
  '@lissez_s',
  '@HoityToit',
  '@darraa',
  '@utenok56',
  '@dima5_zero',
  '@darinasss24',
  '@rosanovaka',
  '@nastya_shisha',
  '@vill0chka',
  '@tysha_sys',
  '@pikasha_s',
  '@alex_shatskiy',
  '@alexseele',
  '@svmillive',
  '@Mussopickle',
  '@saniiyok',
  '@DivineBeaver',
  '@mariaanohinaa',
  '@siimonnqq',
  '@tatarstanvibe',
  '@prosto_kvashka',
  '@Sashakgnv',
  '@anstdkhnaa',
  '@rinabray',
  '@alexaf29',
  '@taofal',
  '@sashute',
  '@anastaishha27',
  '@yasyavishnya',
  '@sepperent',
  '@VIKTORIIAFED',
  '@marquze',
  '@kossssenko',
  '@tvoya_gitara',
  '@mariavngr',
  '@joestarich',
  '@otfct',
  '@ownerbrob',
  '@Aszuva',
  '@anglnik',
  '@vurdalak354',
  '@cherumia',
  '@trappanborn',
  '@Oleegatorr',
  '@Mio171',
  '@caxapo4ek',
  '@varrrina',
  '@le_rororo',
  '@aleviika',
  '@a_crook',
  '@D_u_d_d_a',
  '@jolfredteleg',
  '@katerina_fun_8',
  '@helya_wise',
  '@mhde_mmm',
  '@manowik',
  '@vikossskokos',
  '@mwwaks',
  '@parkmvch',
  '@Toriyaf',
  '@liquidatorrrr',
  '@kpchpchch',
  '@G1eb_Bus',
  '@cereal_killer3450d',
  '@yaaasssya',
  '@ksssushi',
  '@supoly_arina',
  '@tell_mdd',
  '@directorvish',
  '@MrOrangeFox'
];


  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setSelectedItem(items[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="content-box">
          {selectedItem && <p className="text">{selectedItem}</p>}
          <button onClick={handleClick}>Выбрать счастливчика!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
