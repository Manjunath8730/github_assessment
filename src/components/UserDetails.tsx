import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Divider } from "@mui/material";

const UserDetails: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
      });
  }, [username]);

  return (
    <Box mt={2}>
      {repos.map((repo) => (
        <Box key={repo.id} mb={2}>
          <Typography variant="body1">{repo.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            Language: {repo.language}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Stars: {repo.stargazers_count} | Forks: {repo.forks_count} | Open
            Issues: {repo.open_issues_count}
          </Typography>
          <Divider sx={{ marginTop: 1 }} />
        </Box>
      ))}
    </Box>
  );
};

export default UserDetails;
