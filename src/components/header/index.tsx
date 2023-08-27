import Link from 'next/link';
import { HeaderStyle, HeaderTitleStyle } from './styles';
import { ButtonMobile } from '../menuMobile/indx';
import { useHeader } from './useHeader';

export const Header = ({ children }: { children: React.ReactNode }) => {
    const { isVisible, elementRef, handleClick } = useHeader();

    return (
        <HeaderStyle>
            <div className="container">
                <Link
                    href="/"
                    children={
                        <HeaderTitleStyle>
                            Motors <small>shop</small>
                        </HeaderTitleStyle>
                    }
                />
                <ButtonMobile
                    className={`menu ${!isVisible ? 'visible' : 'invisible'}`}
                    onClick={handleClick}
                />
                <div className="children">
                    <nav
                        ref={elementRef}
                        className={`navigation ${
                            isVisible ? 'visible' : 'invisible'
                        }`}
                    >
                        {children}
                    </nav>
                </div>
            </div>
        </HeaderStyle>
    );
};
