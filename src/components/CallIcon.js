import React from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import VoicemailIcon from "@mui/icons-material/Voicemail";

export default function CallIcon({ callType }) {
  let iconType = <CallMadeIcon color="success"/>;
  switch (callType) {
    case "missed":
      iconType = <CallMissedIcon color="error"/>;
      break;
    case "answered":
      iconType = <CallReceivedIcon />;
      break;
    case "voicemail":
      iconType = <VoicemailIcon color="error"/>;
      break;
  }
  return iconType;
}
