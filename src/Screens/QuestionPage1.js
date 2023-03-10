import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import Radio from '../Components/Radio';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../Networks/QuestionState';

const QuestionPage1 = () => {
  const [sample] = useGlobalState('sample');

  let [ans1, setAns1] = useState({});

  // let Page2Answers = {
  //   ans1
  // }
  // console.log('Question Page1',Page2Answers)
  // console.log('sample :>> ', sample);
                      
  // Error states for each question: false - no error and true - error present
  let [error1, setError1] = useState(false);

  const data= sample
  let question = data.map((data)=> { 
    // let selected_company = 'ABSA BANK';//SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;

    if(id===1){
      let question = data.question
      let answers = data.answers
          return <Radio 
          defaultValue={'Hospitality'}
                    onValueChange = {setAns1} 
                    errorState = {error1}
                    question={question} 
                    answers={answers} 
                    sameName={id}
                    key={id}>
                </Radio>
                
    }else{
      // console.log('data else:>> NAN');
      return null;
    }
  });

  

  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    if(ans1.id !== undefined){
      console.log(process.env.PUBLIC_URL)
      if(ans1.id === 6 || ans1.id === 7 || ans1.id === 8) {
        navigate(process.env.PUBLIC_URL+`/question2`, {state:{sector_id:ans1.id,sector_name: ans1.value}})
      }else{
        navigate(process.env.PUBLIC_URL+`/subsector`, {state:{sector_id:ans1.id,sector_name: ans1.value}})
      }
      
    }else{
      setError1(true)
    }
  }

  const sector_description = `A minimum of 30 responses is required for a company to be featured in the Index, 
  and one can complete the survey for as many sectors as possible. A maximum of five (5) is, however, recommended.`
  const sector_title = 'SECTORS OF ORGANIZATIONS'
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_description={sector_description} sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={'Next'} onTap={onTapped} button_state='true' load={'24%'} page={2}></Footer>
      </div>
     );
}
export default QuestionPage1;

