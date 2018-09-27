import React from 'react';

class QuestionInstructions extends React.Component {
    render() {
        return (
            
            <div className="row border-bottom" >
            
            <div className="col-md-4 mt-2 mb-2">
            <button type="button" class="btn btn-outline-primary btn-md btn-block">Low Difficulty Questions</button>
          
           </div>

           <div className="col-md-4 mt-2 mb-2">
           <button type="button" class="btn btn-outline-warning btn-md btn-block">Medium Difficulty Questions</button>
           </div>

        <div className="col-md-4 mt-2 mb-2">
        <button type="button" class="btn btn-outline-danger btn-md btn-block">High Difficulty Questions</button>
           </div>

           </div>
          
        )
    }
}
export default QuestionInstructions;

