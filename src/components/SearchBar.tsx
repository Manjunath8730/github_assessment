import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const SearchBar: React.FC<{
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}> = ({ sortOption, setSortOption }) => {
  return (
    <Box display="flex" justifyContent="space-between" my={2}>
      <TextField
        select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        variant="outlined"
        sx={{ width: "200px" }}
      >
        <MenuItem value="name-asc">Sort By Name (A-Z)</MenuItem>
        <MenuItem value="name-desc">Sort By Name (Z-A)</MenuItem>
        <MenuItem value="rank-asc">Rank ↑</MenuItem>
        <MenuItem value="rank-desc">Rank ↓</MenuItem>
      </TextField>
    </Box>
  );
};

export default SearchBar;
