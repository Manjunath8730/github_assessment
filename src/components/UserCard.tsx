import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Collapse,
} from "@mui/material";

interface UserCardProps {
  user: any;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card variant="outlined" sx={{ mt: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              marginRight: 16,
            }}
          />
          <Box>
            <Typography variant="h6">{user.login}</Typography>
            <Typography variant="body2" color="textSecondary">
              Profile URL: <a href={user.html_url}>{user.html_url}</a>
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapse" : "Details"}
        </Button>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mt={2}>
            <Typography variant="body2">Data One: Value One</Typography>
            <Typography variant="body2">Data Two: Value Two</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Data Label</Typography>
              <Typography variant="body2">Data Value One</Typography>
              <Typography variant="body2">Data Label</Typography>
              <Typography variant="body2">Data Value Two</Typography>
              <Typography variant="body2">Data Label</Typography>
              <Typography variant="body2">Data Value Three</Typography>
              <Typography variant="body2">Data Label</Typography>
              <Typography variant="body2">Data Value Four</Typography>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default UserCard;
