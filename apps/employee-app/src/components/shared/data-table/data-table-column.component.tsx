import React, { Component }  from "react";
import { Column } from 'primereact/column';

// TODO: Search why this code isnt working :D
export const DataTableColumnsComponent = (columns) => {
  console.log('addsasd')
  const columnsComponents = columns.map((v) => {
    return <Column style={{width: '250px'}} key={v.field+'key'} field={v.field} header={v.header} body={v.format} />
  });
  return columnsComponents;
};
