// > styled-components 
import { Container } from './ProfileElement';

// > components 
import Screen from '../../components/Screen/Screen';
import ProfileModal from './ProfileModal';

// > data 
import ProfileData from './ProfileData';

// > react 
import { useState } from 'react';

const Profile = () => {
    const [profileData] = useState(ProfileData);
    const [hover, setHover] = useState(false);
    const [state, setState] = useState('');

    const currentHover = (e) => {
        e.preventDefault();
        const target = e.target;
        setState(target);
    }

    return(
        <>
            <Screen ProfileData={profileData}>
                <Container>
                    <img src="https://item.kakaocdn.net/do/1fe64c3abd31637277cb1a4bd8ddc5ce8b566dca82634c93f811198148a26065" alt="profile" className="profile" />
                    {
                        profileData.map((item) => 
                            <img 
                                key={item.id}
                                src={item.imageUrl}
                                alt=""
                                className={item.className}
                                onMouseEnter={(e) => {
                                    setHover(true)
                                    currentHover(e)
                                }}
                                onMouseLeave={() => setHover(false)}
                            />
                        )
                    }                    
                </Container>
            </Screen>
            {
                state.className === "html logo" && hover === true
                ? <ProfileModal state={state} />
                : null
            }
            {
                state.className === "css logo" && hover === true
                ? <ProfileModal state={state} />
                : null
            }
            {
                state.className === "javascript logo" && hover === true
                ? <ProfileModal state={state} />
                : null
            }
            {
                state.className === "react logo" && hover === true
                ? <ProfileModal state={state} />
                : null
            }
            {
                state.className === "typescript logo" && hover === true
                ? <ProfileModal state={state} />
                : null
            }
        </>
    )
}
export default Profile;