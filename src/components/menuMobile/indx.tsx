import menuIcon from '../../../public/menu.png';
import Image from 'next/image';
import { ButtonMobileStyle } from './style';
import { TButtonProps } from './interface';

export const ButtonMobile = (props: TButtonProps) => {
    return (
        <ButtonMobileStyle {...props}>
            <Image
                className="img"
                src={menuIcon}
                alt="Menu"
                width={30}
                height={30}
            />
        </ButtonMobileStyle>
    );
};
