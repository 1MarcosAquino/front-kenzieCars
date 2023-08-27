import { Header, Profile, Body, ButtonsHome } from '@/components';
import { GlobalStyle, ResetStyle } from '@/styles';

const user = {
    id: '017f79a3-78d8-4baf-a4f9-ba89f80ec73f',
    firstName: 'Marcos',
    lastName: 'Aquino',
    email: 'user@mail.com',
    description: 'loren',
    announcer: true,
};

// const address= {
//         id: '08d9df89-2b48-48f2-91c6-b3988946cc5c',
//         street: 'anyMore logo ali',
//         cep: '5700000',
//         number: 'anyBumber',
//         city: 'anyCity',
//         state: 'AL',
//     },
//     comments: [],
//     ads: [];

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <ResetStyle />
            {/* <Header children={<Profile user={user} />} /> */}
            <Header children={<ButtonsHome />} />
            <Body />
        </>
    );
}
