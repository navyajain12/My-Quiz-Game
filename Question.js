class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Option No.")




    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')    
    this.option3 = createElement('h4')    
    this.option4 = createElement('h4')    



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();

    this.option1.hide()    
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()
    this.button.hide()
    this.question.hide()
    this.input2.hide()

    this.Question.hide()
  }

  display(){
    this.title.html("QuizBee");
    this.title.position(350, 0);

    this.question.html("Question: What starts with “e”, ends with “e” and has only one letter in it?")
    this.question.position(130,70)

    this.option1.html("1. Everyone")
    this.option1.position(130,130)

    this.option2.html("2. Enevelope")
    this.option2.position(130,160)

    this.option3.html("3. Estimate")
    this.option3.position(130,190)

    this.option4.html("4. Example")
    this.option4.position(130,220)





    this.input1.position(350, 275);

    this.input2.position(350,300)
    this.button.position(400, 350);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank you, your form was sent successfully : )")
      this.message.position(200,200)
      this.hide()

      


    })


  }
}
