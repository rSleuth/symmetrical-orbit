answer = (function() {
    var usr = gs.getUserID();
    var isCaseApprover = new PP_CustomerService_SecurityUtils().checkUserPartOfCaseApprovers(current.getUniqueValue(), usr);
    if (isCaseApprover)
        return true;
    else
        return false;
})();
