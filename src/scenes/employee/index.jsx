import { Box } from "@mui/material";
import Header from "../../components/Header";
import Testform from "../../components/Testform";
import EmployeeDataGrid from "../../components/EmployeeDataGrid";

const Employee = () => {
  return (
    <Box m="20px">
      <Header title="EMPLOYEES" subtitle="Managing the Employees" />
      <Testform />
      <EmployeeDataGrid />
    </Box>
  );
};

export default Employee;
