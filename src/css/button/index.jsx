import styled from "styled-components";

const ButtonComponentCss = styled.div`
    display : flex;
    width : 96%;
    justify-content : flex-end;
`

const ConfirmButtonCss = styled(ButtonComponentCss)`
  border-radius: 5px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  cursor : pointer; 
  ${function (props) {
    if (props.children == "승인" || props.children == "수정" || props.children == "저장"  ) {
      return "background-color : #003BFF; color : white";
    } else if (props.children == "취소" || props.children == "삭제") {
      return "background-color : #FF2F2F; color : white";
    } else if (props.children == "글쓰기" || props.children == "뒤로" ) {
      return "background-color : #8292B9; color : white"
    }
  }};
`;

export { ConfirmButtonCss, ButtonComponentCss };
