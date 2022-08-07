import Button from 'components/Button';
import useStep from 'hooks/useStep';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import questionsState from 'stores/questions/atom';
import styled from 'styled-components';

function ActionButtons() {
  const step = useStep();
  const questions = useRecoilValue(questionsState);
  const questionsLength = questions.length;

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate('done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;