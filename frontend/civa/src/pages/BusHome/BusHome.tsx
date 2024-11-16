import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";
import Header from "../../components/Header/Header";

import {
  fetchPagedBuses,
  fetchBusById,
  fetchBusesByPlate,
  Bus,
  PagedResponse,
} from "../../services/BusService";

const TABLE_COLUMNS = [
  "ID",
  "Número de Bus",
  "Placa",
  "Características",
  "Marca",
  "Activo",
  "Fecha de Creación",
  "Hora de Creación",
];

// Formatea los datos de los buses para la tabla
const formatBusData = (buses: Bus[]) => {
  return buses.map((bus) => ({
    ID: bus.id,
    "Número de Bus": bus.bus_number,
    Placa: bus.license_plate,
    Características: bus.features || "-",
    Marca: bus.brand.name,
    Activo: bus.is_active ? "Sí" : "No",
    "Fecha de Creación": new Date(bus.creation_date).toLocaleDateString("es-ES"),
    "Hora de Creación": new Date(bus.creation_date).toLocaleTimeString("es-ES"),
  }));
};

const BusList: React.FC = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 10;

  // Función para cargar buses paginados
  const getPagedBuses = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const data: PagedResponse = await fetchPagedBuses(page, pageSize);
      setBuses(data.content);
      setTotalPages(data.totalPages);
      setIsFirstPage(data.first);
      setIsLastPage(data.last);
    } catch (err) {
      setError("No se pudo cargar los datos. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar búsquedas
  const handleSearch = async (query: string, filter: string) => {
    setLoading(true);
    setError(null);
    try {
      const data =
        filter === "ID"
          ? [await fetchBusById(Number(query))]
          : await fetchBusesByPlate(query);
      setBuses(data);
      setTotalPages(1);
      setIsFirstPage(true);
      setIsLastPage(true);
      setCurrentPage(0); // Resetea a la primera página
    } catch (err: any) {
      setError(
        err.message === "Bus not found"
          ? "No se encontró un bus con ese ID."
          : "Error al realizar la búsqueda."
      );
      setBuses([]);
    } finally {
      setLoading(false);
    }
  };

  // Llamada inicial para cargar buses
  useEffect(() => {
    getPagedBuses(currentPage);
  }, [currentPage]);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/public/fondo2.png')", // Cambia según tu ruta de imagen
      }}
    >
      {/* Encabezado */}
      <Header
        title="Dashboard de Buses"
        userInfo={{ name: "Fernando R.", role: "Admin" }}
      />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-20">
        {/* Barra de búsqueda */}
        <div className="w-full max-w-4xl mb-8">
          <SearchBar
            placeholder="Buscar"
            filterOptions={["Placa", "ID"]}
            onSearch={handleSearch}
            onClear={() => getPagedBuses(0)}
          />
        </div>

        {/* Mensajes de carga y error */}
        {loading && <p aria-live="polite">Cargando datos...</p>}
        {error && (
          <p aria-live="assertive" className="text-red-500">
            {error}
          </p>
        )}

        {/* Tabla */}
        {!loading && !error && buses.length > 0 && (
          <section className="w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 overflow-x-auto max-w-4xl">
            <Table columns={TABLE_COLUMNS} data={formatBusData(buses)} />
          </section>
        )}

        {/* Mensaje si no hay datos */}
        {!loading && !error && buses.length === 0 && (
          <p className="text-gray-500">No se encontraron datos para mostrar.</p>
        )}

        {/* Paginación */}
        <Pagination
          currentPage={currentPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          onPageChange={(newPage) => setCurrentPage(newPage)}
        />
      </div>
    </div>
  );
};

export default BusList;
