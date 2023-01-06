import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { getDate, calculateTime } from "../utils/dateSupportFuncs";
import CallIcon from "./CallIcon";
import Pagination from "@mui/material/Pagination";
import InventoryIcon from "@mui/icons-material/Inventory";
import { setThreads } from "../redux/threadsSlice";
import { useDispatch, useSelector } from "react-redux";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import BasicModal from "./Modal";

export default function ArchivedFeed() {
  const dispatch = useDispatch();
  const listOfThreads = useSelector((state) => state.threadsData.listOfThreads);
  const [page, setPage] = useState(1);
  const [callId, setCallId] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const unarchive = (id) => {
    let tempList = [...listOfThreads];
    tempList = tempList.map((call) => {
      if (call.id === id) {
        const tempObj = Object.assign({}, call);
        tempObj.is_archived = false;
        return tempObj;
      }
      return call;
    });
    dispatch(setThreads(tempList));
  };

  const tempData = [...listOfThreads];
  const archivedCalls = tempData.filter((calls) => calls.is_archived === true);
  const totalPages = Math.ceil(archivedCalls.length / 6);
  const totalCalls = archivedCalls.length;
  const pageData = archivedCalls.splice((page - 1) * 6, 6);

  return (
    <Box>
      <BasicModal open={open} handleClose={handleClose} callId={callId} />
      {pageData &&
        pageData.map((call) => (
          <Fragment>
            <ListItem
              alignItems="flex-start"
              key={call.id}
              sx={{ height: "80px" }}
            >
              <ListItemIcon alignItems="center">
                <CallIcon callType={call.call_type} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                primary={call.from}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {getDate(call.created_at)}
                    </Typography>
                    {calculateTime(call.duration)}
                  </React.Fragment>
                }
                onClick={() => {
                  handleOpen();
                  setCallId(call.id);
                }}
              />
              <IconButton
                aria-label="unarchive"
                size="medium"
                onClick={() => unarchive(call.id)}
                color="success"
              >
                <UnarchiveIcon fontSize="inherit" />
              </IconButton>
            </ListItem>
            <Divider variant="inset" />
          </Fragment>
        ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <Pagination
          count={totalPages}
          onChange={(e, value) => {
            setPage(value);
          }}
          variant="outlined"
          hidePrevButton
          hideNextButton
        />
      </Box>
    </Box>
  );
}
