import React from 'react';
import QuestionInstructions from './QuestionInstructions';
import DifficultyLevelButton from './DifficultyLevelButton';
import './FetchQuestion.css';
import QuestionListDropdown from './QuestionListDropdown';
import QuestionDetails from './QuestionDetails';
class FetchedQuestionComponent extends React.Component {
    state={
        showLowLevel:true,
        showMedLevel:false,
        showHighLevel:false
    }

    lowButtonClicked =()=>{
        this.setState({
            showLowLevel:true,
            showMedLevel:false,
            showHighLevel:false
        })
    }
    medButtonClicked =()=>{
        this.setState({
            showLowLevel:false,
            showMedLevel:true,
            showHighLevel:false
        })
    }
    highButtonClicked =()=>{
        this.setState({
            showLowLevel:false,
            showMedLevel:false,
            showHighLevel:true
        })
    }
    render() {
        console.log(this.state.showLowLevel);
        const template = this.state.showLowLevel? (
                <div className="col-md-6 border-right scrollbar" >
               <h1>1</h1>
                <QuestionListDropdown/>
    
                </div>
            ) : ( this.state.showMedLevel
                    ? <div className="col-md-6 border-right scrollbar" >
                   <h1>2</h1>
                    <QuestionListDropdown/>
        
                    </div>
                :( this.state.showHighLevel?
                    <div className="col-md-6 border-right scrollbar" >
                     <h1>3</h1>
                    <QuestionListDropdown/>

                    </div>
                    : <div className="col-md-6 border-right scrollbar" >
                    <h3>Error</h3>
                    <QuestionListDropdown/>

                    </div>
                )
            )
        return (
        <div>
            <QuestionInstructions/>
            <DifficultyLevelButton 
            lowButtonClicked={this.lowButtonClicked}
            medButtonClicked={this.medButtonClicked} 
            highButtonClicked={this.highButtonClicked}/>
            <div className="row mt-2" >
           {template}
        
            <div className="col-md-6">
           < QuestionDetails/>
            </div>

            </div>
      </div>
        )
    }
}
export default FetchedQuestionComponent;

