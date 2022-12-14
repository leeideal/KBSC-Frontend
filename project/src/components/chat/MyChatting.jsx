import { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle, faTrash } from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
    width: 100%;
    min-height: fit-content;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const Tab = styled.div`
    width: 100%;
    background-color: white;
    margin: 0;
    padding: 0 7%;
    display: flex;
    justify-content: space-between;
`
const TabTitle = styled.span`
    width: 180px;
    height: 35px;
    background-color: ${props => props.theme.tabTitleColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    color: white;
    font-weight: 600;
`
const TabInfo = styled.span`
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.theme.tabInfoColor};
    display: flex;
    align-items: center;
`

const Wrap = styled.div`
    padding: 40px 7%;
    width: 100%;
`
const ChatDiv = styled.div`
    width: 100%;
    height: 105px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5% 2%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`
const ChatForm = styled.form`
    width: 100%;
    height: 105px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5% 2%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

const ChatStateDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    ${props => (props.exist === 'false' ? css`align-items: start;` : css`justify-content: space-between;`)};
`

const Span = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.proceedingColor};
`

const DeleteBtn = styled.button`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.btnBlockColor};
    background-color: white;
    border: none;
    cursor: pointer;
`

const ChatStateSpan = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
`
const ChatStateLabel = styled.label`
    font-size: 10px;
    padding-right: 5px;
    cursor: pointer;
    color: ${props => props.theme.proceedingColor};
`
const ChatStateInput = styled.input`
    display: none;
    &:checked + ${ChatStateLabel} {
        color: ${props => props.value === 'will' ? props.theme.willColor : props.theme.wantColor};
    }
`

const ChatTitle = styled.div`
    height: 40%;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
`
const ChatTitleInput = styled.input`
    width: 50%;
    height: 100%;
    border: none;
    font-weight: 600;
    font-size: 15px;
    ::placeholder{
        font-family: 'Nanum Myeongjo', serif;
        color: black;
    }
    :focus {
        /* outline-color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor}; */
        outline: none;
        opacity: 0.2;
    }
`

const ChatFooterDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-size: 12px;
`
const ChatFooterInfoDiv = styled.div`
    color: rgba(162, 162, 166, 1);
`

const ChatFooterInfoSpan = styled.span`
    padding-right: 5px;
`

const SubmitBtn = styled.button`
    width: 125px;
    height: 25px;
    border-style: solid;
    border-width: thin;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    border-color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
    color: ${props => props.category === 'will' ? props.theme.willColor : props.theme.wantColor};
    background-color: white;
`

const ChatBtn = styled.button`
    width: 130px;
    height: 25px;
    border-style: solid;
    border-width: thin;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    border-color: ${props => props.state === 0 ? props.theme.btnBlockColor : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    color: ${props => props.state === 0 ? "white" : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
    background-color: ${props => props.state === 0 ? props.theme.btnBlockColor : "white"};
`

// category: will - ?????? ???????????? 
// category: want - ?????? ???????????? 
// exist: false - ????????? ?????? ???
// exist: true - ????????? ?????? ???
// state: 0 - ????????? ??????
// state: 1,2 - ????????? ??????

function MyChatting () {
    const [checkCategory, setCheckCategory] = useState("will");
    const [state, setState] = useState(1);
    const [formData, setFormData] = useState(
        {
            exist: false,
            category: checkCategory,
            title: "",
            nickname: "????????????",
            recommand: 0,
            state: state,
            partner: 'someone',
        },
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        name === 'category' && setCheckCategory(value);
        setFormData(prev => {
            return {...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(formData.title === "") {
            alert('????????? ??????????????????.');
        }else{
            setFormData(prev => ({...prev, exist : true}));
        }
    }

    const resetFormData = () => {
        setFormData(prev => {
            return {...prev, 
                exist: false,
                category: setCheckCategory('will'),
                title: "",
                nickname: "????????????",
                recommand: 0,
                state: setState(0),
            }
        })
    }

    const handleDelete = () =>{
        // e.preventDefault();
        window.confirm('?????????????????????????') && resetFormData()
    }

    return(
        <Container>
            <Tab>
                <TabTitle>??? ?????????</TabTitle>
                {formData.exist === false
                ? <TabInfo>* ?????? ??? ???????????? ?????????. ????????? ?????? ?????? ???????????? ??????????????????!</TabInfo>
                : <TabInfo></TabInfo>
                }
            </Tab>
            <Wrap>
                {formData.exist === false
                ? <ChatForm onSubmit={handleSubmit}>
                    <ChatStateDiv exist='false'>
                        <ChatStateInput 
                        type="radio" 
                        name="category" 
                        id="will" 
                        value="will"
                        onChange={handleChange} 
                        checked={checkCategory === "will"}/> 
                        <ChatStateLabel htmlFor="will">??????????????????</ChatStateLabel>
                        <Span>|</Span>
                        <ChatStateInput 
                        type="radio" 
                        name="category" 
                        id="want" 
                        value="want"  
                        onChange={handleChange}
                        checked={checkCategory === "want"}/> 
                        <ChatStateLabel htmlFor="want">??????????????????</ChatStateLabel>
                    </ChatStateDiv>
                    <ChatTitle>
                        <ChatTitleInput onChange={handleChange} placeholder="???????????? ????????? ??????????????????." value={formData.title} name="title" category={checkCategory}></ChatTitleInput>
                    </ChatTitle>
                    <ChatFooterDiv>
                        <ChatFooterInfoDiv style={{opacity: '0.5'}}>
                            <ChatFooterInfoSpan>??????</ChatFooterInfoSpan>
                            <Span>|</Span>
                            <ChatFooterInfoSpan>0??? ??????</ChatFooterInfoSpan>
                        </ChatFooterInfoDiv>
                        <SubmitBtn category={checkCategory}>????????? ????????????</SubmitBtn>
                    </ChatFooterDiv>
                </ChatForm>
                : 
                <ChatDiv>
                    <ChatStateDiv exist={formData.exist}>
                        <ChatStateSpan category={formData.category}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>
                        {formData.category === 'will' && formData.state === 0 ? '??????????????????' : 
                        formData.category === 'want' && formData.state === 0 ? '??????????????????' : 
                        `${formData.partner} ?????? ?????? ???`}
                        </ChatStateSpan>
                        <DeleteBtn onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></DeleteBtn>
                    </ChatStateDiv>
                    <ChatTitle>
                        {formData.title}
                    </ChatTitle>
                    <ChatFooterDiv>
                        <ChatFooterInfoDiv>
                            <ChatFooterInfoSpan>????????????</ChatFooterInfoSpan>
                            <Span>|</Span>
                            <ChatFooterInfoSpan>{formData.recommand}??? ??????</ChatFooterInfoSpan>
                        </ChatFooterInfoDiv>
                        <ChatBtn state={formData.state}>
                            {formData.state === 0 ? '?????? ???????????? ?????????' : '????????? ??????'}
                        </ChatBtn>
                    </ChatFooterDiv>
                </ChatDiv>
                }
            </Wrap>
        </Container>
        
    )
}
export default MyChatting;