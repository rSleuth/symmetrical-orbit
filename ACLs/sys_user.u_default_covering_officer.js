var result = false;
var loggedInUserSysId = gs.getUserID();

if (gs.getUser().hasRole('pp_admin') || gs.getUser().hasRole('pp_function_admin')) { // BCA PP Admin
    result = true;
} else {
    result = false;
}

answer = result;
