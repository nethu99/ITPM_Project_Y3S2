import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./database.js";
import dotenv from "dotenv";

dotenv.config();

import InquiryRoute from "./Inquiries/routes/InquiryRoute.js";
import ProjectRoute from "./Projects/routes/ProjectRoute.js";
import SupplierRoute from "./Suppliers/routes/SupplierRoutes.js";
import DonationRoute from "./Donations/routes/DonationRoute.js";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/inquiries", InquiryRoute);
app.use("/projects", ProjectRoute);
app.use("/suppliers", SupplierRoute);
app.use("/donations", DonationRoute);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
