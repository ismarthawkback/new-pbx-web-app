import React from "react";
import { Box } from "@mui/material";

import DatabaseBreadCrumbs from "../DatabaseBreadCrumbs";
import FilterTableExample from "./FilterTableExample";

export default function DatabaseTable() {
  return (
    <div>
      <Box
        sx={{
          padding: 1,
          margin: 2,
        }}
      >
        <DatabaseBreadCrumbs />
        <FilterTableExample />
      </Box>
    </div>
  );
}
