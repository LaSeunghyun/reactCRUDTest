import { useParams } from "react-router-dom"
import { useSetRecoilState, useRecoilState } from "recoil"
import { boardList } from "../../recoil/atom"
import { Container, MainComponent, Component, BoardTitle, BoardContent } from "../../css/component"
import { ButtonComponentCss, ConfirmButtonCss } from "../../css/button"
import { useNavigate } from "react-router-dom"


export default function DetailContent(){
    const { id } = useParams();
    const [list, setList] = useRecoilState(boardList)
    const navigate = useNavigate();

    const DelContent = () => {
        const idx = Number(id)
            if(window.confirm("삭제할거야?")){
                const newList = [...list].filter((data) => data.idx !== idx)
                setList(newList)
            }        
        navigate(-1)
    }

    const UpdateContent = () => {
        window.confirm("미적용")
    }

    return(
        <Container>
            <Component>
                <MainComponent>
                    <BoardTitle name="title" key={list[id].idx} defaultValue={list[id].title}/>
                    <BoardContent name="content" defaultValue={list[id].content}/>
                    <ButtonComponentCss>
                        <ConfirmButtonCss onClick={() => UpdateContent()}>수정</ConfirmButtonCss>
                        <ConfirmButtonCss onClick={() => DelContent()}>삭제</ConfirmButtonCss>
                        <ConfirmButtonCss onClick={() => navigate(-1)}>뒤로</ConfirmButtonCss>
                    </ButtonComponentCss>
                </MainComponent>
            </Component>
        </Container>
    )
}