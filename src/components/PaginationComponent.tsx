import React from "react";
import { Box, Pagination } from "@mui/material";

interface PaginationComponentProps {
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalCount,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(totalCount / 10);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </Box>
  );
};

export default PaginationComponent;
