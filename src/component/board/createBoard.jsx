import { Container, MainComponent, Component, BoardTitle, BoardContent, InputContent, InputTitle } from "../../css/component"
import { useSetRecoilState, useRecoilState } from "recoil"
import { boardList } from "../../recoil/atom"
import { ButtonComponentCss, ConfirmButtonCss } from "../../css/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function CreateBoard(){
    const [list, setList] = useRecoilState(boardList)
    // const setBoardList = useSetRecoilState(boardList)
    const navigate = useNavigate();
    const [board, setBoard] = useState({
        'idx' : 3,
        'id' : '라각운',
        'title' : '',
        'content' : '',
        'regdate' : '2023-08-27'
    })

    const inputs = (e) => {
        const {name, value} = e.target;

        const inputData = {
            ...board,
            [name] : value
        }
        setBoard(inputData)
    }

    const BoardSet = () => {
        const boardCopy = [...list]
        boardCopy.push(board)
        setList(boardCopy)
        navigate('/')
    }

    return(
        <Container>
            <Component>
                <MainComponent>
                    <InputTitle name="title" onChange={inputs} />
                    <InputContent name="content" onChange={inputs} />
                    <ButtonComponentCss>
                        <ConfirmButtonCss onClick={() => BoardSet()}>승인</ConfirmButtonCss>
                        <ConfirmButtonCss onClick={() => navigate('/')}>취소</ConfirmButtonCss>
                    </ButtonComponentCss>
                </MainComponent>
            </Component>
        </Container>
    )
}