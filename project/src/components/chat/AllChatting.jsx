import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';


const Container = styled.section`
    width: 100%;
    min-height: fit-content;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 100px;
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
const TabCategories = styled.span`
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.theme.tabInfoColor};
    display: flex;
    align-items: center;
`

const TabCategoryLabel = styled.label`
    padding-right: 5px;
    cursor: pointer;
`
const TabCategoryInput = styled.input`
    display: none;
    &:checked + ${TabCategoryLabel} {
        color: ${props => (props.value === 'want' ? props.theme.wantColor : props.theme.willColor)};
    }
`
const Span = styled.span`
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.theme.proceedingColor};
`

const Wrap = styled.div`
    padding: 40px 7%;
    width: 100%;
    min-height: 200px;

`
const ChatDiv = styled.div`
    width: 100%;
    height: 105px;
    margin-bottom: 13px;
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
    align-items: start;
`

const ChatStateSpan = styled.span`
    display: flex;
    align-items: center;
    /* font-family: 'Apple SD Gothic Neo B00', serif; */
    /* font-weight: 400; */
    font-size: 10px;
    padding-right: 5px;
    color: ${props => props.state === 0 ? props.theme.proceedingColor : props.state === 1 ? props.theme.willColor : props.theme.wantColor};
`

const ChatTitle = styled.div`
    height: 40%;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
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

const testAll = [
    {
        id: 1,
        state: 0,
        title: "????????? ?????? ???????????? ???! ????????? ????????? ?????? ?????? ???????????????.",
        nickname: "??????",
        recommand: 24,
        category: 'will',
    },
    {
        id: 2,
        state: 1,
        title: "????????? ????????? ?????? ?????? ?????????. ?????? ?????? ???????????? ?????? ?????????????????????!",
        nickname: "??????",
        recommand: 33,
        category: 'will',
    },
    {
        id: 3,
        state: 2,
        title: "?????? ?????? ????????? ?????????. ???????????????????",
        nickname: "??????",
        recommand: 2,
        category: 'want',
    },
    {
        id: 4,
        state: 1,
        title: "?????? ?????? ??? ??? ??? ??? ?????? ???. ???????????? ???????????????.",
        nickname: "??????",
        recommand: 24,
        category: 'will',
    },
    {
        id: 5,
        state: 2,
        title: "?????? ????????? ?????? ????????? ??? ?????????... ????????? ???????????? ???????????????",
        nickname: "??????",
        recommand: 82,
        category: 'want',
    },
    {
        id: 6,
        state: 2,
        title: "????????? ?????? ????????????. ????????? ????????? ??? ????????????? ????????? ?????? ????????? ??? ????????????? ?????? ????????? ?????????",
        nickname: "?????????",
        recommand: 87,
        category: 'want',
    },
    {
        id: 7,
        state: 1,
        title: "????????? ????????? ????????? ?????? ??????",
        nickname: "????????????",
        recommand: 87,
        category: 'will',
    },
    {
        id: 8,
        state: 0,
        title: "?????? ??????!",
        nickname: "????????????",
        recommand: 87,
        category: 'will',
    },
    {
        id: 9,
        state: 0,
        title: "?????? ?????????",
        nickname: "????????????",
        recommand: 87,
        category: 'will',
    },
]

// category: all - ??????
// category: will - ??????????????????
// category: want - ??????????????????
// state: 0 - ?????? ???
// state: 1,2 - ?????? ???

function AllChatting () {    
    const [ChatList, setChatList] = useState(testAll);
    const [checkCategory, setCheckCategory] = useState('all');

    const handleChange2 = (e) => {
        let newArr = [];
        const value = e.target.value;
        setCheckCategory(value);
        if(value === 'all') {
            newArr = testAll
        }else{
            newArr = testAll.filter(i => i.category === value);
        } 
        setChatList( newArr );
    }
    console.log(ChatList);

    return(
        <Container>
            <Tab>
                <TabTitle>????????? ??????</TabTitle>
                <TabCategories>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="all" 
                        value="all"
                        onChange={handleChange2} 
                        checked={checkCategory === "all"}/> 
                    <TabCategoryLabel htmlFor="all">??????</TabCategoryLabel>
                    <Span>|</Span>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="will2" 
                        value="will"  
                        onChange={handleChange2}
                        checked={checkCategory === "will"}/> 
                    <TabCategoryLabel htmlFor="will2">??????????????????</TabCategoryLabel>
                    <Span>|</Span>
                    <TabCategoryInput 
                        type="radio" 
                        name="categories" 
                        id="want2" 
                        value="want"  
                        onChange={handleChange2}
                        checked={checkCategory === "want"}/> 
                    <TabCategoryLabel htmlFor="want2">??????????????????</TabCategoryLabel>
                </TabCategories>
            </Tab>
            <Wrap>
                {ChatList.map(i => 
                    <ChatDiv key={i.id}>
                        <ChatStateDiv>
                            {i.state === 0 
                            ? <ChatStateSpan state={i.state}><FontAwesomeIcon icon={regularCircle} size="2xs" style={{paddingRight: '6px'}}/>?????? ?????? ??? </ChatStateSpan> 
                            : i.category === 'will' 
                            ? <ChatStateSpan state={i.state}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>?????????????????? </ChatStateSpan>
                            : <ChatStateSpan state={i.state}><FontAwesomeIcon icon={solidCircle} size="2xs" style={{paddingRight: '6px'}}/>?????????????????? </ChatStateSpan>
                            }
                        </ChatStateDiv> 
                        <ChatTitle>
                            {i.title}
                        </ChatTitle>
                        <ChatFooterDiv>
                            <ChatFooterInfoDiv>
                                <ChatFooterInfoSpan>{i.nickname}</ChatFooterInfoSpan>
                                <Span>|</Span>
                                <ChatFooterInfoSpan>{i.recommand}??? ??????</ChatFooterInfoSpan>
                            </ChatFooterInfoDiv>
                            <ChatBtn state={i.state}>{i.category === 'will' ? '????????????' : '????????????'}</ChatBtn>
                        </ChatFooterDiv>
                    </ChatDiv>
                )
                }
            </Wrap>
        </Container>
        
    )
}
export default AllChatting;