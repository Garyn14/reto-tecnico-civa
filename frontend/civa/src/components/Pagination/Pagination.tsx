import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        className={`px-4 py-2 rounded ${
          isFirstPage
            ? "bg-gray-300 opacity-50 cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        aria-label="Página anterior"
      >
        Anterior
      </button>

      <span>
        Página {currentPage + 1} de {totalPages}
      </span>

      <button
        className={`px-4 py-2 rounded ${
          isLastPage
            ? "bg-gray-300 opacity-50 cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        aria-label="Página siguiente"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
