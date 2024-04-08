import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { Divider, Stack } from "@mui/material";

const AuthNav = () => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" color="FFCDEA" flexItem />}
      spacing={2}
    >
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
    </Stack>
  );
};

export default AuthNav;
