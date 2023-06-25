var answer = false;
if(current.isNewRecord()){
 answer = true;
}
else{
 var agentScheduleUtil = new AgentScheduleUtil();
 var personalScheduleGR = agentScheduleUtil.getAgentPersonalSchedule(gs.getUserID());
 if(personalScheduleGR.next()){
  if(personalScheduleGR.getValue('personal_schedule') == current.schedule){
   answer = true;
  }
 }
}
answer;
