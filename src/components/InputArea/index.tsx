import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { useState } from 'react';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
  const [dataArea, setDataArea] = useState('');
  const [categoryArea, setCategoryArea] = useState('');
  const [titleArea, setTitlearea] = useState('');
  const [valueArea, setValuearea] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddNew = () => {
    let newItem: Item = {
      date: new Date(dataArea),
      category: categoryArea,
      title: titleArea,
      value: valueArea
    };
    onAdd(newItem);
  };

  return (
    <C.Container> 
      <div className="area">
        <p>Data</p>
        <input 
          type="date" 
          value={dataArea}
          onChange={event => setDataArea(event.target.value)}
        />
      </div>

      <div className="area">
        <p>Categoria</p>
        <select value={categoryArea} onChange={e => setCategoryArea(e.target.value)}>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>{categories[key].title}</option>
          ))}
        </select>
      </div>

      <div className="area input">
        <p>Título</p>
        <input 
          type="text" 
          value={titleArea}
          onChange={event => setTitlearea(event.target.value)}
        />
      </div>

      <div className="area">
        <p>Valor</p>
        <input 
          type="number" 
          value={valueArea}
          onChange={event => setValuearea(parseFloat(event.target.value))}
        />
      </div>

      <div className="area">
        <button onClick={handleAddNew}>Adicionar</button>
      </div>
    </C.Container>
  );
}