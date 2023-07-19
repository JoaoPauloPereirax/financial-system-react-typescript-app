import {useState} from 'react';
import * as C from './App.styles';

import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import {getCurrentMonth} from './helpers/dataFilter';


function App() {
  const [list,setList]=useState(items);
  /*
  Neste caso não precisamos tipar o state que ficaria assim >>
    const [list,setList]=useState<Item[]>(items);
*/
const [currentMonth, setCurrentMonth] = useState('');
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
          {/*Área de insformação */}
          {/*Área de inserção */}
          {/*Tabela de itens*/}
      </C.Body>
    </C.Container>
  );
}

export default App;
