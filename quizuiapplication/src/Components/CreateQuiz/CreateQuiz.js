import React from 'react';
import './CreateQuiz.css';
import QuizInstruction from './QuizInstruction';
import QuestionLevelRowComponent from './QuestionLevelRowComponent';
class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
     onOpenModal() {
        this.setState({ open: true });
    }
     onCloseModal() {
        this.setState({ open: false });
    }
    render() {
        return (
            <div className="border-bottom">
                <QuizInstruction/>
            <div  >
                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForLow">
                        1
                    </span>
                    <label className="levelIndicationLabel">
                        Low Difficulty Level - Maximum 6 questions
                    </label>
                </div>
             <QuestionLevelRowComponent/>
            </div >

              <div >
                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForMedium">
                        2
                    </span>
                    <label className="levelIndicationLabel">
                        Medium Difficulty Level - Maximum 7 questions
                    </label>
                </div>
             <QuestionLevelRowComponent/>
            </div >

              <div >
                <div className="questionLevelIndication">
                    <span className="levelIndicatorBtn backgroundColorForHigher">
                        3
                    </span>
                    <label className="levelIndicationLabel">
                        Higher Difficulty Level - Maximum 7 questions
                    </label>
                </div>
             <QuestionLevelRowComponent/>
            </div >
            <div className="doneBtnSize mx-auto border-bottom border-dark">
            <button className="btn btn-primary btn-block">Done</button>
            </div>
</div>
        );
    }
}
 export default CreateQuiz;