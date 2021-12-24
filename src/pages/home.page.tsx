import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { TransactionsGrid } from "../components/transactions/transactions-grid.component";
import { selectCurrentUser } from "../slices/auth.slice";

const HomePage: React.FC = () => {
  const user = useAppSelector((state) => selectCurrentUser(state));

  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_AUTH_URL) {
      window.location.href = process.env.REACT_APP_COINBASE_AUTH_URL;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {user?.isCoinbaseAuthorized ? (
        <TransactionsGrid />
      ) : (
        <Button
          variant="contained"
          size="large"
          onClick={handleConnectCoinbase}
        >
          Connect Coinbase
        </Button>
      )}
    </div>
  );
};

export { HomePage };
