import { Link } from 'react-router-dom';

const surveys = [1, 2];

function SurveyListPage() {
  return (
    <ul>
      {surveys.map((survey) => {
        return (
          <Link to={`survey/${survey}/0`}>
            <li>{survey}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default SurveyListPage;