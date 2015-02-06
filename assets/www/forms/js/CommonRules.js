//Rules : Part B: Perceived Risks/Severity

var perceptionHighBPDoesNotCauseStroke = function(submittedForm){
    var messageList = [];
    var concept = "9112^ABSENCE OF PERCEIVED RISK OF HIGH BLOOD PRESSURE WITHOUT CARE^99DCT";
    var expectedValue = "1878^STROKE^99DCT"
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message7_ComplicationsOfHypertension);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
    }
    return messageList;
}

var perceptionHighBPDoesNotCauseKidneyFailure = function(submittedForm){
    var messageList = [];
    var concept = "9112^ABSENCE OF PERCEIVED RISK OF HIGH BLOOD PRESSURE WITHOUT CARE^99DCT";
    var expectedValue = "1885^RENAL FAILURE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message7_ComplicationsOfHypertension);
        messageList.push(message9_KidneyFailureConsequences);
    }
    return messageList;
}

var perceptionHighBPDoesNotCauseHeartDisease = function(submittedForm){
    var messageList = [];
    var concept = "9112^ABSENCE OF PERCEIVED RISK OF HIGH BLOOD PRESSURE WITHOUT CARE^99DCT";
    var expectedValue = "6237^HEART DISEASE^99DCT"
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message7_ComplicationsOfHypertension);
    }
    return messageList;
}

//Rules : Part C: Perceived Barriers

var lackOfTransportationBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "820^TRANSPORT PROBLEMS^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message12_OvercomingBarriers);
        messageList.push(message15_CommunityResources);
    }
    return messageList;
}

var haveOtherImportantExpensesBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9114^OTHER EXPENSES^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
        messageList.push(message12_OvercomingBarriers);
        messageList.push(message13_MoneyManagementTool);
    }
    return messageList;
}

var harassedByHealthWorker = function(submittedForm){
    var messageList = [];
    var concept = "9130^HARASSED BY HEALTH CARE PROVIDER^99DCT";
    var expectedValue = "1065^YES^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message12_OvercomingBarriers);
    }
    return messageList;
}