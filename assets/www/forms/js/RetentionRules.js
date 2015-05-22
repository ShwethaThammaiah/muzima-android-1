//Rules : Part B: Perceived Risks/Severity

var keyExists = function(key, submittedForm){
    return ((key in submittedForm));
}

var ruleIsSatisfied = function(concept,value,submittedForm){
    if(keyExists("observation",submittedForm)) {
        if(keyExists(concept,submittedForm.observation)) {
            var conceptValues = submittedForm.observation[concept];
            var valueMatch = conceptValues.indexOf(value);
            if(valueMatch != -1){
                return true;
            }
        }
    }
    return false;
};

var toldByHealthCareProviderHasHighBPButBelievesDoesNotHaveHighBP = function(submittedForm){
    var messageList = [];
    var concept = "9092^PATIENT REPORTED HIGH BLOOD PRESSURE^99DCT";
    var expectedValue = "1066^NO^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message1_WhatIsHighBP);
        messageList.push(message2_WhatCausesHypertension);
        messageList.push(message3_SignAndSymptoms);
    }
    return messageList;
};


var perceptionHighBPNotSerious = function(submittedForm){
    var messageList = [];
    var concept = "9097^PERCEPTION OF HIGH BLOOD PRESSURE^99DCT";
    var expectedValue = "9096^NOT SERIOUS^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message1_WhatIsHighBP);
        messageList.push(message2_WhatCausesHypertension);
        messageList.push(message7_ComplicationsOfHypertension);
    }
    return messageList;
};

var absenceOfInstructionToRegularlyVisitClinic = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "9098^REGULAR CLINIC VISITS TO MONITOR BLOOD PRESSURE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message3_SignAndSymptoms);
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
    }
    return messageList;
};

var absenceOfInstructionToConsistentlyUseMedicines = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "7333^HYPERTENSION TREATMENT PLAN^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message5_DrugManagement);
    }
    return messageList;
};

var absenceOfInstructionToControlWeight = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "9099^CONTROL WEIGHT^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfInstructionToReduceSaltIntake = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "7053^SALT REDUCTION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var showBenefitsOfExerciseMessage = function(submittedForm){
    var messageList = [];
    var conceptYes = "9101^INFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "7055^EXERCISE^99DCT"
    var conceptNo = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var conceptRefusedToAnswer = "9103^UNANSWERED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    if(ruleIsSatisfied(conceptYes,expectedValue,submittedForm) || ruleIsSatisfied(conceptNo,expectedValue,submittedForm) || ruleIsSatisfied(conceptRefusedToAnswer,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfInstructionToReduceAlcoholConsumption = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "9100^REDUCE ALCOHOL USE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfInstructionToQuitSmoking = function(submittedForm){
    var messageList = [];
    var concept = "9102^UNINFORMED HIGH BLOOD PRESSURE MANAGEMENT^99DCT";
    var expectedValue = "7055^SMOKING CESSATION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var currentlyNotUsingMedication = function(submittedForm){
    var messageList = [];
    var concept = "7291^PATIENT REPORTED CURRENT HYPERTENSION TREATMENT^99DCT";
    var expectedValue = "1066^NO^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message5_DrugManagement);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
    }
    return messageList;
}

var sourceOfMedicineIsChemistShopPeerOrFriend = function(submittedForm){
    var messageList = [];
    var concept = "9104^MEDICATION PICKUP LOCATION^99DCT";
    var expectedValueChemistShop = "1861^PRIVATE PHARMACY^99DCT";
    var expectedValueFriend = "5618^FRIEND^99DCT";
    if(ruleIsSatisfied(concept,expectedValueChemistShop,submittedForm) || ruleIsSatisfied(concept,expectedValueFriend,submittedForm)) {
        messageList.push(message9_KidneyFailureConsequences);
    }
    return messageList;
}

var sourceOfMedicineIsTraditionalHealer = function(submittedForm){
    var messageList = [];
    var concept = "9104^MEDICATION PICKUP LOCATION^99DCT";
    var expectedValueTraditionalHealer = "1860^TRADITIONAL HEALER^99DCT"
    if(ruleIsSatisfied(concept,expectedValueTraditionalHealer,submittedForm)){
        messageList.push(message11_ConsequencesOfHerbalTreatment);
    }
    return messageList;
}

var absenceOfHealthPracticeControlWeight = function(submittedForm){
    var messageList = [];
    var concept = "9106^ABSENCE OF HEALTH PRACTICES^99DCT";
    var expectedValue = "9099^CONTROL WEIGHT^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfHealthPracticeReduceSaltIntake = function(submittedForm){
    var messageList = [];
    var concept = "9106^ABSENCE OF HEALTH PRACTICES^99DCT";
    var expectedValue = "7053^SALT REDUCTION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfHealthPracticeExercise = function(submittedForm){
    var messageList = [];
    var concept = "9106^ABSENCE OF HEALTH PRACTICES^99DCT";
    var expectedValue = "7055^EXERCISE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfHealthPracticeReduceAlcoholConsumption = function(submittedForm){
    var messageList = [];
    var concept = "9106^ABSENCE OF HEALTH PRACTICES^99DCT";
    var expectedValue = "9100^REDUCE ALCOHOL USE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var absenceOfHealthPracticeSmokingCessation = function(submittedForm){
    var messageList = [];
    var concept = "9106^ABSENCE OF HEALTH PRACTICES^99DCT";
    var expectedValue = "7054^SMOKING CESSATION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message4_LifestyleManagement);
    }
    return messageList;
}

var unableToRecogniseSymptomsOfBloodPressureChange = function(submittedForm){
    var messageList = [];
    var concept = "9109^BLOOD PRESSURE CHANGE AWARENESS WITHOUT MEASUREMENT^99DCT";
    var expectedValueYes = "1065^YES^99DCT";
    var expectedValueNo = "1066^NO^99DCT";
    var expectedValueRefuseToAnswer = "1958^REFUSAL^99DCT";
    if(ruleIsSatisfied(concept,expectedValueYes,submittedForm) || ruleIsSatisfied(concept,expectedValueNo,submittedForm) || ruleIsSatisfied(concept,expectedValueRefuseToAnswer,submittedForm)) {
        messageList.push(message3_SignAndSymptoms);
    }
    return messageList;
}

var missedVisitBecauseOfImpressionOfGoodHealth = function(submittedForm){
    var messageList = [];
    var concept = "1733^REASON FOR MISSED VISIT^99DCT";
    var expectedValue = "9070^IN GOOD HEALTH^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message3_SignAndSymptoms);
        messageList.push(message5_DrugManagement);
        messageList.push(message7_ComplicationsOfHypertension);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
    }
    return messageList;
}

var missedMedicationBecauseOfImpressionOfGoodHealth = function(submittedForm){
    var messageList = [];
    var concept = "1668^MISSED MEDICATION REASON^99DCT";
    var expectedValue = "1647^FELT WELL AND DID NOT THINK TAKING MEDICINIE WAS NEEDED^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)) {
        messageList.push(message3_SignAndSymptoms);
        messageList.push(message5_DrugManagement);
        messageList.push(message7_ComplicationsOfHypertension);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
    }
    return messageList;
}



//Rules : Part C: Perceived Barriers

var lackedFareBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "1578^TRANSPORT COSTS^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
        messageList.push(message12_OvercomingBarriers);
        messageList.push(message13_MoneyManagementTool);
    }
    return messageList;
}

var lackOfFinancesForTreatment = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "6295^FINANCIAL BARRIER^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
        messageList.push(message13_MoneyManagementTool);
        messageList.push(message15_CommunityResources);
    }
    return messageList;
}

var assumptionOfLimitedServicesBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9115^LIMITED SERVICES^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
        messageList.push(message12_OvercomingBarriers);
    }
    return messageList;
}

var assumptionOfLongQueuesAtHealthFacilityBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9116^WAIT AT HEALTH FACILITY^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
       //message17
    }
    return messageList;
}

var assumptionOfCorruptionAtHealthFacilityBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9117^CORRUPTION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
       //message17
    }
    return messageList;
}

var doesNotSeeUseUsefulnessOrSuccessInTreatmentBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9118^TREATMENT NOT EFFECTIVE, SELF PERCEPTION^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message4_LifestyleManagement);
        messageList.push(message5_DrugManagement);
        messageList.push(message7_ComplicationsOfHypertension);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault   );
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
    }
    return messageList;
}

var otherCommitmentsBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9148^COMMITMENTS^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message12_OvercomingBarriers);
        messageList.push(message14_TimeManagementTool);
    }
    return messageList;
}

var traditionalHerbalMedicineBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "8828^HERBAL MEDICATION CONSUMPTION^99DCT"
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message11_ConsequencesOfHerbalTreatment);
    }
    return messageList;
}

var otherSourcesOfMedicineBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "7064^SHARE MEDICATION WITH OTHER PEOPLE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message9_KidneyFailureConsequences);
    }
    return messageList;
}

var purchaseMedicineFromChemistShopBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "9119^BUY MEDICATION FROM CHEMIST^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message9_KidneyFailureConsequences);
        messageList.push(message11_ConsequencesOfHerbalTreatment);
    }
    return messageList;
}

var beliefOfHealingByFaithBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "1587^HEALED BY FAITH^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message4_LifestyleManagement);
        messageList.push(message5_DrugManagement);
        messageList.push(message12_OvercomingBarriers);
    }
    return messageList;
}

var burdenOfTakingPillsBarrier = function(submittedForm){
    var messageList = [];
    var concept = "9120^PRESENT BARRIERS TO HEALTHCARE^99DCT";
    var expectedValue = "7065^PILL BURDEN^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message6_AdhereManagingSideEffects);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        messageList.push(message12_OvercomingBarriers);
    }
    return messageList;
}

//Rules : Part D: Emotional Factors

var afraidOfStigmaAssociatedToHighBP = function(submittedForm){
    var messageList = [];
    var concept = "9127^PRESENT EMOTIONAL BARRIER TO HEALTHCARE, RECENT^99DCT";
    var expectedValue = "9123^AFRAID OF HYPERTENSION STIGMA^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        //message17
    }
    return messageList;
}

var afraidOfPossibleHIVStigmaAtAMPATHClinics = function(submittedForm){
    var messageList = [];
    var concept = "9127^PRESENT EMOTIONAL BARRIER TO HEALTHCARE, RECENT^99DCT";
    var expectedValue = "9124^AFRAID OF AMPATH STIGMA^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        //Display message17
        messageList.push(message15_CommunityResources);
    }
    return messageList;
}

var afraidOfChronicNatureOfHighBP = function(submittedForm){
    var messageList = [];
    var concept = "9127^PRESENT EMOTIONAL BARRIER TO HEALTHCARE, RECENT^99DCT";
    var expectedValue = "9125^AFRAID OF HIGH BLOOD PRESSURE CHRONIC NATURE^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message1_WhatIsHighBP);
        messageList.push(message2_WhatCausesHypertension);
        messageList.push(message10_CostEffectivenessInEarlyTreatment);
    }
    return messageList;
}

var afraidOfTakingDrugsForHighBP = function(submittedForm){
    var messageList = [];
    var concept = "9127^PRESENT EMOTIONAL BARRIER TO HEALTHCARE, RECENT^99DCT";
    var expectedValue = "9126^AFRAID OF TAKING DRUGS^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message5_DrugManagement);
        messageList.push(message6_AdhereManagingSideEffects);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        messageList.push(message12_OvercomingBarriers);
    }
    return messageList;
}

//Part F : Confidence barriers


var notVeryConfidentOfLikelihoodOfContinuingWithCare = function(submittedForm){
    var messageList = [];
    var concept = "9142^LIKELIHOOD OF CONTINUING CARE^99DCT";
    var expectedValue = "9141^NOT VERY CONFIDENT^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message4_LifestyleManagement);
        messageList.push(message5_DrugManagement);
        //Display message17
    }
    return messageList;
}

var noPlanAboutHowToContinueWithCare = function(submittedForm){
    var messageList = [];
    var concept = "9143^PLAN TO SEEKING CARE CONSISTENTLY^99DCT";
    var expectedValue = "1066^NO^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message4_LifestyleManagement);
        messageList.push(message5_DrugManagement);
        messageList.push(message12_OvercomingBarriers);
        //Display message17
    }
    return messageList;
}

var notVeryConfidentAboutFollowingInstructionsGiven = function(submittedForm){
    var messageList = [];
    var concept = "9144^ABILITY TO FOLLOW MEDICAL ADVICE^99DCT";
    var expectedValue = "9141^NOT VERY CONFIDENT^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message5_DrugManagement);
        messageList.push(message6_AdhereManagingSideEffects);
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        //Display message17
    }
    return messageList;
}

var noPlanAboutHowToFollowInstructionsGiven = function(submittedForm){
    var messageList = [];
    var concept = "9145^PLAN TO FOLLOW INSTRUCTIONS^99DCT";
    var expectedValue = "1066^NO^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        messageList.push(message12_OvercomingBarriers);
        //Display message17
    }
    return messageList;
}

var notVeryConfidentAboutModifyingLifestyle = function(submittedForm){
    var messageList = [];
    var concept = "9146^ABILITY TO MODIFY LIFESTYLE^99DCT";
    var expectedValue = "9141^NOT VERY CONFIDENT^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
       messageList.push(message4_LifestyleManagement);
        //Display message17
    }
    return messageList;
}

var noPlanAboutHowToModifyLifestyle = function(submittedForm){
    var messageList = [];
    var concept = "9146^ABILITY TO MODIFY LIFESTYLE^99DCT";
    var expectedValue = "1066^NO^99DCT";
    if(ruleIsSatisfied(concept,expectedValue,submittedForm)){
        messageList.push(message8_StrokeOrConsequencesOfMedicationDefault);
        messageList.push(message12_OvercomingBarriers);
        //Display message17
    }
    return messageList;
}

//Messages

var message1_WhatIsHighBP = {
                    id : "Message1",
                    title : "What is high blood pressure?",
                    messageHtml :  ' <label class="alert alert-info" id="message1"> \
                       <ol> \
                           High blood pressure is a condition of the heart and blood.  When blood pressure is persistently and abnormally high, doctors call this condition \'hypertension\'. \
                           <br>High blood pressure does not always cause noticeable symptoms, but it can be a very serious disease. It can result in other serious diseases, such as heart attack, stroke, and kidney disease if not well managed. \
                       </ol> \
                       <input class="btn image-player" data-image = "/media/img/message1.jpg" type="button" value="show image"/> \
                   </label>'
                   };

var message2_WhatCausesHypertension = {
                    id : "Message2",
                    title : "Causes/predisposing factors",
                    messageHtml : '<label class="alert alert-info" id="message2"> \
                        What Causes Hypertension?  <br> \
                        Many different things can cause high blood pressure. Most commonly, it is caused by:<br> \
                        <span style="text-decoration: underline;">1. Lifestyle</span> \
                        <ol type="I"> \
                            <li>Eating a diet high in oil, fat and salt (such as a lot red meat or fried foods)</li> \
                            <li>Being overweight,</li> \
                            <li>Not doing exercise or physical activity,</li> \
                            <li>Using tobacco or smoking, and </li> \
                            <li>Drinking too much alcohol.</li> \
                        </ol> \
                        <span style="text-decoration: underline;">2. Hereditary factors.</span> \
                        <ul> \
                            <li>High blood pressure runs in the immediate family.</li> \
                        </ul> \
                        <input class="btn image-player" data-image = "/media/img/message2.jpg" type="button" value="show image"/> \
                    </label> <br>'
                    };

var message3_SignAndSymptoms = {
                    id : "Message3",
                    title : "Signs and Symptoms",
                    messageHtml : '<label class="alert alert-info" id="message3"> \
                        <input class="btn video-player" data-video = "/media/vids/message3.mp4" type="button" value="show video"/> \
                    </label>'
                    };

var message4_LifestyleManagement = {
                    id : "Message4",
                    title : "Lifestyle Management of Hypertension",
                    messageHtml : '<label class="alert alert-info" id="message4"> \
                        <input class="btn video-player" data-video = "/media/vids/message4.mp4" type="button" value="show video"/> \
                    </label>'
                    };

var message5_DrugManagement = {
                    id : "Message5",
                    title : "Drug Management of Hypertension",
                    messageHtml :' <label class="alert alert-info" id="message5">   \
                        <ul> \
                            <li>High blood pressure medications work by lowering your blood pressure to a range that does not harm your body.</li> \
                            <li>our blood pressure medication will help you stay healthy and reduce your risks of complications.</li> \
                        </ul> \
                        <span style="text-decoration: underline;">What can you do?</span> \
                        <ul> \
                            <li>Take your drugs as prescribed by your Health Care Providers</li> \
                            <li>Adhere to your routine appointments for monitoring of blood pressure</li> \
                       </ul> \
                        <input class="btn image-player" data-image = "/media/img/message5.jpg" type="button" value="show image"/> \
                    </label> <br>'
                    };

var message6_AdhereManagingSideEffects = {
                    id : "Message6",
                    title : "Adherence and Managing Side Effects",
                    messageHtml :'<label class="alert alert-info" id="message6"> \
                        <ul> \
                            <li>High blood pressure drugs, especially the “water pills” which promote water loss may make you urinate frequently first couple of weeks</li> \
                            <li>Your drugs may also cause some other side effects such as; \
                                <ul> \
                                    <li>Weakness</li> \
                                    <li>Dizziness</li> \
                                    <li>Headache</li> \
                                    <li>Nausea and</li> \
                                    <li>Vomiting</li> \
                                </ul> \
                            </li> \
                            <li>Most of the time, these will also go away. BUT you should always tell your nurse if you experience any side effects, especially if they are severe or don’t go away.</li> \
                            <li>The nurse may want to change your drugs to find that works for your blood pressure, but also makes you feel better.</li> \
                            <li>Until you talk to the nurse though, you should keep taking your blood pressure drugs.</li> \
                            <li>If you get any really severe symptoms, such as fever, peeling skin or unusual bleeding, have someone take you to a health center right away.</li> \
                        </ul> \
                    </label>'
                    };

var message7_ComplicationsOfHypertension = {
                    id : "Message7",
                    title : "Complication of Hypertension",
                    messageHtml :'<label class="alert alert-info" id="message7"> \
                        <input class="btn video-player" data-video = "/media/vids/message7.mp4" type="button" value="show video"/> \
                    </label>'
                    };

var message8_StrokeOrConsequencesOfMedicationDefault = {
                    id : "Message8",
                    title : "Stroke/Consequences of Medication Default",
                    messageHtml :'<label class="alert alert-info" id="message8"> \
                        <input class="btn video-player" data-video = "/media/vids/message8.mp4" type="button" value="show video"/> \
                    </label>'
                    };

var message9_KidneyFailureConsequences = {
                    id : "Message9",
                    title : "Kidney Failure/Consequences of OTC Management",
                    messageHtml :'<label class="alert alert-info" id="message9"> \
                        <input class="btn video-player" data-video = "/media/vids/message9.mp4" type="button" value="show video"/> \
                    </label>'
                    };

var message10_CostEffectivenessInEarlyTreatment = {
                    id : "Message10",
                    title : "Cost Effectiveness of Early Intervention",
                    messageHtml :'<label class="alert alert-info" id="message10"> \
                         <input class="btn video-player" data-video = "/media/vids/message10.mp4" type="button" value="show video"/> \
                     </label>'
                     };

var message11_ConsequencesOfHerbalTreatment = {
                    id : "Message11",
                    title : "Consequences of Using Herbal Treatments",
                    messageHtml : '<label class="alert alert-info" id="message11"> \
                         <input class="btn video-player" data-video = "/media/vids/message11.mp4" type="button" value="show video"/> \
                     </label>'
                     };

var message12_OvercomingBarriers = {
                    id : "Message12",
                    title : "Overcoming Barriers to Treatment",
                    messageHtml :'<label class="alert alert-info" id="message12"> \
                         <input class="btn video-player" data-video = "/media/vids/message12.mp4" type="button" value="show video"/> \
                     </label>'
                     };

var message13_MoneyManagementTool = {
                    id : "Message13",
                    title : "Money Management Tool",
                    messageHtml :'<label class="alert alert-info" id="message13"> \
                         <input class="btn video-player" data-video = "/media/vids/message13.mp4" type="button" value="show video"/> \
                     </label>'
                     };

var message14_TimeManagementTool = {
                    id : "Message14",
                    title : "Time Management Tool",
                    messageHtml :'<label class="alert alert-info" id="message14"> \
                         <bold>Patients with High Blood Pressure</bold> <br> \
                         Every activity that a patient can do during the day can be placed in one of the four quadrants/sections: <br> \
                             <table class="table table-bordered"> \
                                 <thead> \
                                 <tr> \
                                     <th></th> \
                                     <th>Urgent – Must be done soon and on a particular day</th> \
                                     <th>Not Urgent – Should be done but timing is flexible</th> \
                                 </tr> \
                                 </thead> \
                                 <tbody> \
                                 <tr> \
                                     <td>Important</td> \
                                     <td> Quadrant I <br> \
                                         <ul> \
                                             <li>Seeking medical attention/appointment</li> \
                                             <li>House chores</li> \
                                         </ul> \
                                     </td> \
                                     <td> Quadrant II <br> \
                                         <ul> \
                                             <li>Farming(farm cultivation, planting, animal)</li> \
                                             <li>Visiting friends/relatives</li> \
                                         </ul> \
                                     </td> \
                                 </tr> \
                                 <tr> \
                                     <td>Not Important</td> \
                                     <td> Quadrant III <br> \
                                         <ul> \
                                             <li>Attending celebrations/festivals</li> \
                                         </ul> \
                                     </td> \
                                     <td> Quadrant IV <br> \
                                         <ul> \
                                             <li>Going for vacations</li> \
                                         </ul> \
                                     </td> \
                                 </tr> \
                                 </tbody> \
                             </table> \
                         For you to realize optimum level of health, always place the highest priority on your health<br> \
                     </label>'
                     };

var message15_CommunityResources = {
                    id : "Message15",
                    title : "Community Resources",
                    messageHtml :'<label class="alert alert-info" id="message15"> \
                         Within our community, there are some resources that we can utilize, for us to be empowered socially, financially and economically. These include: <br> \
                        <ol type="1"> \
                            <li>Family Preservation Initiative (FPI) by use of GISE (Group Integrated Savings Empowerment) <br> \
                                <ol type="a"> \
                                    <li>The groups  are formed within a community where they contribute their savings and later they can loan it to members</li> \
                                    <li>They also encourage agribusiness to their members as well as teaching the group members on proposal writing where they can apply for grants for development.</li> \
                                </ol> \
                            </li> \
                            <li>Ministry of Agriculture- The Agricultural Extension Workers help in advising the community on how to do farming as well as encourage them on water harvesting which can help in farming through irrigation.</li> \
                            <li>Ministry of gender, sports and youth affairs- they address the welfare of the women and youths in the community through empowerment</li> \
                        </ol> \
                     </label>'
                     };

var message16_PreEclampsia = {
                    id : "Message16",
                    title : "Pre-eclampsia",
                    messageHtml :'<label class="alert alert-info" id="message16"> \
                         <input class="btn video-player" data-video = "/media/vids/message16.mp4" type="button" value="show video"/> \
                     </label>'
                     };