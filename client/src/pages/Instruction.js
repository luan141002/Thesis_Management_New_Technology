import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  IconButton,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Divider,
} from "@mui/material";
import {
  Page,
  Text,
  Image,
  Document,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  //create styles for button
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    fontSize: "16px",
    cursor: "   pointer",
  },
});

const DocumentHowToUse = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>How to Use Our Website</Text>
          <Text style={styles.content}>
            Welcome to our website! Follow these steps to make the most of your
            experience:
          </Text>
          <Text style={styles.content}>
            1. Sign up for an account if you haven't already.
          </Text>
          <Text style={styles.content}>
            2. Explore the features available on the dashboard.
          </Text>
          <Text style={styles.content}>
            3. Customize your profile settings.
          </Text>
          <Text style={styles.content}>
            4. Navigate through the menu to discover different sections.
          </Text>
          <Text style={styles.content}>
            5. Contact support if you have any questions or issues.
          </Text>
          <Text style={styles.content}>Enjoy your time on our website!</Text>
        </View>
      </Page>
    </Document>
  );
};
function Instruction() {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleConfirmDownload = () => {
  //   setOpenConfirmation(false);
  //   // Trigger download of DocumentHowToUse
  //   // downloadDocument();
  // };

  const handleCancelDownload = () => {
    setOpenConfirmation(false);
  };

  const handleDownloadClick = () => {
    setOpenConfirmation(true);
  };

  const handleConfirmDownload = () => {
    setOpenConfirmation(false);

    // Trigger download of DocumentHowToUse
    setLoading(true);

    // Create a Blob from the PDF content
    const pdfBlob = new Blob([<DocumentHowToUse />], {
      type: "application/pdf",
    });

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(pdfBlob);

    // Set the download attribute
    anchor.download = "howtouse.pdf";

    // Trigger a click on the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up and remove the anchor element
    document.body.removeChild(anchor);

    setLoading(false);
  };

  return (
    <Box>
      <Typography sx={{ textTransform: "capitalize", mb: 2 }}>
        Click the button below to download the instruction file.
</Typography>

      <Box>
        <Tooltip
          arrow
          title={<Typography sx={{ fontSize: "12px" }}>Download</Typography>}
        >
          {loading ? (
            <button style={styles.button} disabled>
              Loading Documentation...
            </button>
          ) : (
            <Button style={styles.button} onClick={handleDownloadClick}>
              Download
            </Button>
          )}
        </Tooltip>
        <PopUpMessage
          open={openConfirmation}
          title="Confirm Download"
          message="Are you sure you want to download the instruction file?"
          onCancel={handleCancelDownload}
          onConfirm={handleConfirmDownload}
        />
      </Box>
    </Box>
  );
}

export default Instruction;

export function PopUpMessage({ open, title, message, onCancel, onConfirm }) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}