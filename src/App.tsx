import React, { useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import PaginationComponent from "./components/PaginationComponent";
import useFetch from "./hooks/useFetch";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");
  const [page, setPage] = useState(1);

  const sortParam = sortOption.startsWith("name") ? "login" : "score";
  const sortOrder = sortOption.endsWith("asc") ? "asc" : "desc";

  const {
    data: users,
    loading,
    totalCount,
    error,
  } = useFetch(searchQuery, page, sortParam, sortOrder);

  return (
    <Box sx={{ p: 2 }}>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total Results: {totalCount}
          </Typography>
          {loading ? (
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
              <PaginationComponent
                totalCount={totalCount}
                page={page}
                setPage={setPage}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default App;
