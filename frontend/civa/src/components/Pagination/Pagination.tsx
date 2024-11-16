import React from "react";

interface PaginationProps {
  currentPage: number;
  isLastPage: boolean;
  isFirstPage: boolean;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  isLastPage,
  isFirstPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Anterior
      </button>
      <span>
        Página {currentPage + 1}
      </span>
      <button
        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
