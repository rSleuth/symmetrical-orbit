answer = (function() {
 var usr=gs.getUserID();
    var isCaseApprover = new PP_CustomerService_SecurityUtils().checkUserPartOfCaseApprovers(current.getValue("u_enforcement_case"), usr);
    if (isCaseApprover)
        return true;
    else
        return false;

})();
