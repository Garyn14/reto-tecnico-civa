interface TableProps<T> {
    columns: string[]; // Encabezados de la tabla
    data: T[]; // Datos en formato de array de objetos con un tipo genérico
  }
  
  const Table = <T extends Record<string, unknown>>({ columns, data }: TableProps<T>) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          {/* Encabezado */}
          <thead className="bg-gray-200">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
  
          {/* Cuerpo */}
          <tbody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                >
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="border border-gray-300 px-4 py-2 text-sm text-gray-700"
                    >
                      {String(row[col as keyof T] ?? "-")} {/* Asegura compatibilidad */}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500"
                >
                  No hay datos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  