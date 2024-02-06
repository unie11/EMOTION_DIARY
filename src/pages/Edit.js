import {useSearchParams, useNavigate} from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    console.log(mode);
    console.log(id);

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정페이지 입니다.</p>
            <button onClick={() => setSearchParams({who:'yunseo'})}>QS바꾸기</button>
            <button onClick={() => {
                navigate("/home");
            }}>HOME으로가기</button>
            <button onClick={() => {
            navigate(-1);}}>뒤로가기</button>
        </div>
    );
};

export default Edit;