answer = (function() {
    var usr = gs.getUserID();
    if ((current.assigned_to == usr) || current.isNewRecord())
        return true;
    else
        return false;
})();
