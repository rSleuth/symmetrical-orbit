answer = (function() {
    if (current.u_enforcement_case.watch_list.toString().indexOf(gs.getUserID()) > -1)
        return true;
    else
        return false;

})();
