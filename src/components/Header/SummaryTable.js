import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {withStyles, makeStyles, hexToRgb} from '@material-ui/core/styles';


export default ({data}) => (
    <div>
        <h1 className="title">Summary</h1>
        <Paper className="container">
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>New Confirmed</StyledTableCell>
                        <StyledTableCell>Total Confirmed</StyledTableCell>
                        <StyledTableCell>New Deaths</StyledTableCell>
                        <StyledTableCell>Total Deaths</StyledTableCell>
                        <StyledTableCell>New Recovered</StyledTableCell>
                        <StyledTableCell>Total Recovered</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="1">
                        <TableCell style={styles.cell}>{data.NewConfirmed}</TableCell>
                        <TableCell style={styles.cell}>{data.TotalConfirmed.toLocaleString('en-US')}</TableCell>
                        <TableCell style={styles.cell}>{data.NewDeaths}</TableCell>
                        <TableCell style={styles.cell}>{data.TotalDeaths}</TableCell>
                        <TableCell style={styles.cell}>{data.NewRecovered}</TableCell>
                        <TableCell style={styles.cell}>{data.TotalRecovered}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    </div>
);

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 16,
        fontFamily: "AppleSDGothicNeo-UltraLight",
        textAlign: 'center',
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

const styles = {
    cell:{
        fontFamily: "AppleSDGothicNeo-SemiBold",
        textAlign: 'center',
    },
};
