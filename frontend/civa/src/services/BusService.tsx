// busService.ts
const BASE_URL = "http://127.0.0.1:8080/buses/v1/api";

// Centralizar manejo de errores
const handleError = async (response: Response) => {
  const error = await response.json();
  throw new Error(error.message || "Error desconocido");
};

export interface Bus {
  id: number;
  bus_number: number;
  license_plate: string;
  creation_date: string;
  features?: string;
  is_active: boolean;
  brand: {
    id: number;
    name: string;
  };
}

export interface PagedResponse {
  content: Bus[];
  totalPages: number;
  totalElements: number;
  number: number; // Página actual
  first: boolean; // Es la primera página
  last: boolean; // Es la última página
}

// Reutilizar lógica de fetch
const fetchData = async (url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) await handleError(response);
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Función para obtener buses paginados
export const fetchPagedBuses = async (page: number = 0, size: number = 10): Promise<PagedResponse> =>
  fetchData(`${BASE_URL}/page?page=${page}&size=${size}`);

// Buscar un bus por ID
export const fetchBusById = async (id: number): Promise<Bus> =>
  fetchData(`${BASE_URL}/${id}`);

// Buscar buses por placa
export const fetchBusesByPlate = async (plateNumber: string, limit: number = 10): Promise<Bus[]> => {
  const buses = await fetchData(`${BASE_URL}/plate?plateNumber=${plateNumber}`);
  return buses.slice(0, limit);
};
