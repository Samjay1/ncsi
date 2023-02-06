import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sector from '../Components/Sector';
import Radio from '../Components/Radio';
import { useState } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import { useGlobalState } from '../Networks/QuestionState';

const SubSector = () => {
  const [sample] = useGlobalState('sample');

  let location = useLocation();
  let [subSector, setSubSector] = useState({});

  // let Page2Answers = {
  //   ans1
  // }
  // console.log('Question Page1',Page2Answers)
              
  // Error states for each question: false - no error and true - error present
  let [error1, setError1] = useState(false);

  const data= sample
  let question = data.map((data)=> { 
    // let selected_company = 'ABSA BANK';//SECTOR FROM SESSION FROM PREVIOUS PAGE'ANSWER
    let id = data.id;
    if(id===25){
      let question = data.question
      let answers = data.answers.filter((value)=> {
        if(value.sector_id === location.state.sector_id){
            console.log('true',value.sector_id, question.sector_id)
            return true;
        }else{
            console.log('false',value.sector_id, question.sector_id)
            return false
        }
        
      });
          return <Radio 
          defaultValue={'Banking'}
                    onValueChange = {setSubSector} 
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

  console.log('SUBSECTOR :>> ', {...location.state, subsector_id:subSector.name,subsector_name:subSector.value, che:'kdjfkl', choice:subSector.choice||'null'});   
  

  const navigate = useNavigate();
  // error handling click event
  const onTapped = ()=>{
    console.log('subSector :>> ', subSector, subSector.id);
    if(subSector.id !== undefined){
      console.log(process.env.PUBLIC_URL)
      navigate(process.env.PUBLIC_URL+`/question2`, {state:{...location.state, subsector_id:subSector.name,subsector_name:subSector.value,che:'kdjfkl', choice:subSector.choice||'null'}})
    }else{
      setError1(true)
    }
  }

  const sector_description = `A minimum of 30 responses is required for a company to be featured in the Index, 
  and one can complete the survey for as many sectors as possible. A maximum of five (5) is, however, recommended.`
  const sector_title = 'SUB SECTORS OF ORGANIZATIONS'
    return ( 
        <div className="main-body">
        <Header key={'header'}></Header>
        <Sector sector_description={sector_description} sector_title={sector_title} key={'sector'}></Sector>
        {question}
        
        
        <Footer key={'footer'} title={'Next'} onTap={onTapped} button_state='true' load={'27%'} page={3}></Footer>
      </div>
     );
}
export default SubSector;

