import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "../components/TextField";
import axios from "axios";
import AlertDialog from "../components/Dialog";

export default function FundTransfer() {
  const originAccount = "123";
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [dialog, setDialog] = useState();
  console.log("dialog:::", dialog);
  const handleTransfer = () => {
    axios
      .post("http://localhost:4000/api/transfer", {
        originAccount,
        destinationAccount: account,
        amount: +amount,
        remarks,
      })
      .then((data) => {
        console.log("Data");
        setDialog({
          title: "Trnasfer success",
          content: `The amount of ${amount} has been transferred`,
        });
      })
      .catch((err) => {
        console.log("Error is:::::::", err);
        setDialog({
          title: "Some error occured",
          content: "Please try again later",
        });
      });
  };
  return (
    <>
      <Card
        sx={{ minWidth: 275 }}
        style={{
          padding: "70px 0",
          align: "center",
          maxWidth: "50%",
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: "5%",
          border: "solid grey 1px",
          maxHeight: "40%",
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Origin Account: {originAccount}
          </Typography>
          <br />
          <div>
            <br />
            <Typography
              sx={{ fontSize: 14 }}
              style={{ display: "inline", marginTop: "3%" }}
              color="text.secondary"
              gutterBottom
            >
              Enter Beneficiary account:
            </Typography>
            <TextField
              label="Enter Account No"
              value={account}
              onChange={setAccount}
              required
            />
          </div>
          <br />
          <div>
            <Typography
              sx={{ fontSize: 14, marginRight: "3%" }}
              style={{ marginTop: "2%", display: "inline-block" }}
              color="text.secondary"
              gutterBottom
            >
              Enter amount:
            </Typography>
            <TextField
              label="Enter Amount"
              value={amount}
              onChange={setAmount}
              required
            />
          </div>
          <br />
          <div>
            <Typography
              sx={{ fontSize: 14, marginRight: "3%" }}
              style={{ marginTop: "5%", display: "inline-block" }}
              color="text.secondary"
              gutterBottom
            >
              Enter remarks:
            </Typography>
            <TextField
              label="Enter Remarks"
              value={remarks}
              onChange={setRemarks}
            />
          </div>
        </CardContent>
        <br />
        <br />
        <br />
        <CardActions>
          <Button
            size="large"
            variant="contained"
            onClick={handleTransfer}
            disabled={!account || !amount}
            style={{ marginLeft: "30%" }}
          >
            Transfer
          </Button>
        </CardActions>
      </Card>
      {dialog && (
        <AlertDialog title={dialog.title} content={dialog.content} open />
      )}
    </>
  );
}
