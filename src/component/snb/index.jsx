import { NavLink } from "react-router-dom"
import { NavCss } from "../../css/component/menu"

export default function MenuList() {

    const menuList = [
        {
            'name' : '글쓰기 ',
            'value' : '/createBoard'
        },
        {
            'name' : '게시판 리스트',
            'value' : '/' 
        }
    ]
    console.log(menuList)

    return (
        <>
            {
                menuList.map((list) => {
                    return <NavCss to={list.value}>
                        {list.name}
                    </NavCss>
                })
            }
        </>
    )
}