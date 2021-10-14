import PersonProvider from './person/index';
import CompanyProvider from './company/index';

const GlobalStore = ({ children }) => {
    return (
        <PersonProvider>
            <CompanyProvider>
                {children}
            </CompanyProvider>
        </PersonProvider>
    )
};

export default GlobalStore;

//TODO: Pesquisar Next Provider 