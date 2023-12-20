import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../../Loader/Loader";
import { getTempQuestion } from '../../../actions/tempQuestionsAction'; 
import { fetchSetQuestion } from '../../../actions/questionActions'; 
import { useNavigate } from 'react-router-dom';
import "./Question.css";

const Questions = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const [questionSet, setQuestionSet] = useState('questions'); // Initially, display questions
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate() ; 
  useEffect(() => {
    dispatch(getTempQuestion());
  }, [dispatch]);

  const { loading, questions } = useSelector((state) => state.question);
  const {   questionn } = useSelector((state) => state.questionn);
  const {user , }  =  useSelector((state)=>state.user) ;   

  const handleCheckboxChange = (questionId, evaluationType, questionText, category) => {
    setFormData((prevData) => {
      const updatedData = [...prevData];
      const questionIndex = updatedData.findIndex((q) => q.id === questionId);

      if (questionIndex !== -1) {
        updatedData[questionIndex][evaluationType] = !updatedData[questionIndex][evaluationType];
      } else {
        updatedData.push({
          id: questionId,
          questionText: questionText, // Include the question text
          category: category, // Include the category
          [evaluationType]: true,
        });
      }

      return updatedData;
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();  
    navigate("/ResultsDashBoard") ;

  };
   console.log(user) ; 
  const handleNextSet = async () => {
    // Switch to the next set of questions  
    const formDataWithUserId = await formData.map(data => ({
      ...data,
      user_id: user._id ,
    }));    
    
  //  await setFormData(formDataWithUserId) ;   
    const newForm  = {"queries": formDataWithUserId} ;   
    
    setFormData(newForm) ; 
    console.log(formData) ; 


    dispatch(fetchSetQuestion(newForm)); 
   
  if(questionn  && questionn == undefined) setQuestionSet(questionSet === 'questions' ? 'questionn' : 'questions');   
  else dispatch(getTempQuestion()) ;
    
    // Reset formData for the new set of questions  
    setFormData([]);
  };
  
  const handlePause = () => {
      navigate('/toNmap')
  };

  return (
    <Fragment>
      {(loading === undefined || (loading === true && (questions === undefined || questions.length === 0)) || loading || questions === undefined)? (
        <div> <Loader/></div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <table className="questions-table">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Yes</th>
                  <th>No</th>
                  <th>Partial</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {questionSet === 'questions' ? (
                  // Display questions from the 'questions' set
                  questions.map((question) => (
                    <tr key={question.id}>
                      <td>{question.question}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={formData.some((data) => data.id === question.id && data.yes)}
                          onChange={() => handleCheckboxChange(question.id, 'yes' , question.question , question.category)}
                          disabled={isPaused}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={formData.some((data) => data.id === question.id && data.no)}
                          onChange={() => handleCheckboxChange(question.id, 'no' , question.question , question.category)}
                          disabled={isPaused}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={formData.some((data) => data.id === question.id && data.partial)}
                          onChange={() => handleCheckboxChange(question.id, 'partial' ,  question.question , question.category)}
                          disabled={isPaused}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          checked={formData.some((data) => data.id === question.id && data.confidence)}
                          onChange={() => handleCheckboxChange(question.id, 'confidence', question.question , question.category)}
                          disabled={isPaused}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  // Display questions from the 'questionn' set
                  (questionn === undefined || questionn.length === 0 || questionn === null) ? (
                    // Show loader if 'questionn' is not defined or empty
                   <Loader/>
                    
                  ) : ( questionn.map((question) => (
                    <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.yes)}
                        onChange={() => handleCheckboxChange(question.id, 'yes' , question.question  , question.category)}
                        disabled={isPaused}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.no)}
                        onChange={() => handleCheckboxChange(question.id, 'no' , question.question , question.category)}
                        disabled={isPaused}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.partial)}
                        onChange={() => handleCheckboxChange(question.id, 'partial' ,  question.question , question.category)}
                        disabled={isPaused}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.confidence)}
                        onChange={() => handleCheckboxChange(question.id, 'confidence', question.question , question.category)}
                        disabled={isPaused}
                      />
                    </td>
                  </tr>
                  )))
                )}
              </tbody>
            </table>
            <button type="submit" disabled={isPaused}>Submit</button>
            <button type="button" onClick={handleNextSet} disabled={isPaused}>Next Set</button>
            <button type="button" onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Questions;
