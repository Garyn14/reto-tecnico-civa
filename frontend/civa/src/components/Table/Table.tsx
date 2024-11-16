interface TableProps<T> {
    columns: string[];
    data: T[];
  }
  
  const Table = <T extends Record<string, unknown>>({ columns, data }: TableProps<T>) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">

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
                      {String(row[col as keyof T] ?? "-")}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-gray-500 font-bold"
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
  