import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import EmployeeDataGrid from "../../components/EmployeeDataGrid";
import useMediaQuery from "@mui/material/useMediaQuery";
import FullFeaturedCrudGrid from "../../components/FullCrudDataGrid";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:768px)");
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <Box sx={{ gridColumn: "span 2" }}>
          <Header title="Employees" variant={"h4"} />
          <FullFeaturedCrudGrid />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
