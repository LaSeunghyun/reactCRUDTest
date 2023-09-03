import { SearchBar, TopBar, UserLog, SearchIndex } from "../../css/component/Gnb"
export default function TopMenu(){

    const SearchText = (e) => {
        if(e.key === 'Enter') {
            const { value } = e.target;
            console.log(value)
        }
    }

    return(
        
            <TopBar>
                <SearchBar>
                    <SearchIndex id={'searchIndex'} onKeyUp={SearchText}/>
                </SearchBar>
                <UserLog> 캐릭터 </UserLog>
            </TopBar>
    )
}