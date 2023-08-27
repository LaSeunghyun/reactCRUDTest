import { Container, MainComponent, Component } from "../../css/component"
import { ListCss } from "../../css/list"
import { useRecoilValue } from "recoil"
import { boardList } from "../../recoil/atom"
import { ButtonComponentCss, ConfirmButtonCss } from "../../css/button"
import { useNavigate } from "react-router-dom"

export default function BoardList(){
    const List = useRecoilValue(boardList);
    
    const navigate = useNavigate();

    const detailContent = (idx) => {
        navigate(`/board/${idx}`)
    }

    return(
        <Container>
            <Component>
                <MainComponent>
                    {
                        [...List].reverse().map((list, idx) => {
                            return <ListCss key={idx} onClick={() => detailContent(idx) }>{list.title}</ListCss>
                        })
                    }
                    <ButtonComponentCss>
                            <ConfirmButtonCss onClick={() => navigate('/createBoard')}>글쓰기</ConfirmButtonCss>
                    </ButtonComponentCss>
                </MainComponent>
            </Component>
        </Container>
    )
}