import { Box, Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { alpha, lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import StorefrontIcon from "@material-ui/icons/Storefront";
import clsx from "clsx";
import React from "react";
import { useHistory } from "react-router-dom";

function createData(name, version, price, carbs, total) {
  return { name, version, price, carbs, total };
}

const rows = [
  createData("Cupcake", "blue", 3.5, 67, 4.3),
  createData("Donut", "red", 25.0, 51, 4.9),
  createData("Eclair", "blue", 16.0, 24, 6.0),
  createData("Frozen yoghurt", "fruit", 6.0, 24, 4.0),
  createData("Gingerbread", "blue", 16.0, 49, 3.9),
];

const headCells = [
  { id: "version", numeric: true, disablePadding: false, label: "" },
  { id: "price", numeric: true, disablePadding: false, label: "" },
  { id: "carbs", numeric: true, disablePadding: false, label: "" },
  { id: "total", numeric: true, disablePadding: false, label: "" },
  { id: "total", numeric: true, disablePadding: false, label: "" },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead className={classes.row}>
      <TableRow>
        <TableCell align="center">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        <TableCell key={"1"} align={"left"} padding={"none"} width={"20%"}>
          <Box display="flex" alignItems="center">
            <StorefrontIcon style={{ marginRight: 16 }} />
            Decor shop Name
          </Box>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    marginRight: 16,
    marginLeft: 16,
    color: "rgb(210, 63, 87)",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const history = useHistory();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          <Box display="flex" alignItems="center">
            <Typography color="inherit" variant="subtitle1">
              Total {numSelected} items:
            </Typography>
            <Typography
              className={classes.title}
              color="inherit"
              variant="subtitle1"
            >
              $ 0
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={() => history.push("/checkout")}
            >
              Check Out
            </Button>
          </Box>
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <></>
      )}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },

  row: {
    "& .MuiTableCell-root": {
      padding: "8px 0px",
    },
  },
  tableRowRoot: {
    "&$tableRowSelected, &$tableRowSelected:hover": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
  },
  tableRowSelected: {
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  },

  qtyBtn: {
    minWidth: 20,
    padding: 5,
  },

  price: {
    color: "rgb(210, 63, 87)",
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {selected.length > 0 && (
          <EnhancedTableToolbar numSelected={selected.length} />
        )}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />

            <TableBody className={classes.row}>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    className={classes.row}
                    classes={{
                      root: classes.tableRowRoot,
                      selected: classes.tableRowSelected,
                    }}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell align="center" width="5%">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                        onClick={(event) => handleClick(event, row.name)}
                      />
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      width="35%"
                    >
                      <Box display="flex" alignItems="center">
                        <img
                          style={{ marginRight: 16 }}
                          width={80}
                          height={80}
                          src={
                            "https://cf.shopee.vn/file/0fe6b6974d2a05c251336fd150944fea_tn"
                          }
                          alt=""
                        />
                        {row.name}
                      </Box>
                    </TableCell>
                    <TableCell width="15%">{row.version}</TableCell>
                    <TableCell width="10%">${row.price}</TableCell>
                    <TableCell width="20%">
                      <Box className={classes.test} mx={2}>
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.qtyBtn}
                        >
                          <RemoveIcon />
                        </Button>
                        <Box component={"span"} px={2}>
                          1
                        </Box>
                        <Button
                          variant="outlined"
                          color="primary"
                          className={classes.qtyBtn}
                        >
                          <AddIcon />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell width="10%" className={classes.price}>
                      ${row.total}
                    </TableCell>
                    <TableCell width="5%">
                      <Tooltip title="Delete">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
