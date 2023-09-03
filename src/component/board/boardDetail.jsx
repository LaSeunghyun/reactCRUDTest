import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { boardListSelector } from "../../recoil/atom"
import { Container, MainComponent, Component, BoardTitle, BoardContent } from "../../css/component"
import { ButtonComponentCss, ConfirmButtonCss } from "../../css/button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export default function DetailContent(){
    const { id } = useParams();
    const idx = Number(id)
    const [update, setUpdate] = useState(false)
    const [list, setList] = useRecoilState(boardListSelector)
    console.log(list)
    const navigate = useNavigate();

    const DelContent = () => {
            if(window.confirm("삭제할거야?")){
                const newList = [...list].filter((data) => data.idx !== idx)
                setList(newList)
            }        
        navigate(-1)
    }

    const UpdateContent = () => {
        const title = document.querySelector('div[name="title"]')
        const content = document.querySelector('div[name="content"]')
        if(update == false){
            window.confirm("수정할거야?")
            title.setAttribute('contenteditable', true);
            content.setAttribute('contenteditable', true);
            content.focus();
            setUpdate(true)
        }
        if(update == true){
            window.confirm("저장할거야?")
            const upDateContent = JSON.parse(JSON.stringify(list))
            upDateContent[idx].title = title.textContent
            upDateContent[idx].content = content.textContent
            setList(upDateContent)
            setUpdate(false)
            console.log(list)
        }
    }

    return(
        <Container>
            <Component>
                <MainComponent>
                    <BoardTitle name="title" key={list[id].idx} value={list[id].title}>{list[id].title}</BoardTitle>
                    <BoardContent name="content">{list[id].content}</BoardContent>
                    <ButtonComponentCss>
                        <ConfirmButtonCss onClick={() => UpdateContent()}>{update ? "저장" : "수정"}</ConfirmButtonCss>
                        <ConfirmButtonCss onClick={() => DelContent()}>삭제</ConfirmButtonCss>
                        <ConfirmButtonCss onClick={() => navigate(-1)}>뒤로</ConfirmButtonCss>
                    </ButtonComponentCss>
                </MainComponent>
            </Component>
        </Container>
    )
}