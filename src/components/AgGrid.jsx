import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

export const AgGrid = () => {
  ModuleRegistry.registerModules([AllCommunityModule]);
  
  const [rowData, setRowData] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      dob: new Date("1980-12-01T00:00"),
      identifier: "1111567",
    },
  ]);
  const [colDefs, setColDefs] = useState([
    {
      field: "firstName",
      editable: true,
      flex:1
    },
    { field: "lastName", editable: true, flex:1 },
    { field: "dob", editable: true, flex:1 },
    { field: "identifier", editable: true, flex:1 },
  ]);
  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: false,
    suppressRowClickSelection: true,
  };

  const capturePaste = async (e) => {
    const { key, ctrlKey } = e;
    if (key.toLowerCase() == "v" && ctrlKey == true) {
      e.preventDefault();
      e.stopPropagation();
      const rows = await navigator.clipboard.readText().then((clipText) => {
        return clipText.split("\r\n");
      });
      setRowData(rowToModel(rows));
    }
  };

  const rowToModel = (rows)=>{
    //excel terminates table with \r\n; need to remove empty last element
    rows.pop();
    return rows.map((row) => {
        const rData = row.split("\t");
        const person = {
          firstName: rData[0],
          lastName: rData[1],
          dob: new Date(rData[2]),
          identifier: rData[3],
        };
        return person;
      });
  }

  return (
    <div className='grid-wrapper' onKeyDown={capturePaste}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        onKeyUp={(e) => console.log(e)}
      />
    </div>
  );
};
