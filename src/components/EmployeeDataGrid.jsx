import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataEmployee } from "../data/mockData";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";

const EmployeeDataGrid = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userdata, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      console.log(response);
      setData(response.data.allUser);
      // window.location.reload();
    });
    console.log(userdata);
  }, []);

  const handleDelete = (person) => {
    axios
      .delete(`http://localhost:3000/${person}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
        // Handle error if deletion fails
      });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "age",
      headerName: "Age",
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (e) => {
        return (
          <IconButton onClick={(e) => handleDelete(e.row)}>
            <EditOutlinedIcon />
          </IconButton>
        );
      },
    },
    // {
    //   field: "name",
    //   headerName: "Name",
    //   flex: 1,
    //   cellClassName: "name-column--cell",
    // },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   flex: 1,
    // },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   flex: 1,
    //   renderCell: ({ row: { data } }) => {
    //     return (
    //       <Box display="flex" alignItems="center" gap={4}>
    //         {/* <IconButton>
    //           <EditOutlinedIcon />
    //         </IconButton> */}
    //         <IconButton onClick={() => handleDelete(data._id)}>
    //           <DeleteOutlineOutlinedIcon />
    //         </IconButton>
    //       </Box>
    //     );
    //   },
    // },
  ];

  return (
    <Box
      m="40px 0 0 0"
      //   height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid
        rows={userdata}
        columns={columns}
        getRowId={(userdata) => userdata.email}
      />
    </Box>
  );
};

export default EmployeeDataGrid;
