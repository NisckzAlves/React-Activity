import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contador from './Aula01/Contador';
import Letreiro from './Aula01/Letreiro';
import DataTime from './Aula01/DataTime';
import Toolbar from './Aula03/Exemplo1';
import Gallery from './Aula03/Exemplo2';
import Count from './Aula03/Exemplo3';
import Form from './Aula03/Exemplo4';
import MovingDot from './Aula03/Exemplo5';
import Form2 from './Aula03/Exemplo6';
import Form3 from './Aula03/Exemplo7';
import List from './Aula03/Exemplo8';
import List2 from './Aula03/Exemplo9';
import ShapeEditor from './Aula03/Exemplo10';
import CounterList from './Aula03/Exemplo11';
import List3 from './Aula03/Exemplo12';
import List4 from './Aula03/Exemplo13';
import  BucketList from './Aula03/Exemplo14';
import {Menu} from './Menu';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/datatime" element={<DataTime/>} />
      <Route path="/letreiro" element={<Letreiro/>} />
      <Route path="/contador" element={<Contador/>} />
      <Route path="/toolbar" element={<Toolbar/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/count" element={<Count/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/movingDot" element={<MovingDot/>} />
      <Route path="/form2" element={<Form2/>} />
      <Route path="/form3" element={<Form3/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/list2" element={<List2/>} />
      <Route path="/shapeEditor" element={<ShapeEditor/>} />
      <Route path="/counterList" element={<CounterList/>} />
      <Route path="/list3" element={<List3/>} />
      <Route path="/list4" element={<List4/>} />
      <Route path="/bucketList" element={<BucketList/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
