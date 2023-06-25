 var user = gs.getUserID();
 var dept;
 var gr = new GlideRecord('sys_user');
 gr.addQuery('sys_id', user);
 gr.query();
 if (gr.next()) {
     dept = gr.getValue('department');
 }
 var grDept = new GlideRecord('cmn_department');
 grDept.addQuery('sys_id', dept);
 grDept.query();
 if (grDept.next()) {
     if (grDept.parent.parent == 'c8e6cc06e5e9651007538ada7603de73') {
         answer = true;
     } else {
         answer = false;
     }

 }
