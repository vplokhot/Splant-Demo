require("dotenv").config();

import { CeramicClient } from "@ceramicnetwork/http-client";
const API_URL = process.env.API_URL;
const ceramic = new CeramicClient(API_URL);
