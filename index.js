
const MobileMediaScreen1 = window.matchMedia('(min-width:320px) and (max-width: 397px)');
const MobileMediaScreen2 = window.matchMedia('(min-width:398px) and (max-width: 450px)');
const MobileMediaScreen3 = window.matchMedia('(min-width:451px) and (max-width: 490px)');

const TabletMediaScreen = window.matchMedia('(min-width:491px) and (max-width: 580px)');

const TabletMediaScreen2 = window.matchMedia('(min-width:581px) and (max-width: 768px)');

const SmallMediaScreen = window.matchMedia('(min-width:769px) and (max-width: 1024px)');

const MedMediaScreen = window.matchMedia('(min-width:1025px) and (max-width: 1200px)');

const LargeMediaScreen = window.matchMedia('(min-width:1201px) and (max-width: 1445px)');

const EXLargeMediaScreen = window.matchMedia('(min-width:1446px) and (max-width: 1620px)');

const EXLargeMediaScreen2 = window.matchMedia('(min-width:1621px) and (max-width: 2000px)');

const EXLargeMediaScreen3 = window.matchMedia('(min-width:2001px)');



let BrainJucies_HintBtn = false;
let BrainJucies_HintMoreBtn = false;
let ClairesQuestion_CorrectAnswer = false;
let Remark1_Answer = false;
let AlgoNote_Anser = false;


//helper function to change text in HTML div
function changeContent(selectedDiv, value)
{
    document.querySelector(selectedDiv).innerHTML = value;
}



// ========================== Hint ==============================



const hintButton = document.querySelector('.button_hint');
const hintIMG = document.getElementById('hintIMG');
const hintMessageDiv = document.getElementById('BrainJuice_Qs1');
const hintMessage = document.getElementById('Q2text');
const hintBtn2 = document.getElementById('Button2');

let Hint1Clicked = false;

hintButton.addEventListener('click', function()
{
    if(Hint1Clicked == false)
    {
        hintIMG.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css
        hintButton.classList.remove("button_hint"); 
        hintButton.classList.add("button_hint_active");

        hintMessageDiv.style.height="11em";
        hintMessage.classList.remove("hide"); //show the hidden message
        hintBtn2.classList.remove("hide");

        Hint1Clicked = !Hint1Clicked; //now the hint button has been clicked. 
        BrainJucies_HintBtn = true;

    }

    else //to contract the hint button to hide everything
    {
        hintIMG.src = 'Assets/Assets_Qmark.png';
        hintButton.classList.remove("button_hint_active");
        hintButton.classList.add("button_hint");

        hintMessage.classList.add("hide");
        hintBtn2.classList.add("hide");

        
        hintMessageDiv.style.height=".5em";

        hintMoreButton.classList.remove("button_hintMore_active");
        hintMoreButton.classList.add("button_hintMore");

        
        Hint1Clicked = !Hint1Clicked; //now the hint button hasnt been clicked. 
        BrainJucies_HintBtn = false;


        if (Hint2Clicked == true)
        {
            hintMoreButton.classList.remove("button_hintMore_active");
            hintMoreButton.classList.add("button_hintMore");
     
            hint2Message.classList.add("hide"); //hide the message

            Hint2Clicked = !Hint2Clicked; //now it is back to normal, not clicked yet
             BrainJucies_HintMoreBtn = false;
        }


    }

}); 




// ========================== HintMore ==============================


const hintMoreButton = document.getElementById('button_hintMore');

const hint2MessageDiv = document.getElementById('BrainJuice_Qs2');
const hint2Message = document.getElementById('Q2Expltext');

let Hint2Clicked = false;


hintMoreButton.addEventListener('click', function()
{
   if(Hint2Clicked == false) //if hint more button hasnt been clicked - expand
   {
       hintMoreButton.classList.remove("button_hintMore"); //change button look to clicked
       hintMoreButton.classList.add("button_hintMore_active");


       hint2Message.classList.remove("hide"); //show the second hidden message

   
       Hint2Clicked = !Hint2Clicked; //now it has been clicked

        BrainJucies_HintMoreBtn = true;

   }
   else //if already clicked and want to contract
   {
       hintMoreButton.classList.remove("button_hintMore_active");
       hintMoreButton.classList.add("button_hintMore");

       hint2Message.classList.add("hide"); //hide the message
      // hint2MessageDiv.style.height="";


       Hint2Clicked = !Hint2Clicked; //now it is back to normal, not clicked yet
        BrainJucies_HintMoreBtn = false;
   }
}); 






// ========================== Choose4 ==============================



const optionA4 = document.getElementById("4a");
const optionB4 = document.getElementById("4b");
const optionC4 = document.getElementById("4c");

const submitBtn4 = document.querySelector(".chooseNext4_submitBtn");
const submitBtn4P = document.getElementById("4submitbtnP");

const chooseNext4Expl = document.querySelector(".chooseNext4_Explanation");
const chooseNext4ExplDIV = document.getElementById("MainLesson_ChooseNext4_ANS");



//change submit when radio selected

if(document.querySelector('input[name="multipleChoice4Choose"]'))
{
    document.querySelectorAll('input[name="multipleChoice4Choose"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtn4.classList.remove("btn_submit");
            submitBtn4.classList.add("btn_submit_active");
            submitBtn4P.classList.remove("btn_submit_og");
            submitBtn4P.classList.add("btn_submit_after");

            console.log("clicked");
        });

    });
}


submitBtn4.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionA4.checked)
    {
         chooseNext4ExplDIV.style.height="7em";

        changeContent(".chooseNext4_Explanation", "<p> <span> Try again! </span> <br> There may be a different path with a shorter time estimation. </p>");
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionB4.checked)
    {
         chooseNext4ExplDIV.style.height="7em";

        changeContent(".chooseNext4_Explanation", "<p> <span> Correct! </span> <br> The bank location has the shortest time estimation. </p>");
    }

    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionC4.checked)
    {
        chooseNext4ExplDIV.style.height="9em";

        changeContent(".chooseNext4_Explanation", "<p> <span> Try again! </span> <br> Claire would definitely make it before her appointment, but she needs to visit the bank and post office before her appointment. </p>");
    }


});




// ========================== Update4 ==============================


const optionA4U = document.getElementById("U4a");
const optionB4U = document.getElementById("U4b");
const optionC4U = document.getElementById("U4c");

const submitBtn4U = document.querySelector(".update4_submitBtn");
const submitBtn4UP = document.getElementById("U4submitbtnP");

const chooseNext4UExpl = document.querySelector(".update4_Explanation");
const chooseNext4UExplDIV = document.getElementById("MainLesson_Update4_ANS");



//change submit when radio selected

if(document.querySelector('input[name="multipleChoice4Update"]'))
{
    document.querySelectorAll('input[name="multipleChoice4Update"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtn4U.classList.remove("btn_submit");
            submitBtn4U.classList.add("btn_submit_active");
            submitBtn4UP.classList.remove("btn_submit_og");
            submitBtn4UP.classList.add("btn_submit_after");
        });

    });
}


submitBtn4U.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionA4U.checked)
    {
      chooseNext4UExplDIV.style.height="8em";
        changeContent(".update4_Explanation", "<p> <span> Try again! </span> <br> Review the previous steps that we worked together to calculate the correct values. </p>");
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionB4U.checked)
    {
        chooseNext4UExplDIV.style.height="8em";
        changeContent(".update4_Explanation", "<p> <span> Try again! </span> <br> Review the previous steps that we worked together to calculate the correct values. </p>");
    }

    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionC4U.checked)
    {
        chooseNext4UExplDIV.style.height="7em";
        changeContent(".update4_Explanation", "<p> <span> Correct! </span> <br> Let’s move on to the next unvisited location. </p>");
    }


});






// ========================== Choose5 ==============================


const optionA5 = document.getElementById("5a");
const optionB5 = document.getElementById("5b");

const submitBtn5 = document.querySelector(".chooseNext5_submitBtn");
const submitBtn5P = document.getElementById("5submitbtnP");

const chooseNext5Expl = document.querySelector(".chooseNext5_Explanation");
const chooseNext5ExplDIV = document.getElementById("MainLesson_ChooseNext5_ANS");


//change submit when radio selected

if(document.querySelector('input[name="multipleChoiceChoose5"]'))
{
    document.querySelectorAll('input[name="multipleChoiceChoose5"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtn5.classList.remove("btn_submit");
            submitBtn5.classList.add("btn_submit_active");
            submitBtn5P.classList.remove("btn_submit_og");
            submitBtn5P.classList.add("btn_submit_after");
        });

    });
}


submitBtn5.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionA5.checked)
    {
        chooseNext5ExplDIV.style.height="7em";
        changeContent(".chooseNext5_Explanation", "<p> <span> Correct! </span> <br> The Post Office location has the shortest time estimation. </p>");
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionB5.checked)
    {
        chooseNext5ExplDIV.style.height="9em";
        changeContent(".chooseNext5_Explanation", "<p> <span> Try again! </span> <br> Claire would definitely make it before her appointment, but she needs to visit the post office before her appointment </p>");
    }

});



// ========================== Update5 ==============================


const optionA5U = document.getElementById("U5a");
const optionB5U = document.getElementById("U5b");
const optionC5U = document.getElementById("U5c");

const submitBtn5U = document.querySelector(".update5_submitBtn");
const submitBtn5UP = document.getElementById("U5submitbtnP");

const chooseNext5UExpl = document.querySelector(".update5_Explanation");
const chooseNext5UExplDIV = document.getElementById("MainLesson_Update5_ANS");


//change submit when radio selected

if(document.querySelector('input[name="multipleChoice5U"]'))
{
    document.querySelectorAll('input[name="multipleChoice5U"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtn5U.classList.remove("btn_submit");
            submitBtn5U.classList.add("btn_submit_active");
            submitBtn5UP.classList.remove("btn_submit_og");
            submitBtn5UP.classList.add("btn_submit_after");
        });

    });
}


submitBtn5U.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionA5U.checked)
    {
        chooseNext5UExplDIV.style.height="7em";
        changeContent(".update5_Explanation", "<p> <span> Correct! </span> <br> Let’s move on to the next unvisited location. </p>");
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionB5U.checked)
    {
        chooseNext5UExplDIV.style.height="8em";
        changeContent(".update5_Explanation", "<p> <span> Try again! </span> <br> Review the previous steps that we worked together to calculate the correct values. </p>");
    }

    
    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionC5U.checked)
    {
        chooseNext5UExplDIV.style.height="8em";
        changeContent(".update5_Explanation", "<p> <span> Try again! </span> <br> Review the previous steps that we worked together to calculate the correct values.</p>");
    }


});





// ========================== Claire's Problem ==============================


const optionACL = document.getElementById("CLa");
const optionBCL = document.getElementById("CLb");
const optionCCL = document.getElementById("CLc");
const optionDCL = document.getElementById("CLd");

const submitBtnCL = document.getElementById("clairesAnswer_submitBtn");
const submitBtnCLP = document.getElementById("CLsubmitbtnP");

const CLExpl = document.querySelector(".clairesAnswer_Explanation");
//const CLExplDIV = document.querySelector(".ClairesProblem_ANS");
const CLExplDIV = document.getElementById("ClairesProblem_ANS");
const CLCelebrateDIV = document.getElementById("ClairesProblem_ANS_Correct");

const ClaireCelebrating = document.getElementById("ClareCelebrating");

//const ClaireProblemQDIV = document.getElementById("ClairesProblem");



//change submit when radio selected

if(document.querySelector('input[name="multipleChoiceCL"]'))
{
    document.querySelectorAll('input[name="multipleChoiceCL"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtnCL.classList.remove("btn_submit");
            submitBtnCL.classList.add("btn_submit_active");
            submitBtnCLP.classList.remove("btn_submit_og");
            submitBtnCLP.classList.add("btn_submit_after");
        });

    });
}


submitBtnCL.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionACL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Almost correct. </span> <br>recheck your calculations and try again. </p>");
        CLExplDIV.style.height="6em";

        //console.log("hello? should be working");

        //remove Claire celebrating
        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionBCL.checked)
    {
 /*       
        if(MobileMediaScreen2.matches)
        {
            //changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
            changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
            changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");


            CLExplDIV.style.height="5em";
            CLCelebrateDIV.style.height="8em";
            /*
            ClaireCelebrating.style.top="-284px";
            ClaireCelebrating.style.left="-175px";*/

           // console.log("hello?");
 //           ClairesQuestion_CorrectAnswer = true;
 //       }
 //       else if(MobileMediaScreen3.matches)
 //       {
            //changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
 //           changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
 //           changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");


 //           CLExplDIV.style.height="5em";
 //           CLCelebrateDIV.style.height="8em";
            /*
            ClaireCelebrating.style.top="-284px";
            ClaireCelebrating.style.left="-175px";*/

           // console.log("hello?");
 //           ClairesQuestion_CorrectAnswer = true;
 //      }
 //       else if(SmallMediaScreen.matches)
 //       {
            //changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
 //           changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
 //           changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");


   //         CLExplDIV.style.height="5em";
   //         CLCelebrateDIV.style.height="8em";
            /*
            ClaireCelebrating.style.top="-284px";
            ClaireCelebrating.style.left="-175px";*/

           // console.log("hello?");
  //          ClairesQuestion_CorrectAnswer = true;
 //       }
        //(min-width:1201px) and (max-width: 1445px)
//        else if(LargeMediaScreen.matches)
//        {
           // changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");
           // changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
//           changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
//           changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

           // CLExplDIV.style.height="14em";
 //          CLExplDIV.style.height="5em";
 //          CLCelebrateDIV.style.height="8em";
 //           ClairesQuestion_CorrectAnswer = true;
 //       }
        //(min-width:1446px) and (max-width: 1620px)
 //       else if(EXLargeMediaScreen.matches)
//        {
            //changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
//            changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
 //           changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

            //CLExplDIV.style.height="16em";
 //           CLExplDIV.style.height="5em";
 //           CLCelebrateDIV.style.height="8em";
 //           ClairesQuestion_CorrectAnswer = true;
 //       }
        //(min-width:1621px) and (max-width: 2000px)
  //      else if(EXLargeMediaScreen2.matches)
   //     {
           // changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
 //          changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
 //          changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

           // CLExplDIV.style.height="15.5em";
  //         CLExplDIV.style.height="5em";
  //         CLCelebrateDIV.style.height="8em";
  //          ClairesQuestion_CorrectAnswer = true;
  //      }
        //(min-width:2001px)
 //       else if(EXLargeMediaScreen3.matches)
  //      {
           // changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
 //          changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
  //         changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

           // CLExplDIV.style.height="12em";
   //        CLExplDIV.style.height="5em";
 //          CLCelebrateDIV.style.height="8em";
  //          ClairesQuestion_CorrectAnswer = true;
  //      }
        //all other screen sizes
//        else
 //       {
  //          changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
 //           changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

           //changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'><img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'></div>");
           // changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> <div class='ClareCelebrating'></div>");

           // CLExplDIV.style.height="40dvw";
    //       CLExplDIV.style.height="5em";
   //        CLCelebrateDIV.style.height="8em";
    //        ClairesQuestion_CorrectAnswer = true;
          //  console.log("default executed");
   //     }


        changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
        changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

        CLExplDIV.style.height="5em";
        CLCelebrateDIV.style.height="8em";
        ClairesQuestion_CorrectAnswer = true;




    }   

    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionCCL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Try again! </span> <br> Perhaps recheck your calculations, because Claire needs to complete her errands before her doctors appointment.</p>");
        CLExplDIV.style.height="7.2em";

        //remove Claire celebrating
        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";

    }

    if(optionDCL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Try again! </span> <br> Perhaps recheck your calculations, because Claire needs to complete her errands before her doctors appointment.</p>");
        CLExplDIV.style.height="7.2em";

        //remove Claire celebrating
        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";
    }


});



submitBtnCLP.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionACL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Almost correct. </span> <br>recheck your calculations and try again. </p>");
        CLExplDIV.style.height="6em";

        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionBCL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Correct! Great job!! </span> <br> </p> ");
        changeContent(".ClareCelebrating", "<img class='ClareCelebratingGIF' src='Animations/Final_Clare_Celebrating_GIF_new.gif' alt='Claire Celebrating'>");

        CLExplDIV.style.height="5em";
        CLCelebrateDIV.style.height="8em";
        ClairesQuestion_CorrectAnswer = true;
    }   

    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionCCL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Try again! </span> <br> Perhaps recheck your calculations, because Claire needs to complete her errands before her doctors appointment.</p>");
        CLExplDIV.style.height="7.2em";

        //remove Claire celebrating
        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";

    }

    if(optionDCL.checked)
    {

        changeContent(".clairesAnswer_Explanation", "<p> <span> Try again! </span> <br> Perhaps recheck your calculations, because Claire needs to complete her errands before her doctors appointment.</p>");
        CLExplDIV.style.height="7.2em";

        //remove Claire celebrating
        changeContent(".ClareCelebrating", "");
        //close celebrate DIV 
        CLCelebrateDIV.style.height=".1em";
    }


});




// ========================== Remark ==============================




const revealAnswerBtn = document.getElementById("remark1BtnSubmit");
const remark1Answer = document.getElementById("RemarkExpl");
const remark1AnswerDIV = document.getElementById("CheckUnderstanding_Remark_ANS");

let revealBtnClicked = false;

revealAnswerBtn.addEventListener('click', function()
{

    if (revealBtnClicked == false)
    {
        revealAnswerBtn.classList.replace('button_RevealRemark1','button_RevealRemark1_active');
        remark1Answer.classList.remove("hide");
        
        remark1AnswerDIV.style.height="44em";

        revealBtnClicked = !revealBtnClicked;
        Remark1_Answer = true;
    }

    else
    {

        revealAnswerBtn.classList.replace('button_RevealRemark1_active','button_RevealRemark1');
        remark1Answer.classList.add("hide");

        remark1AnswerDIV.style.height="80px";

        revealBtnClicked = !revealBtnClicked;
        Remark1_Answer = false;
    }


});






// ========================== Quiz1 ==============================


const optionACQ1 = document.getElementById("CheckQuiz1a");
const optionBCQ1 = document.getElementById("CheckQuiz1b");
const optionCCQ1 = document.getElementById("CheckQuiz1c");
const optionDCQ1 = document.getElementById("CheckQuiz1d");

const submitBtnCQ1 = document.querySelector(".checkQs1_submitBtn");
const submitBtnCQ1P = document.getElementById("CUquzi1submitbtn");

//const CQ1Expl = document.getElementById("quiz1_Expl");

const CQ1ExplDIV = document.getElementById("CheckUnderstanding_Quiz1_ANS");



//change submit when radio selected

if(document.querySelector('input[name="multipleChoiceCheckQuiz1"]'))
{
    document.querySelectorAll('input[name="multipleChoiceCheckQuiz1"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtnCQ1.classList.remove("btn_submit");
            submitBtnCQ1.classList.add("btn_submit_active");
            submitBtnCQ1P.classList.remove("btn_submit_og");
            submitBtnCQ1P.classList.add("btn_submit_after");
        });

    });
}


submitBtnCQ1.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionACQ1.checked)
    {
        CQ1ExplDIV.style.height="4em";
        changeContent('.quiz1_ExplP', '<span> Try again! </span>');
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionBCQ1.checked)
    {
        CQ1ExplDIV.style.height="4em";
        changeContent(".quiz1_ExplP", "<span> Correct! </span> <br>");
    }

    
    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionCCQ1.checked)
    {
        CQ1ExplDIV.style.height="4em";
        changeContent(".quiz1_ExplP", "<span> Try again! </span> <br>");
    }

    if(optionDCQ1.checked)
    {
 
        CQ1ExplDIV.style.height="4em";
        changeContent(".quiz1_ExplP", "<span> Try again! </span>");
    }


});



// ========================== Quiz2 ==============================



const optionACQ2 = document.getElementById("CheckQuiz2a");
const optionBCQ2 = document.getElementById("CheckQuiz2b");
const optionCCQ2 = document.getElementById("CheckQuiz2c");
const optionDCQ2 = document.getElementById("CheckQuiz2d");

const submitBtnCQ2 = document.querySelector(".checkQs2_submitBtn");
const submitBtnCQ2P = document.getElementById("CUquzi2submitbtn");

//const CQ2Expl = document.getElementsByClassName("quiz1_Expl");
const CQ2ExplDIV = document.getElementById("CheckUnderstanding_Quiz2_ANS");



//change submit when radio selected

if(document.querySelector('input[name="multipleChoiceCheckQuiz2"]'))
{
    document.querySelectorAll('input[name="multipleChoiceCheckQuiz2"]').forEach((radio) =>
    {
        radio.addEventListener("change", function(event) {

            submitBtnCQ2.classList.remove("btn_submit");
            submitBtnCQ2.classList.add("btn_submit_active");
            submitBtnCQ2P.classList.remove("btn_submit_og");
            submitBtnCQ2P.classList.add("btn_submit_after");
        });

    });
}


submitBtnCQ2.addEventListener('click', function()
{

    // if 4a is clicked, i.e, optionA.checked == true, then div expand and show message

    if(optionACQ2.checked)
    {
        CQ2ExplDIV.style.height="4em";
        changeContent('.quiz2_ExplP', '<span> Try again! </span>');
    }

    // if 4b is clicked, i.e, optionB.checked == true, then div expand and show message

    if(optionBCQ2.checked)
    {
        CQ2ExplDIV.style.height="4em";
        changeContent(".quiz2_ExplP", "<span> Try again! </span> <br>");
    }

    
    // if 4c is clicked, i.e, optionC.checked == true, then div expand and show message

    if(optionCCQ2.checked)
    {
        CQ2ExplDIV.style.height="4em";
        changeContent(".quiz2_ExplP", "<span> Try again! </span> <br>");
    }

    if(optionDCQ2.checked)
    {
        CQ2ExplDIV.style.height="10em";
        changeContent(".quiz2_ExplP", "<span> Correct! </span> <br> This is because Dijkstra’s Algorithm only produces the shortest path from the source vertex to all other vertices. So it does not analyze the shortest path between all other vertices.");
    }


});




// ========================== Note ==============================


const AlgoNoteBtn = document.getElementById("AlgoNoteBtn");
const noteAnswer = document.getElementById("AlgorithmNote");
const hintIMGnote = document.getElementById('hintIMGnote');
const noteAnswerP = document.getElementById("AlgorithmNoteP");
const AlgoDiv = document.getElementById('DA_Terms_Note');

//false if not clicked
//true if clicked
let AlgoNoteBtnClicked = false;

AlgoNoteBtn.addEventListener('click', function()
{

    if (AlgoNoteBtnClicked == false)
    { 
        //(min-width:581px) and (max-width: 768px)
        if(TabletMediaScreen2.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="20em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //(min-width:1025px) and (max-width: 1200px)
        else if(MedMediaScreen.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="20em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //(min-width:1201px) and (max-width: 1445px)
        else if(LargeMediaScreen.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="20em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //(min-width:1446px) and (max-width: 1620px)
        else if(EXLargeMediaScreen.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="18em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //(min-width:1621px) and (max-width: 2000px)
        else if(EXLargeMediaScreen2.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="18em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //(min-width:2001px)
        else if(EXLargeMediaScreen3.matches)
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="21.5em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
        //all other screen sizes
        else
        {
            hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

            AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
            noteAnswerP.classList.remove("hide");
     
            AlgoDiv.style.height="24em";
             AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
             AlgoNote_Anser = true;
        }
    }

    else
    {
        hintIMGnote.src = 'Assets/Assets_Qmark.png';
        AlgoNoteBtn.classList.replace('button_hint_active','button_hint');
        noteAnswerP.classList.add("hide");
        AlgoDiv.style.height="4em";
        AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
        AlgoNote_Anser = false;
    }


});



/*
const AlgoNoteBtn = document.getElementById("AlgoNoteBtn");
const noteAnswer = document.getElementById("AlgorithmNote");
const hintIMGnote = document.getElementById('hintIMGnote');
const noteAnswerP = document.getElementById("AlgorithmNoteP");
const AlgoDiv = document.getElementById('DA_Terms_Note');

//false if not clicked
//true if clicked
let AlgoNoteBtnClicked = false;

AlgoNoteBtn.addEventListener('click', function()
{

    if (AlgoNoteBtnClicked == false)
    { 

       hintIMGnote.src = 'Assets/Assets_QmarkActive.png'; //change button to clicked apperance and change css

       AlgoNoteBtn.classList.replace('button_hint','button_hint_active');
       noteAnswerP.classList.remove("hide");

       AlgoDiv.style.height="24em";
        AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
        AlgoNote_Anser = true;
    }

    else
    {
        hintIMGnote.src = 'Assets/Assets_Qmark.png';
        AlgoNoteBtn.classList.replace('button_hint_active','button_hint');
        noteAnswerP.classList.add("hide");
        AlgoDiv.style.height="4em";
        AlgoNoteBtnClicked = !AlgoNoteBtnClicked;
        AlgoNote_Anser = false;
    }


});
*/










// ========================== ProgressBar ==============================

let getScroll;
let windowHeight = window.innerHeight;
const scrollProgress = document.getElementById("progressBar");

const calculateProgress = () => {

    const mainHeight = document.documentElement.scrollHeight;
    const scrollableHeight = mainHeight - windowHeight;

    //if the user has not scrolled yet, then the value of the progress width is 0.
    //below, the event listener will add a value to getScroll thus this will not be 0.
    //it will get
    const progressWidth = (getScroll*100) / (scrollableHeight) || 0;

    scrollProgress.style.width = progressWidth + "%"; 
};

calculateProgress();

new ResizeObserver(calculateProgress).observe(document.body);

window.addEventListener("scroll", () => {

    getScroll = window.scrollY;

    requestAnimationFrame(calculateProgress);

});






// ========================== ProgressBar SECTIONS ==============================

const section_start = document.getElementById("section_start");
const section_ClairesIntro = document.getElementById("section_ClairesIntro");
const section_PreLesson = document.getElementById("section_PreLesson");
const section_BrainJuice = document.getElementById("section_BrainJuice");
const section_ApplyAlgo = document.getElementById("section_ApplyAlgo");
const section_ClairesProblem = document.getElementById("section_ClairesProblem");
const section_CheckUnderstanding = document.getElementById("section_CheckUnderstanding");
const section_DijkstraAlgo = document.getElementById("section_DijkstraAlgo");
const section_Applications = document.getElementById("section_Applications");
const section_Conclusion = document.getElementById("section_Conclusion");
const section_end = document.getElementById("section_end");

/* BLANKS
section_start.style.left="";
section_ClairesIntro.style.left="";
section_PreLesson.style.left="";
section_BrainJuice.style.left="";
section_ApplyAlgo.style.left="";
section_ClairesProblem.style.left="";
section_CheckUnderstanding.style.left="";
section_DijkstraAlgo.style.left="";
section_Applications.style.left="";
section_Conclusion.style.left="";
section_end.style.left="";
*/


//window.onscroll = function(){
//console.log(window.pageYOffset);
//
//};


//const intro = 0;
const claireIntro = 650;
const preLesson = 1850;
const brainJ = 4969;
const applyDA = 5449;
const claireP = 16684;
const checkU = 17552;
const DA = 18475;
const app = 20975;
//const conclusion = 19000;


//const calculateSectionLocation = () => {

 //   const mainHeight = document.documentElement.scrollHeight;
    //const scrollableHeight = mainHeight - windowHeight;

    //if the user has not scrolled yet, then the value of the progress width is 0.
    //below, the event listener will add a value to getScroll thus this will not be 0.
    //it will get

   // const progressWidth = (getScroll*100) / (scrollableHeight) || 0;

   // scrollProgress.style.width = progressWidth + "%"; 

//(claireIntro*100) / mainHeight

        //section_start.style.left= ((intro*100) / mainHeight) + "dvw";
 //       section_ClairesIntro.style.left= ((claireIntro*100) / mainHeight) + "dvw";
 //       section_PreLesson.style.left= ((preLesson*100) / mainHeight) + "dvw";
 //       section_BrainJuice.style.left= ((brainJ*100) / mainHeight) + "dvw";
 //       section_ApplyAlgo.style.left= ((applyDA*100) / mainHeight) + "dvw";
 //       section_ClairesProblem.style.left= ((claireP*100) / mainHeight) + "dvw";
//        section_CheckUnderstanding.style.left= ((checkU*100) / mainHeight) + "dvw";
 //       section_DijkstraAlgo.style.left= ((DA*100) / mainHeight) + "dvw";
//        section_Applications.style.left= ((app*100) / mainHeight) + "dvw";
       // section_Conclusion.style.left= ((conclusion*100) / mainHeight) + "dvw";

 //   console.log("this shouuuuuld work");

//};



//calculateSectionLocation();


//new ResizeObserver(calculateSectionLocation).observe(document.body);









// ========================== Magnific Popup ==============================



$('#update5-options').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });


$('#update4-options').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });

$('#Map').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });

$('.Digraph').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });
    

$('#DAAlgo').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });

    

$('#RemarkExpl').magnificPopup(
    { // the containers for all your galleries
        delegate: 'a', // the selector for gallery item
        type: 'image',
        titleSrc: 'title',
        cursor: 'mfp-zoom-out-cur',
        showCloseBtn: false,
        closeOnContentClick: true

    });
    
