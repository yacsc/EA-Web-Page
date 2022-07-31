import React from 'react';
import { Pivot, PivotItem } from '@fluentui/react';
import './App.css';
import { Inicio } from './components/InicioComponent';


export const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
      <Pivot aria-label='top-menu'>
        <PivotItem
          headerText='Inicio'
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'Inicio title'
          }}>
            <Inicio></Inicio>
        </PivotItem>
        <PivotItem headerText='Quiénes somos'>
          <p>Renderizando quiénes somos</p>
        </PivotItem>
        <PivotItem headerText='Nuestros proyectos'>
          <p>Renderizando nuestros proyectos</p>
        </PivotItem>
        <PivotItem headerText='Tienda'>
          <p>Renderizando tienda</p>
        </PivotItem>
        <PivotItem headerText='Portafolio'>
          <p>Renderizando portafolio</p>
        </PivotItem>
        <PivotItem headerText='Contacto'>
          <p>Renderizando Contacto</p>
        </PivotItem>
      </Pivot>
    </div>
    
  );
};
