import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../../Loader/Loader";
import { getTempQuestion } from '../../../actions/tempQuestionsAction';
import "./Question.css" ;

const Questions = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    dispatch(getTempQuestion());
  }, []);

  const { loading, questions } = useSelector((state) => state.question);

  const handleCheckboxChange = (questionId, evaluationType) => {
    setFormData((prevData) => {
      const updatedData = [...prevData];
      const questionIndex = updatedData.findIndex((q) => q.id === questionId);

      if (questionIndex !== -1) {
        updatedData[questionIndex][evaluationType] = !updatedData[questionIndex][evaluationType];
      } else {
        updatedData.push({
          id: questionId,
          [evaluationType]: true,
        });
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now send formData to your backend or perform any other actions.
    console.log('Form Data:', formData);
  };

  return (
    <Fragment>
      {(loading === undefined || (loading === true && (questions === undefined || questions.length === 0)) || loading || questions === undefined) ? (
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
                {questions.map((question) => (
                  <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.yes)}
                        onChange={() => handleCheckboxChange(question.id, 'yes')}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.no)}
                        onChange={() => handleCheckboxChange(question.id, 'no')}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.partial)}
                        onChange={() => handleCheckboxChange(question.id, 'partial')}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={formData.some((data) => data.id === question.id && data.confidence)}
                        onChange={() => handleCheckboxChange(question.id, 'confidence')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Questions;
