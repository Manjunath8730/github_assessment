import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
}

const sortOptionsText: Record<string, string> = {
  "name-asc": "Name (A - Z)",
  "name-desc": "Name (Z - A)",
  "rank-asc": "Rank ↑",
  "rank-desc": "Rank ↓",
};

const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}) => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const selectedSortOption = event.target.value as string;
    setSortOption(selectedSortOption);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Sort by Name</InputLabel>
            <Select
              value={sortOption || ""}
              onChange={handleSortChange}
              displayEmpty
              variant="outlined"
              size="small"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            >
              <MenuItem value="" disabled>
                Sort by Name
              </MenuItem>
              <MenuItem value="name-asc">Name (A - Z)</MenuItem>
              <MenuItem value="name-desc">Name (Z - A)</MenuItem>
              <MenuItem value="rank-asc">Rank ↑</MenuItem>
              <MenuItem value="rank-desc">Rank ↓</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" alignItems="center">
            <TextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Users..."
              variant="outlined"
              size="small"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "white" }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
