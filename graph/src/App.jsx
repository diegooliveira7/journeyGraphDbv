import { Chart } from "react-google-charts";
import React from "react";

const optionChart = {//Configuração das legendas
  legend: {
    position: "none"//Desativar a informação da coluna
  },
};

const styleDiv = {
  'box-shadow': '3px 3px 3px 3px rgba(0, 0, 0, 0.3)',
  'background-color': 'blue'
};

const App = () => {

  const data = [
    ["Element", "Pontos", { role: "style" }],
    ["Arqueiras", 8.94, "#ac9b84"],
    ["Atalaia", 10.49, "#ac9b84"],
    ["Cavaleiros", 19.3, "#ac9b84"],
    ["Guarita", 19.3, "#ac9b84"],
    ["Sentinela", 19.3, "#ac9b84"],
    ["Vedeta", 21.45, "#ac9b84"],
  ];

  return(
    <>
      <div style={styleDiv}>
      <Chart
        chartType="ColumnChart"
        data= {data}
        width="100%"
        height="400px"
        legendToggle
        options={optionChart}
      />
      </div>
    </>
  );
};

export default App;