import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const location = useLocation(); // props 대체
    const navigate = useNavigate();

    //ComponetDidMount 대체
    useEffect(() => {
        if (location.state === null) {
            navigate('/');
        }
    });

    if (location.state) {
        const { title } = location.state;
        return <span>{title}</span>;
    }
    return null;
}

export default Detail;