import React from "react";
import styles from "./CompAct.module.css";
import { useData } from "../Context/Context";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CompAct = () => {
  const { data } = useData();

  return (
    <div>
      <div className={styles.com_cont}>
        <div className={styles.com_head}>
          <div className={styles.com_heading}>
            Completed Activities ({data.length})
          </div>
          <div className={styles.viewall}>View All</div>
        </div>
        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                    sx={{ height: 10 }}
                  >
                    {row.description}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default CompAct;
