import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CostumePagination = ({ setPage, pageNumberCount = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={pageNumberCount}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
          color='primary'
        />
      </ThemeProvider>
    </div>
  );
};

export default CostumePagination;
