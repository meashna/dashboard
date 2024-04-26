import * as React from "react";
import styles from "./SchAct.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NearMe } from "@mui/icons-material";

function createData(name, team, locationName, locationNumber, loadNumber) {
  return {
    name,
    team,
    locationName,
    locationNumber,
    loadNumber,
    description: `${name} (${team}) has created ${locationName} ${locationNumber} ${loadNumber}`,
  };
}

const rows = [
  createData(
    "Gurpreet Singh",
    "Dispatch team",
    "Location_Name",
    "Loc-No-001",
    "I-I-AAA-1325"
  ),
  createData("Aman", "Driver", "Pickup Location", "Loc-No-002", "I-I-AAA-1325"),
];

const SchAct = () => {
  return (
    <div>
      <div className={styles.com_head}>
        <div className={styles.com_heading}>Completed Activities(14)</div>
        <div className={styles.viewall}>View All</div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableBody>
            {rows.map((row, index) => (
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
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SchAct;
