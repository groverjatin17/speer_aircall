import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 290,
  height: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, callId }) {
  const listOfActivities = useSelector((state) => state.activitiesData.listOfActivities);
  const callDetails = listOfActivities.find((call) => call.id === callId);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            Call Details
          </Typography>
          {callDetails &&
            Object.entries(callDetails).map(([key, value]) => {
              return (
                <Box
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Typography sx={{ height: "30px" }}>{key}</Typography>
                  <Typography sx={{ height: "30px" }}>{value}</Typography>
                </Box>
              );
            })}
        </Box>
      </Modal>
    </div>
  );
}
