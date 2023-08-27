import { useState } from 'react';
import { ProfileStyle } from './styles';

type Tuser = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    announcer: boolean;
    description?: string;
};

const ProfileMenu = ({ announcer }: { announcer: boolean }) => {
    return (
        <ul className="profile__menu">
            <li className="profile__menu--item">Editar</li>
            <li className="profile__menu--item">Editar endereço</li>
            {announcer && (
                <li className="profile__menu--item">Meus anúncios</li>
            )}
            <li className="profile__menu--item">Sair</li>
        </ul>
    );
};

export const Profile = ({ user }: { user: Tuser }) => {
    const [menuProfile, setMenuProfile] = useState(false);
    const initialLetterName = user.firstName
        .charAt(0)
        .concat(user.lastName.charAt(0));

    return (
        <ProfileStyle>
            <button
                onClick={() => setMenuProfile(!menuProfile)}
                className="initialLetter"
            >
                <h4>{initialLetterName}</h4>
            </button>
            <p className="fullName">{`${user.firstName} ${user.lastName}`}</p>
            {menuProfile && <ProfileMenu announcer={user.announcer} />}
        </ProfileStyle>
    );
};
