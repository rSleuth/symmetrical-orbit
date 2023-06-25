answer = (function() {
    var usr = gs.getUserID();
 var enforcementcoordinatorssysID = gs.getProperty('sn_customerservice.pp.group.Enforcement_Coordinators'); //getting group sys_id of Enforcement Coordinators group
    var enforcementGroupSysID = gs.getProperty('pp.group.allEnforcement_Users'); //getting group sys_id of PP_AllEnforcementUsersGroup group
    var isCaseApprover = new PP_CustomerService_SecurityUtils().checkUserPartOfCaseApprovers(current.getValue("u_case"), usr);
    var isGroupMember = new PP_CustomerService_SecurityUtils().checkUserPartOfGroup(enforcementGroupSysID, usr);
 var isGroupMemberEC = new PP_CustomerService_SecurityUtils().checkUserPartOfGroup(enforcementcoordinatorssysID, usr);
    if (isGroupMember || isGroupMemberEC || isCaseApprover || (current.u_case.assigned_to == usr))
        return true;
    else
        return false;
})();
