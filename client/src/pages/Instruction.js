import React from "react";
import { Box, Typography } from "@mui/material";
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
  return (
    <Box>
      <Typography sx={{ textTransform: "capitalize", mb: 2 }}>
        click button below to download file instruction.
      </Typography>
      <PDFDownloadLink document={<DocumentHowToUse />} fileName="howtouse.pdf">
        {({ loading }) =>
          loading ? (
            <button style={styles.button} disabled>
              Loading Documentation...
            </button>
          ) : (
            <button style={styles.button}>Download</button>
          )
        }
      </PDFDownloadLink>
    </Box>
  );
}

export default Instruction;
