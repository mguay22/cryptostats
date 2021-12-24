import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useGetPrimaryAccountTransactionsQuery } from "../../apis/coinbase.api";

const TransactionsGrid: React.FC = () => {
  const { data, isLoading } = useGetPrimaryAccountTransactionsQuery(undefined);

  console.log(data);

  return (
    <div className="w-9/12">
      <h1 className="text-4xl mb-6">Transactions</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Amount (Crypto)</TableCell>
              <TableCell align="right">Amount (Native)</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data &&
              data.data.map((transaction: any) => (
                <TableRow
                  key={transaction.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {transaction.created_at}
                  </TableCell>
                  <TableCell align="right">{transaction.type}</TableCell>
                  <TableCell align="right">
                    {transaction.amount.amount}
                  </TableCell>
                  <TableCell align="right">
                    {transaction.native_amount.amount}
                  </TableCell>
                  <TableCell align="right">{transaction.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {isLoading && (
          <div className="flex justify-center m-6">
            <CircularProgress />
          </div>
        )}
      </TableContainer>
    </div>
  );
};

export { TransactionsGrid };
