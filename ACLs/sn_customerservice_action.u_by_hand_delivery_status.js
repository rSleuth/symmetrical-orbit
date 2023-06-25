var usr = gs.getUserID();
var enfcase = new GlideRecord('sn_customerservice_enforcement_case');
enfcase.addQuery('sys_id', current.u_enforcement_case.toString());
enfcase.query();
if (enfcase.next()) {
    if (enfcase.assigned_to.toString() == usr) {
        answer = true;
    } else
        answer = false;

}

